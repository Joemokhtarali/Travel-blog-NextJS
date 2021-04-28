import path from 'path'
import matter from 'gray-matter'
import fs from 'fs'

const postsDirectory = path.join(process.cwd(), 'posts')

function getPostData(fileName){
    const filePath = path.join(postsDirectory, fileName)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const {data, content} = matter(fileContent)

    const postSlug = fileName.replace(/\.md$/, '') // removes the file extension 

    const postData = {
        slug: postSlug,
        ...data,
        content: content 
    }
    return postData 
}
 
export function getAllPosts() {
    const postFiles = fs.readdirSync(postsDirectory)

    const allPosts = postFiles.map(postFile => {
        return getPostData(postFile)
    })

    return allPosts.sort((postA, postB) => postA.date > postB.date ? -1 : 1)
}