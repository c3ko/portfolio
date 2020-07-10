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
      <Intro />
      <main className="mt-16 main-container mx-auto">
          <Projects />
        
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