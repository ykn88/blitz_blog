import React, { Suspense } from "react"
import Layout from "app/layouts/Layout"
import { Head, BlitzPage } from "blitz"
import UpdateForm from "app/posts/components/UpdateForm"
import Header from "app/components/Header"
import Footer from "app/components/Footer"


const EditPostPage: BlitzPage = () => {
  return (
    <div>
      <Head>
        <title>Edit Post</title>
      </Head>

      <main>
        <Header />
        <br />
        <br />
        <br />
        <Suspense fallback={<div>Loading...</div>}>
          <UpdateForm />
        </Suspense>

        <br />
        <br />
        <br />
        <Footer />
      </main>
    </div>
  )
}

EditPostPage.getLayout = (page) => <Layout title={"Edit Post"}>{page}</Layout>

export default EditPostPage
