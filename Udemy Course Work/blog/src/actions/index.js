import jsonPlaceholder from "../apis/jsonPlaceholder";


export const FetchPosts = () => {

    return function(dispatch,  getState) {
        const jsonResponse = jsonPlaceholder.get('posts');
        return{
            type:'FETCH_POSTS',
            payload: jsonResponse
        };
    }
};