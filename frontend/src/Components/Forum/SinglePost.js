import React, {useEffect, useState} from "react";
import Wrapper from "../Layout/Wrapper";
import {useParams} from "react-router-dom";
import axios from "axios";


const SinglePost = () =>{
    const {id} = useParams()
    const [SinglePost, setSinglePost] = useState([])

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/posts/${id}`)
            .then(response => setSinglePost([response.data]))
    }, [])

    return(
        <Wrapper>
            <div style={{backgroundColor: "#ecf2f8"}}>

            {SinglePost.map(item => (
                    <div key={item.id} >
                        <div style={{padding:"15px",borderRadius:"7px",backgroundColor:"purple"
                            }}>
                            <div style={{display:"flex",alignItems:"center", justifyContent:"space-between"}}>
                                <div style={{display:"flex",alignItems:"center"}}>
                                <img style={{borderRadius: '70%',marginRight: '10px', height: '30px' ,
                                    width:'30px',backgroundColor:"black"}} src={item.author.avatar}/>
                                <h6 style={{alignItems:"center",paddingTop:"10px"}}>{item.title}</h6>
                                </div>
                                <div style={{color:"whitesmoke" ,cursor:"pointer"}}>
                                    <a>Reply</a>
                                </div>

                            </div>

                        {item.body}>>>>
                        </div>

                            {item.comments.map(comment => (
                          <div key={comment.id}
                               style={{
                                   paddingLeft:"50%",
                                   paddingTop:"10px"
                               }}>
                              <div style={{padding:"15px",borderRadius:"7px", backgroundColor:"red"}}>
                                  <div style={{display:"flex",alignItems:"center" ,justifyContent:"space-between"}}>
                                      <div style={{display:"flex",alignItems:"center"}}>
                                      <img style={{borderRadius: '70%',marginRight: '10px', height: '30px' ,
                                          width:'30px',backgroundColor:"black"}} src={comment.user.avatar}/>
                                      <h6 style={{alignItems:"center",paddingTop:"10px",
                                          fontWeight:"bold",fontSize:'15px'}}>{comment.user.first_name} {comment.user.last_name}</h6>
                                  </div>
                                      <div style={{color:"whitesmoke" ,cursor:"pointer"}}>
                                          <a>Reply</a>
                                      </div>

                                  </div>
                              {comment.body}
                              </div>
                              {comment.comment_reply.map (reply => (
                                  <div key={reply.id}
                                       style={{
                                           paddingLeft:"30%",
                                           paddingTop:"10px"
                                       }}
                                  >

                                  <div style={{padding:"15px",borderRadius:"7px", backgroundColor:"green"}}>
                                      <div style={{display:"flex",alignItems:"center" ,justifyContent:"space-between"}}>
                                          <div style= {{display:"flex",alignItems:"center"}}>
                                          <img style={{borderRadius: '70%',marginRight: '10px', height: '30px' ,
                                              width:'30px',backgroundColor:"black"}} src={reply.user.avatar}/>
                                          <h6 style={{alignItems:"center", paddingTop:"10px",fontWeight:"bold",fontSize:'15px'
                                          }}>{reply.user.first_name} {reply.user.last_name}</h6>
                                          </div>
                                          <div style={{color:"whitesmoke" ,cursor:"pointer"}}>
                                              <a>Reply</a>
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
            </div>
            <div className="comments-box">
                <input id="comments-input" type="text" placeholder="Add a comment..." />
                <button  type="submit" className="comments-button">Post</button>
            </div>
        </Wrapper>
    )

}

export default SinglePost