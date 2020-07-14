import React from 'react';

function PostItem({ post }) {
    return (
        <li className="bg-white border-2 border-gray-300  rounded-md px-5 py-3 mx-2 mb-4 max-w-xl">
            <h4 className="text-2xl mb-2 font-semibold">{post.title}</h4>
            <p className="text-xl mb-2 font-medium">{post.date}</p>
            <p className="text-md">{post.excerpt}</p>
        </li>
    )
}

function RecentPosts({ posts }) {
    return (
        <section id="blog" className="bg-gray-200 py-12">
            <div className="mx-auto w-10/12">
                <h2 className="section-heading h-12 mx-auto text-purple-800 mb-0">Blog</h2>
                <ul className="flex flex-wrap justify-center mt-8">
                    {posts.map(post => <PostItem post={post}/>)}
                </ul>

            </div>
        </section>
    )
}

export default RecentPosts;
