import React from "react";

export const Posts = ({ listOfPosts }) => {

    return (
        <div>
            {listOfPosts.length > 0 ?
                <table border="1">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Body</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listOfPosts.map(post => {
                            return (
                                <tr key={post.id}>
                                    <td>{post.title}</td>
                                    <td>{post.body}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                : <p>Loading....</p>}
        </div>
    )
}