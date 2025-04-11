import React from 'react';
import "./Landing.css"
import Header from "../Layout/Header";

const Landing = () => {
        return (
            <div>
                <Header/>
                <div className="landing">
                    <div className="project">
                        <p> Project Name :<span style={{fontWeight: "bolder"}}> Jipime Fasta Quiz App 2 </span>
                           <br/>


                        Description :A project where anybody could quiz himself up
                           <br/>
                           <br/>
                        You have to Login to see the complete website

                        sample email and password if you wont mind registering
                           <br/>
                           <br/>
                           <span  style={{fontWeight: "bolder"}}>
                               <span>Email:  orogahn@gmail.com</span>
                               <br/>
                               <span>Password: password </span>
                               </span>


                           <br/>
                           <br/>
                        Feature Section
                        Completed features its self quiz and forum site
                           <br/>
                           <br/>
                        Quiz
                        One will request for a quiz and then choose what category he or she
                        wishes then quiz up
                           <br/>
                        Forum
                        You can ask question and people will answer you if the wish though
                           <br/>
                        About Section
                        What inspired me in the project
                           <br/>
                           <br/>
                           <a style={{color:"darkgray" }} href="https://www.linkedin.com/in/brian-lema-3b731920b/" target='_blank'>Visit my LinkedIn profile</a>
                           <br/>
                           <br/>
                           <a style={{color:"darkgray" }} href="https://github.com/b-lemy" target='_blank'>Visit my Github Account</a>
                           <br/>
                           <br/>
                        <a style={{color:"darkgray" }} href="https://github.com/b-lemy/JpimeV1" target='_blank'>Visit the Github Repo</a>
                       </p>

                    </div>
                </div>

            </div>
        );

}

export default Landing;