import React from "react";
import Wrapper from "../Layout/Wrapper";
import {useParams} from "react-router-dom";


const SinglePost = () =>{
    const {id} = useParams()
    return(
        <Wrapper>
        <h4>{id}</h4>
        </Wrapper>
    )

}

export default SinglePost