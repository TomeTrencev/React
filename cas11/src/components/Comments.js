import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCommentsRequest } from './../actions/CommentsActions'

export const Comments = () => {
    const dispatch = useDispatch();
    const comments = useSelector(state => state.CommentsReducer.comments);
    const message = useSelector(state => state.CommentsReducer.message);

    useEffect(() => {
        dispatch(fetchCommentsRequest());
    }, [dispatch])
    return (
        <div id='comments'>
            <h2>Comments:{comments.length}</h2>
            {message && <p> {message}</p>}
            <table border="1">
            <thead >
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Body</th>
                </tr>
            </thead>
            <tbody>
                {comments.map(comment=>{
                    return(
                        <tr key={comment.id}>
                            <td>{comment.name}</td>
                            <td>{comment.email}</td>
                            <td>{comment.body}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>  
        </div>
    )
}