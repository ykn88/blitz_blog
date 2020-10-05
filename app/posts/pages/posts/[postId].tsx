import React, { Suspense } from "react"
import Layout from "app/layouts/Layout"
import { Head, BlitzPage } from "blitz"
import SinglePost from "app/posts/components/SinglePost"
import Header from "app/components/Header"
import Footer from "app/components/Footer"




const ShowPostPage: BlitzPage = () => {


  return (
    <div>
      <Head>
        <title>Post</title>
      </Head>

      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
        </Suspense>
        <br />
        <br />
        <br />
        <Suspense fallback={<div>Loading...</div>}>
          <SinglePost />
        </Suspense>
        <br />
        <br />
        <br />
        <Suspense fallback={<div>Loading...</div>}>
          <Footer />
        </Suspense>
      </main>
    </div>
  )
}

ShowPostPage.getLayout = (page) => <Layout title={"Post"}>{page}</Layout>

export default ShowPostPage
