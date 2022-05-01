import React, { useEffect, useState } from "react";

export const Comments = () => {

    const [comments, setComments] = useState([]);

    function getComments(){
        fetch("https://jsonplaceholder.typicode.com/comments")
        .then(res=>res.json())
        .then(json=>setComments(json))
        .catch(err=>alert(err))
    }

    useEffect(()=>{
        getComments()
    },[])

    return(
        <div>
            {comments.length > 0 ? 
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
        : <p>Loading....</p>  
        }
        </div>
    )
}