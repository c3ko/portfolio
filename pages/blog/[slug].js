import React from 'react'
import { useSpring, animated } from 'react-spring'
import Link from 'next/link'
import markdownToHtml from '../../lib/markdownToHtml'
import readingTime from 'reading-time'
import {
    getAllPostsSorted,
    getPostBySlug
 } from '../../lib/api'

import {
  getDateString
} from '../../lib/helpers'
import PostBody from '../../components/PostBody'


function Post({ post, allPosts }) {

    const props = useSpring({ config: {duration: 350}, opacity: 1, from: {opacity: 0}})
    

    const readTime = readingTime(post.content)
    
    return (
        <animated.div 
          style={props}
          className="flex bg-gray-100 w-5/6 max-w-6xl mt-32 mb-16 mx-4 sm:mx-auto"
        >
            <nav className="pt-8 w-3/12">
                <Link href="/">
                    <a className=" ">
                      <span className="inline-flex text-purple-800 hover:text-green-600">
                        <svg className="h-12 w-12 fill-current  cursor-pointer" enableBackground="new 0 0 515.556 515.556"  viewBox="0 0 515.556 515.556"  xmlns="http://www.w3.org/2000/svg"><path d="m128.885 257.778 257.778-257.778v128.886l-128.889 128.892 128.897 128.886-.008 128.892z"/></svg>
                        <p className=" hidden sm:block self-center font-bold uppercase text-lg">HOME</p>
                      </span>
                    </a>
                  </Link>


                <ul className="hidden md:flex flex-col mr-4 mt-8">
                    {allPosts.map(otherPost => (
                      <li key={otherPost.slug} className={"py-4 font-medium text-gray-900 hover:text-purple-700" + (otherPost.slug === post.slug ? " text-purple-700 " : "" )}>
                        <Link href={`/blog/${otherPost.slug}`}><a>{otherPost.title}</a></Link>
                      </li>
                    ))}
                </ul>

            </nav>
            <section className="w-9/12">
              <article className="">
                  <h1 className="text-gray-800 text-400 text-4xl font-bold mb-4">
                    {post.title}
                  </h1>
                  <span className="mb-8 inline-flex justify-between w-full">
                    <p className="font-semibold text-gray-700 text-xl ">{getDateString(post.date)}</p>
                    <p className="font-semibold text-purple-700 text-xl ">{readTime.text}</p>
                  </span>
                  <PostBody markdown={post.content} />
                  
              </article>
            </section>

        </animated.div>
    )
}


export async function getStaticProps({ params }) {
    const post = getPostBySlug(params.slug, [
      'title',
      'date',
      'content',
    ])

    const allPosts = getAllPostsSorted([
      'title',
      'slug'
    ])

    
  
    return {
      props: {
        post,
        allPosts
      },
    }
}

export async function getStaticPaths() {
    const posts = getAllPostsSorted(['slug'])
  
    return {
      paths: posts.map((post) => {
        return {
          params: {
            slug: post.slug,
          },
        }
      }),
      fallback: false,
    }
  }

export default Post;
