import Head from 'next/head'
import { getAllPostsSorted } from '../lib/api'
import SideBar from '../components/SideBar'
import Intro from '../components/Intro'
import Projects from '../components/Projects'

export default function Home({ allPostsData }) {
  return (
    <>
      <Head>
        <title>Mohamed O.K</title>
        <link rel="icon" href="/img/rect83.png" />
      </Head>
      <main className="flex mt-16 px-8 main-container mx-auto">
        <SideBar />
        <div className="ml-24 mr-4 md:px-4 md:ml-24 mx-auto h-full w-auto">
          <Intro />
          <Projects />
        </div>
      </main>
    </>
  )
  
}

export async function getStaticProps(){
  const allPostsData = getAllPostsSorted([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: {
      allPostsData
    }
  }
}