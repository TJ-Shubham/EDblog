import { useEffect, useState } from "react"
import postService from "../services/apiPost"
import Container from "../ui/Container"
import PostCard from "../ui/PostCard"


function AllPost() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        postService.getPosts([]).then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])

    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default AllPost;