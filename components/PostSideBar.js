import React from 'react';

function PostSideBar({ allPosts, currentPath }) {
    return (
        <ul className="list-none">
            { allPosts.map(post => (
                <li className="">
                    
                </li>
            )) }
        </ul>
    )
}

export default PostSideBar;
