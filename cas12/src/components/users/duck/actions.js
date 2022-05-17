import constants from './constants'

const fetchUsersRequest = (requestParams)=> {
      return{
          type:constants.FETCH_USERS_REQUEST,
          payload:requestParams
      }
}

const fetchUsersSucces = (users)=> {
    return{
        type:constants.FETCH_USERS_SUCCES,
        payload:users
    }
}

const fetchUsersFail = (error)=> {
    return{
        type:constants.FETCH_USERS_FAIL,
        payload:error
    }
}

const deleteUsersRequest = (requestParams) =>{
    return{
        type:constants.DELETE_USERS_REQUEST,
        payload:requestParams
    }
}

const deleteUsersSucces = (commentId) => {
    return{
        type:constants.DELETE_USERS_REQUEST,
        payload:commentId
    }
}

const deleteUsersFail = (error) => {
    return{
        type:constants.DELETE_USERS_FAIL,
        payload:error
    }
}

const editUsersRequest = (requestParams) => {
    return{
        type:constants.EDIT_USERS_REQUEST,
        payload:requestParams
    }
}

const editUsersSucces = (comment) => {
    return{
        type:constants.EDIT_USERS_SUCCES,
        type:comment
    }
}

const editUsersFail = (error) => {
    return{
        type:constants.EDIT_USERS_FAIL,
        type:error
    }
}

export default{
    fetchUsersFail,
    fetchUsersRequest,
    fetchUsersSucces,
    deleteUsersFail,
    deleteUsersRequest,
    deleteUsersSucces,
    editUsersRequest,
    editUsersSucces,
    editUsersFail
}