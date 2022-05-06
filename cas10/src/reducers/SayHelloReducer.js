const initialState = { 
    greeting:"HI !",
    pozdrav:"zdravo!"
    
}

const SayHelloReducer = (state = initialState,action) => {
   
      switch(action.type){
        case "SAY_HELLO":
            return{
                ...state,
                greeting:action.payload
            }
        case "KAZI_ZDRAVO":
            return{
                ...state,
                pozdrav:action.payload
            }    
            default:return state;
      }
}

export default SayHelloReducer;