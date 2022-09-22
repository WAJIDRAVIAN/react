import jsonPlaceholder from "../apis/jsonPlaceholder";


export const FetchPosts = () => {

    return async (dispatch)=> {
        const jsonResponse = await jsonPlaceholder.get('posts');
        
        dispatch({
            type:'FETCH_POST',
            payload: jsonResponse
        });
    }
};

// export const  SelectPost=()=>{
//     return{
//         type:'SELECT_POST'
//     }
// };