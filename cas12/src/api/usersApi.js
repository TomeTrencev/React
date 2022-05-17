
import { properties } from "./../config/properties"

export const getUsers = () => {
    return fetch(`${properties.api.root}/users`)
            .then(res=>res.json())
            .then(json=>Promise.resolve(json))
            .catch(err=>Promise.reject(err))
}

export const removeUser = (id) => {
    return fetch(`${properties.api.root}/users/${id}`, {
        method:'DELETE'
    })
    .then(res=>res.json())
    .then(json=>Promise.resolve(id))
    .catch(err=>Promise.reject(err))
}

export const changeUser = (user) => {
    return fetch(`${properties.api.root}/users/${user.id}`,{
        method:'PUT',
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(json=>Promise.resolve(json))
    .catch(err=>Promise.reject(err))
}