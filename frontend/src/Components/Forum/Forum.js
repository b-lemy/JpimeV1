import React, {useContext, useEffect, useState} from "react";
import LaravelApi from "../../api/LaravelApi"
import Wrapper from "../Layout/Wrapper";
import {PostContext} from "../../StoreContext/Forum-context";
import './Forum.css'
import {Link} from "react-router-dom";
import Sidebar from "../Layout/Sidebar";
import {AuthContext} from "../../StoreContext/Auth-context";
// axios.defaults.baseURL = "http://127.0.0.1:8000/api/";


const Forum = () => {
    const {deletePost} = useContext(PostContext);
    const [post, setPost] = useState([]);
    const [isLoading, setisLoading] = useState(true)
    const {authUser} = useContext(AuthContext);


    useEffect(() => {
        setisLoading(true)
        const getPosts = async () => {
            const apiPosts = await LaravelApi.get("posts");
            setPost(apiPosts.data.data)
            setisLoading(false)
            // console.log(apiPosts.data.data)
        }
        getPosts();
    }, [])

    return (
        <Wrapper>
            <section className="row section">
                <div className=" col-lg-8 col-md-8  ">
                    <div className="new_post">
                        <Link to={'/forum/create'} className="new_post_link">
                            New Post
                        </Link>
                    </div>
                    {isLoading
                        ?
                        <div style={{display: "flex", alignItems: "center", justifyContent: "center", height: "70vh"}}>
                            <div className="spinner-grow" role="status">
                            </div>
                        </div>
                        : <div>  {post.map(item => (
                            <div className="start_left" key={item.id}>

                                <Link to={`/forum/${item.id}`} style={{textDecoration: "none", color: "black"}}>
                                    <div style={{display: "flex", alignItems: "center"}}>
                                        <img alt="i" style={{
                                            borderRadius: '70%', marginRight: '10px', height: '40px',
                                            width: '40px'
                                        }} src={item.avatar}/>


                                        <div style={{display: "flex", flexDirection: "column", marginBottom: '2px'}}>
                                            <div style={{marginBottom: '2px', fontWeight: 'bolder'}}>
                                                {item.authorName}</div>
                                            <p style={{marginBottom: '2px'}}>{item.created}</p>
                                            <p style={{marginBottom: '2px'}}>{item.authorPhone}</p>
                                        </div>

                                    </div>
                                    <h6 style={{justifyContent: "center", display: "flex", fontStyle: "italic"}}>
                                        {item.title}</h6>
                                    {item.body}...
                                </Link>
                                {(item.authorName === authUser.first_name)
                                    ?
                                    <div style={{display: "flex", justifyContent: "flex-end"}}>
                                        <button style={{marginRight: "12px"}}>Edit</button>
                                        <button onClick={() => deletePost(item.id)}>Delete</button>
                                    </div>
                                    : ''}
                            </div>

                        ))}
                        </div>
                    }
                </div>

                <div className=" col-lg-4 col-md-4 ">
                    <Sidebar/>
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
// const [title, setTitle] = useState('')
// const [body, setBody] = useState('')

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