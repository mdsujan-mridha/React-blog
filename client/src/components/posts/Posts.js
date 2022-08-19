import React from 'react';
import Post from '../post/Post';
import postImg from "../img/postimg.jpeg";

import "./Posts.css";


const Posts = () => {
    const postImges = [
        {
            "id":1,
        "img":postImg
        },
        { 
            "id":2,
        "img":postImg
        },
        { 
            "id":3,
        "img":postImg
        },
        { 
            "id":4,
        "img":postImg
        },
        { 
        "id":5,
        "img":postImg
        },
        { 
        "id":6,
        "img":postImg
        }
    
    ]
    return (
        <div className="posts">
            {
                postImges?.map(img=><Post
                key={img.id}
                img={img}
                ></Post>)
            }
        </div>
    );
};

export default Posts;