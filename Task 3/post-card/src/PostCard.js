import React from "react";

function PostCard({ username, content, likes, isVerified }) {

  const handleLike = () => {
    console.log(`Liked post by ${username}`);
  };

  return (
    <div style={styles.card}>

      <h3>
        {username}
        {isVerified && <span style={styles.verified}> ✔️</span>}
      </h3>

      <p>{content}</p>

      <p>
        ❤️ {likes} Likes
        {likes > 100 && <span style={styles.trending}> 🔥 Trending</span>}
      </p>

      <button onClick={handleLike}>Like</button>

    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    padding: "15px",
    margin: "15px",
    borderRadius: "10px",
    width: "250px"
  },
  verified: {
    color: "blue"
  },
  trending: {
    color: "red",
    marginLeft: "10px"
  }
};

export default PostCard;