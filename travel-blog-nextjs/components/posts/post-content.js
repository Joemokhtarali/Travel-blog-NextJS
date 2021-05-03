import PostHeader from "./post-header";
import classes from "./post-content.module.css";

const DUMMY_POST = {
  title: "Cairo", 
  country: "Egypt",
  date: "07/13/2020",
  image: "cairo.jpeg",
  youtube_link: "https://www.youtube.com/watch?v=0NjnKn63r8w",
  slug: "egypt",
  content: "# This is about Cairo.",
};

function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;
  return ( 
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      {DUMMY_POST.content}
    </article>
  );
}

export default PostContent;
