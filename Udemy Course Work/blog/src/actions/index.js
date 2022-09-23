import jsonPlaceholder from "../apis/jsonPlaceholder";


export const FetchPosts = () => {

    return async (dispatch)=> {
        const jsonResponse = await jsonPlaceholder.get('posts');
        
        dispatch({
            type:'FETCH_POSTS',
            payload: jsonResponse.data
        });
    }
};

// export const  SelectPost=()=>{
//     return{
//         type:'SELECT_POST'
//     }
// };