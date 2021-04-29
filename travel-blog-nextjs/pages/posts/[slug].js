import PostContent from "../../components/posts/post-content"
import { getPostData, getPostsFiles } from "../../lib/posts-util";

function PostDetailPage(props){
    return <PostContent post={props.post}/>
}

export function getStaticProps(context) {
    const { params } = context
    const { slug } = params 

    const postData = getPostData(slug)

    return {
        props: {
            post: postData
        }
    }

}

export function getStaticPaths(){
    const fileNames = getPostsFiles()

    const slugs = fileNames.map((fileName) => fileName.replace(/\.md$/, ''))

    return {
        paths: slugs.map(slug => ({ params: {slug: slug }})),
        fallback: false 
    }
}

export default PostDetailPage