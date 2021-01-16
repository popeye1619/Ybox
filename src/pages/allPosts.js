import React from "react";
import { useSelector } from "react-redux";

const AllPosts = () => {
  const posts = useSelector((state) => state.posts);
  const newpost = posts.slice().reverse();

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>All Posts</h1>
      <div>
        {newpost.map((note) => {
          return <div style={{ textAlign: 'center'}} key={note}><div style={{ padding: '1rem 2rem 1rem 2rem' }}>{note.body}</div></div>;
        })}
      </div>
    </>
  );
}

export default AllPosts;