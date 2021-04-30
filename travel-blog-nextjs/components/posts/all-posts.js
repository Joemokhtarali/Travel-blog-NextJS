import classes from './all-posts.module.css'
import PostsGrid from './posts-grid'
import { getAllPosts } from '../../lib/posts-util'

function AllPosts(props){
    return(
        <section className={classes.posts}>
            <h1> All Posts</h1>
            <PostsGrid posts={props.posts}/>
        </section> 
    )
}



export default AllPosts