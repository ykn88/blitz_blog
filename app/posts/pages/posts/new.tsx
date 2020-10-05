import React from "react"
import Layout from "app/layouts/Layout"
import { Head, Link, useRouter, BlitzPage } from "blitz"
import createPost from "app/posts/mutations/createPost"
import PostForm from "app/posts/components/PostForm"

const NewPostPage: BlitzPage = () => {
  const router = useRouter()

  return (
    <div>
      <Head>
        <title>New Post</title>
      </Head>

      <main>
        <h1>Create New Post</h1>

        <PostForm />
        
      </main>
    </div>
  )
}

NewPostPage.getLayout = (page) => <Layout title={"Create New Post"}>{page}</Layout>

export default NewPostPage
