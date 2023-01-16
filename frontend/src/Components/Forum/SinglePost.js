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
                        <h6>{item.title}</h6>
                        {item.body}.....
                        {item.comments.map(comment => (
                            <div key={comment.id}>{comment.body}</div>
                        ))}
                    </div>

            ))}
        </Wrapper>
    )

}

export default SinglePost