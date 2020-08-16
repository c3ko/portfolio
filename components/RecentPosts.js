import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring'
import Link from 'next/link'

function PostItem({ post }) {
    const buttonProps = useSpring({ opacity: 1, from: { opacity: 0} })
    const [{ scale }, set] = useSpring(() => ({ scale: '1.0'}))
    const Months = {
        1: 'Jan', 2: 'Feb', 3: 'Mar', 4: 'Apr', 5: 'May', 6: 'Jun',
        7: 'Jul', 8: 'Aug', 9: 'Sep', 10: 'Oct', 11: 'Nov', 12: 'Dec'
    }
    // Convert unix timestamps to milliseconds and create Date object
    const date = new Date(post.date * 1000)
    const dateString = `${date.getDate()} ${Months[date.getMonth() + 1]} ${date.getFullYear()}`
    return (
        <animated.li style={{transform: scale.interpolate(v => `scale(${v})`)}} 
            onMouseEnter={() => {
                set({scale: '1.04'})
            }} 
            onMouseLeave={() => set({scale: '1.0'})} 
            className="inline-flex cursor-pointer bg-white shadow-md hover:shadow-lg border-2 border-gray-300 hover:border-purple-300  rounded-md px-5 py-3 mx-2 mb-4 w-2/5 max-w-xl">
            <Link href={`/blog/${post.slug}`}>
                <a>
                    <ul className="flex mb-1 flex-wrap">
                        {post.tags.map(tag => (
                            <li className=" rounded-sm mb-1 px-2 py-1 bg-purple-600 font-semibold text-gray-300 mr-2">
                                {tag}
                            </li>
                        ))}
                    </ul>
                    <h4 className="text-2xl text-gray-800 mb-2 font-bold">{post.title}</h4>
                    <p className="text-xl text-gray-800 mb-2 font-normal">{dateString}</p>    
                </a>
            </Link>
                

            
        
        </animated.li>
    )
}

function RecentPosts({ posts }) {

    return (
        <section id="blog" className="bg-gray-100 py-12">
            <div className="mx-auto w-10/12">
                <h2 className="section-heading h-12 mx-auto text-purple-800 mb-0">Blog</h2>
                <p className="mx-auto max-w-4xl mt-8 text-xl font-medium">
                    The most recent posts from my blog, where I write about my thoughts and experience using different technologies to develop sites/applications (such as the site you're currently reading this in).
                </p>

                <ul className="flex flex-row flex-wrap items-start justify-center mt-8">
                    {posts.map(post => <PostItem post={post}/>)}
                </ul>

            </div>
        </section>
    )
}

export default RecentPosts;
