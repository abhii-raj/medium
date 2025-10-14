// import React from 'react'

import { useParams } from "react-router-dom";
import { useBlog  } from "../hooks"
import Blogdetail from "../component/Blogdetail";
import Skeleton from "../component/Skeleton";

//atomFamalies / selectorFamilies 
const Blog = () => {
  
  const { id } = useParams();
  const {loading , blog} = useBlog({
    id : id || ""
  });
  if(loading){
    return <div>
      <Skeleton/>
    </div>
  }
  if(!blog){
    return <div>
      blog not found!!!
    </div>
  }

  return (
    

    <div>
      <Blogdetail blog = {blog} />
    </div>
  )
}

export default Blog