import React, {useContext} from "react";
import Wrapper from "../Layout/Wrapper";
import {PostContext} from "../../Store/Forum-context";


const Forum = () => {
    const postctx = useContext(PostContext)
    return (
        <Wrapper>
            <div className="section">
                forum page

            </div>
        </Wrapper>
    )
}

export default Forum;