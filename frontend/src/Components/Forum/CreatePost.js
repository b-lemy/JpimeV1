import React from 'react';
import Wrapper from "../Layout/Wrapper";
import "./Forum.css"

const CreatePost = () => {
    return (
        <Wrapper>
            <div className="body_post">
            <form className="container_post" >
                <div>
                    <label htmlFor="post" className="">PostTitle</label>
                    <input />

                </div>
                <div>
                <label htmlFor="post" className="">PostBody</label>
                <textarea  className="text_area" id="message" rows="4"
                         placeholder="   Add some description ..."></textarea>
                </div>
            </form>
            </div>
        </Wrapper>
    );
}

export default CreatePost;