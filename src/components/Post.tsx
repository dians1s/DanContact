import React from "react";

interface PostTypeProps {
    post: {
        id:number,
        title: string,
        reactions: {likes:number,
                    dislikes:number},
        userId:number
    }
}

const Post: React.FC<PostTypeProps> = ({post}) => {
    return(
        <div className="content__post">
            <div className="content__post__user">
                <span>
                    UserID: {post.userId}
                </span>
            </div>
            <div className="content__post__title">
                <span>
                    {post.title}
                </span>
            </div>
            <button className="content__post__like">
                <svg width="28px" height="28px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet">
                    <path d="M32 2C15.4 2 2 15.4 2 32s13.4 30 30 30s30-13.4 30-30S48.6 2 32 2m0 48c-1.4-1.8-20.5-12.9-16.6-25.2c3.5-11.1 15.1-6.6 16.6-.6c1.1-5.6 12.9-10.7 16.6.6C52.5 36.9 33.4 48.6 32 50">
                    </path>
                </svg>
                {post.reactions.likes}
            </button>
        </div>
    )
}

export default Post;