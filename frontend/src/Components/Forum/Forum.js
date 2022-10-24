import React, {useContext, useRef, useState} from "react";
import Wrapper from "../Layout/Wrapper";
import {PostContext} from "../../StoreContext/Forum-context";
import './Forum.css'


const Forum = () => {
    const postCtx = useContext(PostContext);

    const [title ,setTitle] = useState('')
    const [body ,setBody] = useState('')

    // const posttitle = useRef();
    // const postbody = useRef();


    const addPost = (e)=>{
        e.preventDefault()
        postCtx.addPost({
            title:title,
            body:body
            }

        )
    }
    return (
        <Wrapper>
            <div className="section">
                <form onSubmit={addPost}>
                    <label>Title</label>
                    <input
                        className="input"
                        // ref={posttitle}
                        value={title}

                        onChange={(e)=>setTitle(e.target.value)}

                    />

                    <label>Description</label>
                    <input
                        className="input"
                        // ref={postbody}
                        value={body}
                        onChange={(e)=>setBody(e.target.value)}

                    />
                    <button type="submit">Submit</button>
                </form>

                <div>
                    {postCtx.posts.map((post)=>(
                        <li>{post.title}</li>
                    ))}
                </div>

            </div>
        </Wrapper>
    )
}

export default Forum;