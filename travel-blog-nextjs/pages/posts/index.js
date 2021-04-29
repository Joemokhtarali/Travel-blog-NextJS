import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from '../../lib/posts-util'


function AllPostsPage(props){
    return (
        <div>
            <AllPosts posts={props.posts}/>
        </div>
    )
}

export function getStaticProps(){
    const posts = getAllPosts()

    return {
        props: {
            posts: posts 
        }
    }
}

export default AllPostsPage