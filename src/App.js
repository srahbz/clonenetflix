import React,{ useEffect,useState } from "react";
import Tmdb from "./Tmdb";

export default () => {

  const [movieList,setMovieList] = useState([])

  useEffect(() => {
    const loadAll = async() => {
      // pegando a lista total
      let list = await Tmdb.getHomeList();
      setMovieList(list)
    }

    loadAll();

  }, []);

  return(
    <div>
      Hello World
    </div>
  );
}