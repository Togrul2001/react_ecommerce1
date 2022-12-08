const FAVORITES = 'FAVORITE_LIST'
const USERTOKEN = 'USER_TOKEN'

export function getData(){
    return JSON.parse(localStorage.getItem(FAVORITES))
}

export function setData(data){
    return localStorage.setItem(FAVORITES, JSON.stringify(data))
}

export function getToken(){
    return JSON.parse(localStorage.getItem(USERTOKEN))
}

export function setToken(data){
    return localStorage.setItem(USERTOKEN, JSON.stringify(data))
}