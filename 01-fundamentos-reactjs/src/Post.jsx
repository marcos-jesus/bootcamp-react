export function Posts(props) {
  return (
    <div>
      <h3>Posts</h3>
      <p>{props.author}</p>
      <p>{props.content}</p>
    </div>
   
  )
}