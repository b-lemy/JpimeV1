import React, {createContext} from "react";

const InitialState = {
    posts: [],
    addPost: (post) => {
    },
    deletePost: (id) => {
    }
}

export const PostContext = createContext(InitialState);


export const ForumProvider = ({children}) => {
    const addPostHandler = (post) => {
    }

    const deletePostHandler = (id) => {
    }

    const postContext = {
        posts: [],
        addPost: addPostHandler,
        deletePost: deletePostHandler
    }

    return (
        <PostContext.Provider value={postContext}>
            {children}
        </PostContext.Provider>
    )
}

