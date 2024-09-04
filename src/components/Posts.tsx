import React from "react";
import Post from "./Post";

interface PostType {
    id: number;
    title: string;
    reactions: {
        likes: number,
        dislikes: number
    },
    userId: number
}

interface PostsProps {
    posts: PostType[];
}

const Posts: React.FC<PostsProps> = ({posts}) => {

    return (
        <div className="content">
            {posts
            .sort((a, b) => b.id - a.id)
            .map(post => <Post key={post.id} post={post}></Post>)}
        </div>
    )
};

export default Posts;