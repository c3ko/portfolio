import Head from 'next/head'
import { getAllPostsSorted } from '../lib/api'
import NavBar from '../components/NavBar'
import Intro from '../components/Intro'
import Projects from '../components/Projects'
import About from '../components/About'
import Experience from '../components/Experience'
import RecentPosts from '../components/RecentPosts'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

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
          <About />
          <Projects />
          <Experience />
          <RecentPosts posts={allPostsData} />
          <Contact />
          <Footer />
      </main>
    </>
  )
  
}

export async function getStaticProps(){
  const allPostsData = getAllPostsSorted([
    'title',
    'date',
    'slug',
    'tags'
  ])

  return {
    props: {
      allPostsData
    }
  }
}