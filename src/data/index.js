const FAVORITES = 'FAVORITE_LIST'

export function getData(){
    return JSON.parse(localStorage.getItem(FAVORITES))
}

export function setData(data){
    return localStorage.setItem(FAVORITES, JSON.stringify(data))
}