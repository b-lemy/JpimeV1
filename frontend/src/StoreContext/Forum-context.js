// step 1
import React, {createContext, useReducer, useState} from "react";
// import axios from "axios";
import axios from "../api/axios"
import {useNavigate} from "react-router-dom";
// axios.defaults.baseURL = "http://127.0.0.1:8000/api/";


const InitialState = {
    posts: []
}


const postReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_POST' :
            const updatedPosts = state.posts.concat(action.post)
            return {
                posts: updatedPosts,
            }
        case 'DELETE_POST' :
            const postUpdates = state.posts.filter((post) =>post.id !== action.id)
            return {
                posts: postUpdates

            }
        default:
            console.log('No input')

    }
    return InitialState;
}
// step 2
export const PostContext = createContext(InitialState);

// step 3
export const ForumProvider = ({children}) => {
    const [postState, dispatchForum] = useReducer(postReducer , InitialState)

    const [postTitle , setPostTitle] = useState("")
    const [postBody , setPostBody] = useState("")
    const navigate = useNavigate()

    const onSubmit = (e) => {
        e.preventDefault()
            axios.post("posts", {
                title: postTitle,
                body: postBody,
            })
                .then((response) => {
                    if (response.status === 200) {
                         navigate("/forum")
                    }
                })
                .catch(e =>{
                   console.log(e.response.data.errors)
                })
    }
    const addPostHandler = (post) => {
        dispatchForum({
            type: 'ADD_POST',
            post: post
        })
    }

    const deletePostHandler = (id) => {
        if(!window.confirm("Are you sure")){
            return;
        }
        axios.delete("posts/" + id)
            .then((response) => {
                console.log(response.status)

                if (response.status === 200) {
                    window.location.reload(true)
                }
            });
    }

    const postContext = {
        posts: postState.posts,
        addPost: addPostHandler,
        deletePost: deletePostHandler,
        setPostTitle,
        setPostBody,
        onSubmit
    }

    return (
        <PostContext.Provider value={postContext}>
            {children}
        </PostContext.Provider>
    )
}

