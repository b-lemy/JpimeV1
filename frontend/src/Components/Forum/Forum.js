import React, {useContext, useState} from "react";
import Wrapper from "../Layout/Wrapper";
import {PostContext} from "../../StoreContext/Forum-context";
import './Forum.css'


const Forum = () => {
    const postCtx = useContext(PostContext);

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    // const posttitle = useRef();
    // const postbody = useRef();


    const addPost = (e) => {
        e.preventDefault()
        postCtx.addPost({
                title: title,
                body: body
            }
        )
    }
    return (
        <Wrapper>
            <section className="row section">
                <div className=" col-lg-8 col-md-8  ">
                    <div className="start_left">
                        Posts
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Libero id faucibus nisl tincidunt eget nullam. Magna etiam tempor orci eu lobortis.
                        Consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat.
                        Mi ipsum faucibus vitae aliquet nec ullamcorper.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Libero id faucibus nisl tincidunt eget nullam. Magna etiam tempor orci eu lobortis.
                        Consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat.
                        Mi ipsum faucibus vitae aliquet nec ullamcorper.
                </div>
                <div className="start_left">
                    Posts
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Libero id faucibus nisl tincidunt eget nullam. Magna etiam tempor orci eu lobortis.
                    Consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat.
                    Mi ipsum faucibus vitae aliquet nec ullamcorper.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Libero id faucibus nisl tincidunt eget nullam. Magna etiam tempor orci eu lobortis.
                    Consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat.
                    Mi ipsum faucibus vitae aliquet nec ullamcorper.
                </div>
                </div>
                <div className=" col-lg-4 col-md-4 ">
                    <div className="start_right">
                        Tags

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