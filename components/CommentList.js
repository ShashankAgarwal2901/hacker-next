import Comment from "./Comment";

const CommentList = ({ comments }) => {
  return (
    <React.Fragment>
      {comments.map((com) => (
        <Comment key={com.id} comment={com} />
      ))}
    </React.Fragment>
  );
};
export default CommentList;
