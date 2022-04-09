import React from 'react';

export function Comments(props) {
    console.log(props);
    return (
        <div className='comments'>
            {props.hasComments && <h2>Comments</h2>}
            {props.multipleComments === true ? <p>Some comments</p>
                : <p>Only a few Comments</p>
            }

        </div>
    )
}