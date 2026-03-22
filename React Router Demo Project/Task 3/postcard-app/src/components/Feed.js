import PostCard from "./PostCard";
import posts from "../postData";

function Feed() {
  return (
    <div>
      {posts.map((post, index) => (
        <PostCard
          key={index}
          username={post.username}
          content={post.content}
          likes={post.likes}
          isVerified={post.isVerified}
        />
      ))}
    </div>
  );
}

export default Feed;