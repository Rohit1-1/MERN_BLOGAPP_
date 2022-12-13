
import { POSTS_GET_SUCCESS, POSTS_GET_REQUEST, POSTS_GET_FAILURE, USER_POSTS_ADD_FAILURE, USER_POSTS_ADD_REQUEST, USER_POSTS_GET_REQUEST, USER_POSTS_GET_FAILURE, USER_POSTS_GET_SUCCESS, USER_POSTS_UPDATE_REQUEST, USER_POSTS_UPDATE_FAILURE, USER_POSTS_UPDATE_SUCCESS, USER_POSTS_ADD_SUCCESS, USER_POSTS_DELETE_REQUEST, USER_POSTS_DELETE_FAILURE, USER_POSTS_DELETE_SUCCESS} from "./action.type"


const initialState={
    isLoading:false,
    iscreating:false,
    isError:false,
    data:[],
    userblogdata:[]
}

export const reducer=(state=initialState,{type,payload})=>{
    console.log(payload)
  switch(type){
    case(POSTS_GET_SUCCESS):{
        return{
            ...state,
            isLoading:false,
            isError:false,
            data:payload
        }
    }
    case(POSTS_GET_REQUEST):{
        return{
            ...state,
            isLoading:true,
            isError:false,
        }
    }
    case(POSTS_GET_FAILURE):{
        return{
            ...state,
            isLoading:false,
            isError:true,
          
        }
    }
    case(USER_POSTS_GET_SUCCESS):{
        return{
            ...state,
            isLoading:false,
            isError:false,
            userblogdata:payload
        }
    }
    case(USER_POSTS_GET_REQUEST):{
        return{
            ...state,
            isLoading:true,
            isError:false,
        }
    }
    case(USER_POSTS_GET_FAILURE):{
        return{
            ...state,
            isLoading:false,
            isError:true,
          
        }
    }
    case(USER_POSTS_ADD_REQUEST):{
        return{
            ...state,
            isLoading:false,
            isError:false,
            iscreating:true,
        }
    }

    case(USER_POSTS_ADD_FAILURE):{
        return{
            ...state,
            isLoading:false,
            isError:true,
          
        }
    }
    case(USER_POSTS_ADD_SUCCESS):{
        return{
            ...state,
            isLoading:false,
            isError:false,
            iscreating:false,
          
        }
    }
    case(USER_POSTS_UPDATE_REQUEST):{
        return{
            ...state,
            isLoading:true,
            isError:false,
        }
    }

    case(USER_POSTS_UPDATE_FAILURE):{
        return{
            ...state,
            isLoading:false,
            isError:true,
          
        }
    }
    case(USER_POSTS_UPDATE_SUCCESS):{
        return{
            ...state,
            isLoading:false,
            isError:false,
          
        }
    }

    case(USER_POSTS_DELETE_REQUEST):{
        return{
            ...state,
            isLoading:true,
            isError:false,
        }
    }

    case(USER_POSTS_DELETE_FAILURE):{
        return{
            ...state,
            isLoading:false,
            isError:true,
          
        }
    }
    case(USER_POSTS_DELETE_SUCCESS):{
        return{
            ...state,
            isLoading:false,
            isError:false,
          
        }
    }
   
    default:
        return state
}

}
