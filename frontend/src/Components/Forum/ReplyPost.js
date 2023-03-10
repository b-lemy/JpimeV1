import React, {useState} from "react";
import axios from "axios";

const ReplyPost = ({id}) => {
    const [body, setBody] = useState('')


    const onSubmit = (e) => {
        const token = localStorage.getItem('token');
        e.preventDefault()
        axios.post(`http://127.0.0.1:8000/api/posts/${id}/comments`,
            {body: body},
             {headers: {Authorization: `Bearer ${token}`}}
        )
            .then((response) => {
                if (response.status === 201) {
                    window.location.reload()
                }
                console.log(response)
            })
            .catch(e => {
                console.log(e.response.data.errors)
            })
    }
    return(
        <div className="comments-box">
            <form onSubmit={onSubmit}>
                <input id="comments-input" value={body}
                       onChange={(e) => setBody(e.target.value)}
                       type="text" placeholder="Add a comment..."/>
                <button type="submit"  className="comments-button">Post</button>
            </form>

        </div>
    )
}
export default ReplyPost;