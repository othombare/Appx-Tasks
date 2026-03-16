function PostCard({ username, content, likes, isVerified }) {

  const handleLike = () => {
    console.log("Post liked!");
  };

  return (
    <div style={{
      border: "1px solid gray",
      padding: "15px",
      margin: "10px",
      borderRadius: "10px",
      width: "300px"
    }}>

      <h3>
        {username}
        {isVerified && <span style={{color:"blue"}}> ✔ Verified</span>}
      </h3>

      <p>{content}</p>

      <p>Likes: {likes}</p>

      {likes > 100 && (
        <p style={{color:"red"}}>🔥 Trending</p>
      )}

      <button onClick={handleLike}>Like</button>

    </div>
  );
}

export default PostCard;