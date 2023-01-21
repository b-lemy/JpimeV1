import React, {useContext, useEffect, useState} from "react";
import axios from "axios";

import Wrapper from "../Layout/Wrapper";
import {PostContext} from "../../StoreContext/Forum-context";
import './Forum.css'
import {comment} from "postcss";
import {Link} from "react-router-dom";


const Forum = () => {
    const postCtx = useContext(PostContext);

    const [post, setPost] = useState([])

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/posts")
            .then((response) =>setPost(response.data.data))
                // setPost(response.data))
    }, [])

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    // const posttitle = useRef();
    // const postbody = useRef();


    // const addPost = (e) => {
    //     e.preventDefault()
    //     postCtx.addPost({
    //             title: title,
    //             body: body
    //         }
    //     )
    // }
    return (
        <Wrapper>
            <section className="row section">
                <div className=" col-lg-8 col-md-8  ">
                    {post.map(item => (
                        <Link to={`/forum/${item.id}`}  style={{textDecoration: "none",color:"black"}} key={item.id}>
                        <div className="start_left" >
                            <div style={{display:"flex",alignItems:"center"}}>
                                <h6 style={{borderRadius: '70%',marginRight: '10px', height: 'auto',
                                    border:'1px solid red'}}>img</h6>

                                <div style={{display:"flex",flexDirection:"column",marginBottom:'2px'}}>
                                    <div style={{marginBottom:'2px',fontWeight:'bolder'}}>
                                             {item.authorName}</div>
                                    <p style={{marginBottom:'2px'}}>{item.created}</p>
                                    <p style={{marginBottom:'2px'}}>{item.authorPhone}</p>
                                </div>

                            </div>
                            <h6 style={{justifyContent: "center", display: "flex", fontStyle: "italic"}}>
                                {item.title}</h6>
                            {item.body}.....
                        </div>
                        </Link>
                    ))}
                </div>
                <div className=" col-lg-4 col-md-4 ">
                    <div className="start_right">
                        Tags
                        <div className="tag">
                            <button className="tags"> Most Recent</button>
                            <button className="tags">Most Likes</button>
                            <button className="tags">Most Comments</button>
                            <button className="tags">Most Interaction</button>
                        </div>

                    </div>
                </div>

            </section>
        </Wrapper>
    )
}

export default Forum;

// <div className="section">
//     <form onSubmit={addPost}>
//         <label>Title</label>
//         <input
//             className="input"
//             // ref={posttitle}
//             value={title}
//
//             onChange={(e)=>setTitle(e.target.value)}
//
//         />
//
//         <label>Description</label>
//         <input
//             className="input"
//             // ref={postbody}
//             value={body}
//             onChange={(e)=>setBody(e.target.value)}
//
//         />
//         <button type="submit">Submit</button>
//     </form>
//
//     <div>
//         {postCtx.posts.map((post)=>(
//             <ul>
//                 {post.title}<br/>
//                 {post.body}
//             </ul>
//
//         ))}
//     </div>
//
// </div>