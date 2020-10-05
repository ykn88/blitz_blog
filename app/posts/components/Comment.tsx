import createComment from "app/comments/mutations/createComment";
import { useRouter, useSession } from "blitz";
import { Form, Field } from "react-final-form"

function Comment() {
    const router = useRouter()

    const session = useSession();
    const id = session.userId
  
    const onSubmit = async (formobj) => {
      try {
            await createComment({
                data: {
                    name: formobj.name, user: {
                    connect: { id: id }
                    }, category: {
                    connect: {id: parseInt(formobj.categoryId)}
                    }
                }
            })
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
            <form onSubmit={handleSubmit}>
  
              <div>
                <Field
                  name="name"
                  component="input"
                  type="text"
                  placeholder="Blog Title"
                />
              </div>
  
            </form>
          )}
  
        </Form>
      </div>
    )
  }
           

export default Comment
