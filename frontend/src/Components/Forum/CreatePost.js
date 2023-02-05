import React, {useState} from 'react';
import Wrapper from "../Layout/Wrapper";
import "./Forum.css"
import {Link} from "react-router-dom";
import axios from "axios";

const CreatePost = () => {
    const [postTitle , setPostTitle] = useState("")
    const [postBody , setPostBody] = useState("")
    console.log(postTitle)

    const onSubmit = (e) => {
        e.preventDefault()
        axios.post("http://127.0.0.1:8000/api/posts", {
            title: postTitle,
            body: postBody,
        }).
        then((response) => console.log("already"))
    }


    return (
        <Wrapper>
            <div className="body_post">
            <form className="container_post"  onSubmit={onSubmit}>
                <div className="inputs">
                    <label htmlFor="post" className="">PostTitle</label>
                    <input className="post_title"
                           placeholder="Whats your Subject Today"
                           type="text"
                           value={postTitle}
                           onChange={(e) => {
                               setPostTitle(e.target.value)
                           }}
                    />

                </div>
                <div className="inputs">
                <label htmlFor="post" className="">PostBody</label>
                <textarea  className="text_area" id="message" rows="4"
                           placeholder=" Fill in the Description"

                           value={postBody}
                           onChange={(e)=>{
                               setPostBody(e.target.value)
                           }}
                ></textarea>
                </div>
                <div className="new_post">
                    <button type="submit" className="new_post_link">
                        Post
                    </button>
                </div>
            </form>
            </div>
        </Wrapper>
    );
}

export default CreatePost;