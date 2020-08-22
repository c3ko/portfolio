import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring'
import { getDateString } from '../lib/helpers'
import Link from 'next/link'

function PostItem({ post }) {
    const [{ scale }, set] = useSpring(() => ({ scale: '1.0'}))
    const dateString = getDateString(post.date)
    return (
        <animated.li style={{transform: scale.interpolate(v => `scale(${v})`)}} 
            onMouseEnter={() => {
                set({scale: '1.04'})
            }} 
            onMouseLeave={() => set({scale: '1.0'})} 
            className="text-center cursor-pointer bg-white shadow-md hover:shadow-lg border-2 border-gray-300 hover:border-purple-300  rounded-md px-5 py-3 mx-2 mb-4 max-w-xl">
            <Link  href={`/blog/${post.slug}`}>
                <a className="w-full">
                    <ul className="flex mb-1 flex-wrap">
                        {post.tags.map(tag => (
                            <li className=" rounded-sm mb-1 px-2 py-1 bg-purple-600 font-semibold text-gray-300 mr-2">
                                {tag}
                            </li>
                        ))}
                    </ul>
                    <h4 className="text-md sm:text-2xl text-gray-800 mb-2 font-bold">{post.title}</h4>
                    <p className="">{dateString}</p>    
                </a>
            </Link>
        </animated.li>
    )
}

function RecentPosts({ posts }) {

    return (
        <section id="blog" className=" py-12">
            <div className="mx-auto w-10/12">
                <h2 className="section-heading h-12 mx-auto text-purple-800 mb-0">Blog</h2>
                <ul className="flex flex-col items-center sm:flex-row flex-wrap sm:items-start justify-center mt-8">
                    {posts.map(post => <PostItem post={post} />)}
                </ul>

            </div>
        </section>
    )
}

export default RecentPosts;
