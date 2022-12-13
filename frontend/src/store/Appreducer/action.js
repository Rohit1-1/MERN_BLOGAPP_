import axios from "axios"
import { getData } from "../../utils/storage"
import { url } from "../../utils/url"
import { POSTS_GET_FAILURE, POSTS_GET_REQUEST, POSTS_GET_SUCCESS, USER_POSTS_GET_FAILURE, USER_POSTS_GET_REQUEST, USER_POSTS_GET_SUCCESS, USER_POSTS_ADD_FAILURE, USER_POSTS_ADD_REQUEST, USER_POSTS_UPDATE_SUCCESS, USER_POSTS_ADD_SUCCESS, USER_POSTS_DELETE_SUCCESS, USER_POSTS_DELETE_REQUEST, USER_POSTS_DELETE_FAILURE } from "./action.type"


export const getpost=()=>(dispatch)=>{
    let token=getData("token") || "abc"
dispatch(getpost_request())
return axios.get(`${url}/post`,{
    headers:{
        authorization: `Bearer ${token}`,
    }
}).then((res)=>{
    console.log(res,"hme")
    dispatch({type:POSTS_GET_SUCCESS,payload:res.data})
}).catch((err)=>{
    dispatch(getpost_failure())
})
}
export const getpost_request=()=>{
    return {
        type:POSTS_GET_REQUEST
    }
}

export const getpost_failure=()=>{
    return {
        type:POSTS_GET_FAILURE
    }
}



export const user_new_post=(payload)=>(dispatch)=>{
    let token=getData("token") || "abc"
    console.log(token,payload,"user");
    dispatch(user_new_post_request())
    return axios.post(`${url}/post/create`,payload,{
        headers:{
            "Content-Type": "multipart/form-data",
            authorization: `Bearer ${token}`
           
        }
    }).then((res)=>{
        console.log(res,"hme")
        dispatch({type:USER_POSTS_ADD_SUCCESS})
        return(res.data)
    }).catch((err)=>{
        dispatch(user_new_post_failure())
    })
    }
    export const user_new_post_request=()=>{
        return {
            type:USER_POSTS_ADD_REQUEST
        }
    }
    
    export const user_new_post_failure=()=>{
        return {
            type:USER_POSTS_ADD_FAILURE
        }
    }


    export const get_user_post=()=>(dispatch)=>{
        let token=getData("token") || "abc"
       // console.log(token,payload,"user");
        dispatch(get_user_request())
        return axios.get(`${url}/post/feed`,{
            headers:{
                "Content-Type": "multipart/form-data",
                authorization: `Bearer ${token}`
               
            }
        }).then((res)=>{
            console.log(res,"hme")
            dispatch({type:USER_POSTS_GET_SUCCESS,payload:res.data})
        }).catch((err)=>{
            dispatch(get_user_post_failure())
        })
        }
        export const get_user_request=()=>{
            return {
                type:USER_POSTS_GET_REQUEST
            }
        }
        
        export const get_user_post_failure=()=>{
            return {
                type:USER_POSTS_GET_FAILURE
            }
        }


        export const update_user_post=(id,payload)=>(dispatch)=>{
            let token=getData("token") || "abc"
           // console.log(token,payload,"user");
            dispatch(update_user_request())
            return axios.patch(`${url}/post/update/${id}`,payload,{
                headers:{
                    "Content-Type": "multipart/form-data",
                    authorization: `Bearer ${token}`
                   
                }
            }).then((res)=>{
                console.log(res,"hme")
                dispatch({type:USER_POSTS_UPDATE_SUCCESS})
                return(res.data)
            }).catch((err)=>{
                dispatch(update_user_post_failure())
            })
            }
            export const update_user_request=()=>{
                return {
                    type:USER_POSTS_GET_REQUEST
                }
            }
            
            export const update_user_post_failure=()=>{
                return {
                    type:USER_POSTS_GET_FAILURE
                }
            }



            export const delete_user_post=(id)=>(dispatch)=>{
                let token=getData("token") || "abc"
               // console.log(token,payload,"user");
                dispatch(delete_user_request())
                return axios.delete(`${url}/post/delete/${id}`,{
                    headers:{
                        "Content-Type": "multipart/form-data",
                        authorization: `Bearer ${token}`
                       
                    }
                }).then((res)=>{
                    console.log(res,"hme")
                    dispatch({type:USER_POSTS_DELETE_SUCCESS})
                    return(res.data)
                }).catch((err)=>{
                    dispatch(delete_user_post_failure())
                })
                }
                export const delete_user_request=()=>{
                    return {
                        type:USER_POSTS_DELETE_REQUEST
                    }
                }
                
                export const delete_user_post_failure=()=>{
                    return {
                        type:USER_POSTS_DELETE_FAILURE
                    }
                }