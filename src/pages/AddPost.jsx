import PostForm from "../features/PostForm"
import Container from "../ui/Container"


function AddPost() {
  return (
    <div className="py-8">
        <Container>
            <PostForm />
        </Container>
    </div>
  )
}

export default AddPost;