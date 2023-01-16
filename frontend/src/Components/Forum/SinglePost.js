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

            {SinglePost.map(item => (
                    <div key={item.id} >
                        <div style={{padding:"15px",borderRadius:"7px",backgroundColor:"yellow"}}>
                        <h6>{item.title}</h6>
                        {item.body}>>>>
                        </div>

                            {item.comments.map(comment => (
                          <div key={comment.id}
                               style={{
                                   paddingLeft:"50%",
                                   paddingTop:"10px"
                               }}>
                              <div style={{padding:"15px",borderRadius:"7px", backgroundColor:"red"}}>
                              {comment.body}
                              </div>
                              {comment.comment_reply.map (
                                  reply => (
                                  <div key={reply.id}
                                       style={{
                                           paddingLeft:"30%",
                                           paddingTop:"10px"
                                       }}
                                  >
                                  <div style={{padding:"15px",borderRadius:"7px", backgroundColor:"green"}}>
                                      {reply.body}
                                  </div>
                                  </div>
                              ))}
                          </div>


                   ))}
                    </div>

            ))}
        </Wrapper>
    )

}

export default SinglePost