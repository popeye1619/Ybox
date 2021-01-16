import React from "react";
import styled from 'styled-components';

const Container = styled.div`
background: #f5f5f7;
width: 100%;
@media screen and (min-width: 768px){
width: 50%;
}
@media only screen 
and (min-device-width : 768px) 
and (max-device-width : 1024px){ 
  width: 100%;
}
margin: auto;
border-radius: 10px;
`;

const Text = styled.div`
text-align: left;
font-size: 1rem;
@media screen and (min-width: 768px){
  font-size: 2.5rem;
}
padding: 1rem;
`;



const Input = styled.input`
font-family: 'Work Sans', sans-serif;
     width: 100%;     
    height: 2rem;
    border-radius: 5px;
    padding: 0.5rem;
    font-size: 1.5rem;
  outline: none;
        border: none;
        background: #e8e8e8;
`;


export const NewPostInput = ({ addPost }) => {
  const [post, setPost] = React.useState({
    body: ''
  });
  

  const updatePost = (e) => {
    setPost({
      ...post,
      body: e.target.value
    })
  };

  const onAddPostClick = () => {
    addPost(post);
  };


  return (
    <Container>
      <Text>New Post </Text>
      <hr style={{ border: '0.1px solid lightgrey' }} />
      <div style={{ padding: '1rem 2rem 1rem 1rem' }}>
        <Input
          onChange={updatePost}
          value={post.name}
          type="text"
          name="posts"
          placeholder="Note"
        />
        <button style={{marginTop: '1rem'}} onClick={onAddPostClick}>Add Post</button>
      </div>
    </Container>

  );
};