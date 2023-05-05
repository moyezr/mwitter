import CommentItem from "./CommentItem";
type CommentFeedProps = {
    comments?: Record<string, any>[];
}
const CommentFeed: React.FC<CommentFeedProps> = ({comments = []}) => {

  console.log("Comments --> ", comments)

  return (
    <>
        {comments.map((comment: Record<string, any>) => {
            return (
                <CommentItem key={comment.id} data={comment} />
            )
        })}
    </>
  )
}

export default CommentFeed