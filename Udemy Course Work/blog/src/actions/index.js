import jsonPlaceholder from "../apis/jsonPlaceholder";


export const FetchPosts = async () => {
    const jsonResponse = await jsonPlaceholder.get('posts');
    return{
        type:'FETCH_POSTS',
        payload: jsonResponse
    };
};