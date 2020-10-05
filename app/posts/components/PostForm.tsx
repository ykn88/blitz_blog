import { Form, Field } from "react-final-form"
import { useQuery, useRouter, useSession } from "blitz"
import styles from './PostForm.module.scss'
import createPost from "../mutations/createPost"


const Blogform = () => {
  const router = useRouter()

  const session = useSession();
  const id = session.userId

  const onSubmit = async (formobj) => {
    try {
      await createPost({
        data: {
          title: formobj.title, imageUrl: formobj.imageUrl, text: formobj.description, user: {
            connect: { id: id }
          }, category: {
            connect: {id: parseInt(formobj.categoryId)}
          }
        }
      })
      router.push("/posts")
      
    } catch (error) {
      alert("Error creating article " + JSON.stringify(error, null, 2))
    }

  }


  return (
    <div>
      <Form
        onSubmit={onSubmit}
        initialValues={{}}
        
      >
        {({ handleSubmit, form, submitting, pristine }) => (
          <form onSubmit={handleSubmit} className={styles.form_control}>

            <div>
              <Field
                name="title"
                component="input"
                type="text"
                placeholder="Blog Title"
                className={styles.title}
              />
            </div>

            <div>
              <Field
                name="imageUrl"
                component="input"
                type="text"
                placeholder="Image Url"
                className={styles.title}
              />
            </div>

            <div>
              <Field name="categoryId" component="select">
                <option />
                <option value='1'>Gaming</option>
                <option value='2'>Food</option>
                <option value="3">News</option>
              </Field>
            </div>

            <div>
              <Field name="description" component="textarea" placeholder="Blog Description"  className={styles.body}/>
            </div>

            <div className="buttons">
              <button  className={styles.button} type="submit" disabled={submitting || pristine}>
                Submit
            </button>
            </div>
          </form>
        )}

      </Form>
    </div>
  )
}

export default Blogform
