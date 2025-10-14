import { Link } from "react-router-dom";

// import React from 'react'
interface BlogCardProps{
    author : string;
    title : string;
    content: string;
    publishedDate: string;
    id: string
}
const BlogCard = ({
    author,
    title,
    content,
    publishedDate,
    id
} : BlogCardProps) => {
  return (
    <Link to = {`/blog/${id}`}>
    <div className="border-b border-slate-200 pb-2 pt-5  w-screen max-w-screen-md cursor-pointer">
        <div className="flex pt-2">
            <div className="flex felx-col justify-center ">
                <Avatar author={author} size={"xs"}/>
            </div>  
            <div className="font-thin pl-2 pr-2 flex flex-col justify-center text-base">
                {author}    
            </div>
            <div className="flex flex-col justify-center">
                <Circle/>
            </div>
            <div className="pl-2 font-light text-slate-400 flex flex-col text-xs justify-center">
                 {publishedDate}
            </div>
        </div>
        <div className="text-xl font-semibold">
            {title}
        </div>
        <div className="text-md font-thin">
            {content.slice(0 , 100) + "..."}
        </div>
        <div className="text-slate-400 text-sm font-thin mt-3">
            { `${Math.ceil(content.length /100)}  minutes read`}
        </div>
        {/* <div className='bg-slate-200 h1 w-full'></div> */}
    </div>
    </Link>
  )
}

export function Avatar ({author , size}: {author : string , size:string}){
    const firstL = author[0].toUpperCase();
    const secL = author.split(" ").length <= 1?"   " : author.split(" ")[1][0].toUpperCase();

    return <div className={`relative  inline-flex items-center justify-center  overflow-hidden bg-gray-600 ${size === "xs" ? "w-5 h-5" : "w-7 h-7"} rounded-full`}>
    <span className={`text-${size} text-white `}>{firstL + secL}</span>
</div>

}

export function Circle(){
    return <div className="h-1 w-1 rounded-full bg-slate-200">

    </div>
}
export default BlogCard