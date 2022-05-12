import {FETCH_COMMENTS_FAIL, FETCH_COMMENTS_SUCCES} from './../constants/CommentsConstants';

export const fetchCommentsSucces = (comments) => {
    return{
        type: FETCH_COMMENTS_SUCCES,
        payload:comments
    }
}

export const fetchCommentsFail = (error) => {
    return{
        type:FETCH_COMMENTS_FAIL,
        payload:error
    }
}

export const fetchCommentsRequest = () => {
    return dispatch =>{
        fetch("https://jsonplaceholder.typicode.com/comments")
        .then(res=>res.json())
        .then(json=>dispatch(fetchCommentsSucces(json)))
        .catch(err=> dispatch(fetchCommentsFail(err)))
    }
}