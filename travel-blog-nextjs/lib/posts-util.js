import path from 'path'
import matter from 'gray-matter'
import fs from 'fs'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getPostsFiles(){
    return fs.readdirSync(postsDirectory)
}

export function getPostData(postIdentifier){
    const postSlug = postIdentifier.replace(/\.md$/, '')
    const filePath = path.join(postsDirectory, `${postSlug}.md`)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const {data, content} = matter(fileContent)

    // const postSlug = fileName.replace(/\.md$/, '') // removes the file extension 

    const postData = {
        slug: postSlug,
        ...data,
        content: content 
    }
    return postData 
}
 

export function getAllPosts() {
    const postFiles = getPostsFiles()

    const allPosts = postFiles.map(postFile => {
        return getPostData(postFile)
    })

    return allPosts.sort((postA, postB) => postA.date > postB.date ? -1 : 1)
}