import Link from 'next/link'
import Image from "next/image";
import classes from './post-item.module.css'

function PostItem(){
    return (
        <li className={classes.post}>
            <Link>
            <a>
                <div className={classes.image}>
                    <Image src='' alt='' height={} width={} />
                </div>
                <div className={classes.content}>
                    <h3>Title</h3>
                    <time>July 13h 2022</time>
                    <p>The Blog</p>
                </div>
            </a>
            </Link>
        </li>
    )
}

export default PostItem 