// import React from 'react'
// import Blog from './Blog'
import Appbar from '../component/Appbar'
import BlogCard from '../component/BlogCard'
import Skeleton from '../component/Skeleton';
import { useBlogs } from '../hooks'

export const Blogs = () => {
    const {loading , blogs} = useBlogs();
    if(loading){
        return <div>
            <Skeleton/>
        </div>
    }
  return (
    <div>
        <Appbar/>
    <div className='flex justify-center'>
        <div className=" justify-center">
            
            {blogs.map((blog) => 
                <BlogCard  
                author = {blog.author.name === null?"Anonymous": blog.author.name}
                title = {blog.title}
                content = {blog.content}
                id = {blog.id}
                publishedDate = {"2nd feb 2024"}
            />
            )}
        </div>
    </div>
    </div>
  )
}

export default Blogs