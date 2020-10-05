import React, { Suspense, useContext, useState } from "react"
import Layout from "app/layouts/Layout"
import { Head, BlitzPage, useSession } from "blitz"
import PostList from "app/posts/components/PostList"
import MyPostList from "app/posts/components/MyPostList"
import Header from "app/components/Header"
import Footer from "app/components/Footer"
import ToggleTheme from "app/posts/components/ToggleTheme"
import { ThemeContext } from "app/ThemeContext/ThemeContext"


const PostsPage: BlitzPage = () => {

  const user = useSession().userId
  const [page, setPage] = useState('blog')
  const [cat, setCat] = useState(0)
  const {isDarkTheme, dark, light} = useContext(ThemeContext)
  const theme = isDarkTheme ? dark : light
  console.log(theme)
  return (
    <div  style={{background: theme.ui, color: theme.syntax}}>
      <Head>
        <title>Posts</title>
      </Head>
      <Header />
      <main>

        <ToggleTheme />
        <h1>Posts</h1>
        <div>
          {user &&(
            <>
              <button onClick={() => setPage('blog')}>Blogs</button>
              <button onClick={() => setPage('my blog')}>My Blogs</button>
            </>
          )}
        </div>

        <div>
          <label htmlFor="select">Choose a category: </label>
          <select name="category" id="" onChange = {(e) => setCat(parseInt(e.target.value))}>
            <option value="0">All Posts</option>
            <option value="1">Gaming</option>
            <option value="2">Food</option>
            <option value="3">News</option>
          </select>
        </div>
    
        
        <br/><br/><br/><br/><br/>

        <Suspense fallback={<div>Loading...</div>}>
          { page==='blog'? <PostList cat={cat}/> : <MyPostList cat={cat}/> } 
        </Suspense>
      </main>
      <br/><br/><br/><br/>
      <Footer />
    </div>
  )
}

PostsPage.getLayout = (page) => <Layout title={"Posts"}>{page}</Layout>

export default PostsPage
