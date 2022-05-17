import constants from "./constants";
const initalState = {
    users:[],
    message:undefined,
    loading:false
}

export default function reducer(state=initalState, action){

    switch(action.type){
            case constants.FETCH_USERS_REQUEST:
                return{
                    ...state,
                    loading:true
                }
            case constants.FETCH_USERS_SUCCES:
                return{
                    ...state,
                    users:action.payload,
                    loading:false
                } 
            case constants.FETCH_USERS_FAIL:
                return{
                    ...state,
                    message:action.payload,
                    loading:false
                }       
            case constants.DELETE_USERS_REQUEST:
                return{
                    ...state,
                    loading:true
                }
            case constants.DELETE_USERS_SUCCES:
                return{
                    ...state,
                    users:[...state.users.filter(user=> user.id !== action.payload)]
                }    
            case constants.DELETE_USERS_FAIL:
                return{
                    ...state,
                    message:action.payload
                }
            case constants.EDIT_USERS_REQUEST:
                return{
                    ...state
                }    
            case constants.EDIT_USERS_SUCCES:
                return{
                    ...state,
                    users:[...state.users.map(user => user.id ===action.payload.id ? action.payload : user)]
                }
            case constants.EDIT_USERS_FAIL:
                return{
                    ...state,
                    message:action.payload
                }        


        default:return state;
    }
}