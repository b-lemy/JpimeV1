import React, {useEffect, useState} from "react";
import Wrapper from "../Layout/Wrapper";
import {useParams} from "react-router-dom";
import axios from "axios";


const SinglePost = () => {
    const {id} = useParams()
    const [SinglePost, setSinglePost] = useState([])

    useEffect(() => {
        const token = localStorage.getItem('token');
        axios.get(`http://127.0.0.1:8000/api/posts/${id}`,{ headers: { Authorization: `Bearer ${token}` }})
            .then(response => setSinglePost([response.data]))
    }, [id])

    return (
        <Wrapper>
            <section className="row section">
                <div className=" col-lg-8 col-md-8" >

                    {SinglePost.map(item => (
                        <div key={item.id}>
                            <div style={{
                                padding: "15px", borderRadius: "7px", backgroundColor: "purple"
                            }}>
                                <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                                    <div style={{display: "flex", alignItems: "center"}}>
                                        <img alt="i"
                                             style={{
                                                 borderRadius: '70%', marginRight: '10px', height: '30px',
                                                 width: '30px', backgroundColor: "black"
                                             }} src={item.author.avatar}/>
                                        <h6 style={{alignItems: "center", paddingTop: "10px"}}>{item.title}</h6>
                                    </div>
                                    <div style={{color: "whitesmoke", cursor: "pointer"}}>
                                        Reply
                                    </div>

                                </div>
                                {item.body}>>>>
                            </div>

                            {item.comments.map(comment => (
                                <div key={comment.id}
                                     style={{
                                         paddingLeft: "50%",
                                         paddingTop: "10px"
                                     }}>
                                    <div style={{padding: "15px", borderRadius: "7px", backgroundColor: "red"}}>
                                        <div style={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between"
                                        }}>
                                            <div style={{display: "flex", alignItems: "center"}}>
                                                <img alt="i" style={{
                                                    borderRadius: '70%', marginRight: '10px', height: '30px',
                                                    width: '30px', backgroundColor: "black"
                                                }} src={comment.user.avatar}/>
                                                <h6 style={{
                                                    alignItems: "center", paddingTop: "10px",
                                                    fontWeight: "bold", fontSize: '15px'
                                                }}>{comment.user.first_name} {comment.user.last_name}</h6>
                                            </div>
                                            <div style={{color: "whitesmoke", cursor: "pointer"}}>
                                                Reply
                                            </div>

                                        </div>
                                        {comment.body}
                                    </div>
                                    {comment.comment_reply.map(reply => (
                                        <div key={reply.id}
                                             style={{
                                                 paddingLeft: "30%",
                                                 paddingTop: "10px"
                                             }}
                                        >

                                            <div style={{
                                                padding: "15px",
                                                borderRadius: "7px",
                                                backgroundColor: "green"
                                            }}>
                                                <div style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "space-between"
                                                }}>
                                                    <div style={{display: "flex", alignItems: "center"}}>
                                                        <img alt="i" style={{
                                                            borderRadius: '70%', marginRight: '10px', height: '30px',
                                                            width: '30px', backgroundColor: "black"
                                                        }} src={reply.user.avatar}/>
                                                        <h6 style={{
                                                            alignItems: "center",
                                                            paddingTop: "10px",
                                                            fontWeight: "bold",
                                                            fontSize: '15px'
                                                        }}>{reply.user.first_name} {reply.user.last_name}</h6>
                                                    </div>
                                                    <div style={{color: "whitesmoke", cursor: "pointer"}}>
                                                        Reply
                                                    </div>
                                                </div>

                                                {reply.body}
                                            </div>
                                        </div>
                                    ))}
                                </div>


                            ))}
                        </div>

                    ))}

                    <div className="comments-box">
                        <input id="comments-input" type="text" placeholder="Add a comment..."/>
                        <button type="submit" className="comments-button">Post</button>
                    </div>
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

export default SinglePost