import React, {createContext, useReducer} from "react";


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

export const PostContext = createContext(InitialState);


export const ForumProvider = ({children}) => {
    const [postState, dispatchForum] = useReducer( postReducer , InitialState)
    const addPostHandler = (post) => {
        dispatchForum({
            type: 'ADD_POST',
            post: post
        })
    }

    const deletePostHandler = (id) => {
        dispatchForum({
            type: 'DELETE_POST',
            id: id
        })

    }

    const postContext = {
        posts: postState.posts,
        addPost: addPostHandler,
        deletePost: deletePostHandler
    }

    return (
        <PostContext.Provider value={postContext}>
            {children}
        </PostContext.Provider>
    )
}

