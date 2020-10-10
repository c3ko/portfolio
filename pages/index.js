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

import AnimationWrapper from '../components/AnimationWrapper'

export default function Home({ allPostsData }) {

  const mainComponents = [About, Projects, Experience, RecentPosts, Contact]
  const renderMainComponents = mainComponents.map((Component, i) => {
    return <AnimationWrapper><Component key={i} posts={ Component === RecentPosts ? allPostsData : null}/></AnimationWrapper>
  })

 return (
  <div className="h-full">
    <Head>
      <title>Mohamed O.K</title>
      <link rel="icon" href="/img/rect83.png" />
      <meta name="robots" content="noindex" />
    </Head>
    <Intro className=" h-full"/>
    <NavBar />
    <main className="bg-gray-100">
      {renderMainComponents}

    </main>
    <Footer />
  </div>
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