import type { NextPage } from 'next'
import Header from '../components/Layout/Header'
import Form from '../components/Form'
import PostFeed from '../components/posts/PostFeed'
const Home: NextPage = () => {
  return (
    <>
    <Header label="Home" />
    <Form placeholder="What's Happening" />
    <PostFeed />
    </>
  )
}

export default Home;
