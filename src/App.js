import React,{ useEffect,useState } from "react";
import Tmdb from "./Tmdb";
import MovieRow from "./Components/MovieRow";
import './App.css'
import FeaturedMovie from "./Components/FeaturedMovie";
import Header from "./Components/Header";

export default () => {

  const [movieList,setMovieList] = useState([])
  const [featuredData, setFeaturedData] =useState(null)
  const [blackHeader,setBlackHeader] = useState(false)

  useEffect(() => {
    const loadAll = async() => {
      // pegando a lista total
      let list = await Tmdb.getHomeList();
      setMovieList(list)

      // pegando filme em destaque 
      let originals = list.filter(i=>i.slug === "originals")
      let randomChosen =Math.floor(Math.random() * (originals[0].items.results.length - 1))
      let chosen = originals[0].items.results[randomChosen]
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id,'tv')

      setFeaturedData(chosenInfo)
    }

    loadAll();

  }, []);
  useEffect(() => {
    const scrolListener = () =>{
      if(window.scrollY > 10){
        setBlackHeader(true)
      }else{
        setBlackHeader(false)
      }
    }
    window.addEventListener('scroll',scrolListener)
    return()=>{
      window.removeEventListener('scroll',scrolListener)
    }
  },[])

  return(
    <div className="page">

      <Header black={blackHeader}/>

      {featuredData &&
       <FeaturedMovie item={featuredData}/>
      }

     <section className="lists">
       {movieList.map((item,key)=>(
         <MovieRow key={key} title={item.title} items={item.items}/>
       ))}
     </section>
    </div>
  );
}