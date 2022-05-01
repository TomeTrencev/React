import React, {useState, useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Comments } from "./components/Comments";
import { Posts } from "./components/Posts";


export function App(){

  const [posts,setPosts] = useState([]);

  function getPosts(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res=>res.json())
    .then(json=>setPosts(json))
    .catch(err=>alert(err))
  }

  useEffect(()=>{
    getPosts()
  },[])

  return(
    <div id="app">
      <Nav />
      <Routes>
        <Route path="/posts" element={<Posts listOfPosts={posts} />} />
        <Route path="/comments" element={<Comments />} />
      </Routes>

    </div>
  )
}