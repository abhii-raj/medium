import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../../config";

export interface BlogType{
        content: string,
        title : string,
        id: string,
        author : {
            name : string
        }
    }


export const useBlogs = ()=> {
    interface Blog{
        content: string,
        title : string,
        id: string,
        author : {
            name : string
        }
    }
    const[loading, setLoading] = useState(true);
    const[blogs, setBlogs] = useState<Blog[]>([]);  

    useEffect( () =>{
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk` , {
            headers :{
                Authorization : localStorage.getItem('token')
            }
        })
            .then(response=>{
                setBlogs(response.data);
                setLoading(false);
            })
    } , [])

    return{
        loading,
        blogs
    }
    
}


export const useBlog = ({id} : {id : string}) => {
    interface Blog{
        content: string,
        title : string,
        id: string,
        author : {
            name : string
        }
    }
    const[loading, setLoading] = useState(true);
    const[blog, setBlog] = useState<Blog>();  

    useEffect( () =>{
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}` , {
            headers :{
                Authorization : localStorage.getItem('token')
            }
        })
            .then(response=>{
                setBlog(response.data);
                setLoading(false);
            })
    } , [])

    return{
        loading,
        blog
    }
}