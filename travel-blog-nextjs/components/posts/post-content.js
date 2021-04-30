import PostHeader from "./post-header";
import classes from "./post-content.module.css";

// const DUMMY_POST = {
//   title: "Cairo",
//   country: "Egypt",
//   date: "07/13/2020",
//   image: "cairo.jpeg",
//   youtube_link: "https://www.youtube.com/watch?v=0NjnKn63r8w",
//   slug: "egypt",
//   content: "# This is about Cairo.",
// };

function PostContent(props) {
  const { post } = props 
  const imagePath = `/images/posts/${post.slug}/${post.image}`;
  return ( 
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      {post.content}
    </article>
  );
}

export default PostContent;
