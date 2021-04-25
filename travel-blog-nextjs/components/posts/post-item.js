import Link from "next/link";
import Image from "next/image";
import classes from "./post-item.module.css";

function PostItem(props) {
  const { title, country, date, image, content, youtube_link, slug } = props.post;

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
  })

  const imagePath = `/images/posts/cairo.jpeg`
  const linkPath = `/posts/${slug}`

  return (
    <li className={classes.post}>
      <Link href={linkPath}>
        <a>
          <div className={classes.image}>
            <Image src={imagePath} alt={title} height={300} width={300} />
          </div>
          <div className={classes.content}>
            <h3>{title}</h3>
            <time>{formattedDate}</time>
            <p>{content}</p>
          </div>
        </a>
      </Link>
    </li>
  );
}

export default PostItem;

// Country, date, image, content, youtube link, slug,
