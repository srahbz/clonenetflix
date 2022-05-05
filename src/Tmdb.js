const API_KEY = '03e6d8505ebc78a15d2bd774e5a48410';
const API_BASE = 'https://api.themoviedb.org/3';

export default {
    getHomeList: async ( ) =>{
        return[
            {
                slug:'originals',
                title:'Originais da Netflix',
                items: []
            },
            {
                slug:'trending',
                title:' Recomendados para Você ',
                items: []
            },
            {
                slug:'toprated',
                title:' Em Alta ',
                items: []
            },
            {
                slug:'action',
                title:' Ação ',
                items: []
            },
            {
                slug:'comedy',
                title:' Comedia ',
                items: []
            },
            {
                slug:'horror',
                title:' terror ',
                items: []
            },
            {
                slug:'documentary',
                title:' Documentarios ',
                items: []
            },
        ]
    }
}