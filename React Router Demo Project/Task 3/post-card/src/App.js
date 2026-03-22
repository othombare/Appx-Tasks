import React from "react";
import PostCard from "./PostCard";

function App() {

  const posts = [
    {
      id: 1,
      username: "Onkar",
      content: "Building reusable components!",
      likes: 150,
      isVerified: true
    },
    {
      id: 2,
      username: "Riya",
      content: "Frontend is fun 🎨",
      likes: 80,
      isVerified: false
    },
    {
      id: 3,
      username: "Amit",
      content: "JavaScript power 💪",
      likes: 200,
      isVerified: true
    },
    {
      id: 4,
      username: "Sneha",
      content: "Learning React step by step",
      likes: 40,
      isVerified: false
    }
  ];

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          username={post.username}
          content={post.content}
          likes={post.likes}
          isVerified={post.isVerified}
        />
      ))}
    </div>
  );
}

export default App;