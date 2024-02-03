import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import postService from "../services/apiPost";
import Container from "../ui/Container";
import PostForm from "../features/PostForm";


function EditPost() {
    const [post, setPosts] = useState(null);
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if(id){
            postService.getPost(id).then((post)=>{
                if(post){
                    setPosts(post)
                }
            })
        }else{
            navigate("/")
        }
    }, [id, navigate]);

  return post && (
    <div className="py-8">
        <Container>
            <PostForm post={post} />
        </Container>
    </div>
  )
}

export default EditPost;