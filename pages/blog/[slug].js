import React from 'react'
import { useSpring, useSprings, animated } from 'react-spring'
import { useRouter } from 'next/router'
import markdownToHtml from '../../lib/markdownToHtml'
import {
    getAllPostsSorted,
    getPostBySlug
 } from '../../lib/api'

function Post({ post }) {
    const router = useRouter()
    return (
        <div className="bg-purple-100 h-screen px-4 pt-4">
            <nav className="">
                <button className="mb-4" onClick={() => router.back()}>
                    <svg className="h-12 w-12 fill-current text-purple-700 cursor-pointer" enable-background="new 0 0 515.556 515.556"  viewBox="0 0 515.556 515.556"  xmlns="http://www.w3.org/2000/svg"><path d="m128.885 257.778 257.778-257.778v128.886l-128.889 128.892 128.897 128.886-.008 128.892z"/></svg>
                </button>
                <ul className="flex flex-col">
                    {}
                </ul>
            </nav>
        </div>
    )
}


export async function getStaticProps({ params }) {
    const post = getPostBySlug(params.slug, [
      'title',
      'date',
      'content',
    ])

    const content = await markdownToHtml(post.content || '')
  
    return {
      props: {
        post: {
          ...post,
          content,
        },
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
