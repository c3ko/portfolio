import Head from 'next/head'
import { getAllPostsSorted } from '../lib/api'
import NavBar from '../components/NavBar'
import Intro from '../components/Intro'
import Projects from '../components/Projects'
import About from '../components/About'

export default function Home({ allPostsData }) {
  return (
    <>
      <Head>
        <title>Mohamed O.K</title>
        <link rel="icon" href="/img/rect83.png" />
      </Head>
      <Intro />
      <NavBar />
      <main className="">
          <About posts={allPostsData} />
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