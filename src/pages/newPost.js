import { NewPostInput } from "../components/NewPostInput";
import { useDispatch } from "react-redux";
import { addPost } from "../actions/index";

const NewPost = () => {
  const dispatch = useDispatch();
  const onAddPost = (post) => {
    dispatch(addPost(post));
  };

  return (
    <>
    <br/>
      <NewPostInput addPost={onAddPost} />
    </>
  );
}

export default NewPost;