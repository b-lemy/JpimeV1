import React from 'react';
import "./Landing.css"
import Header from "../Layout/Header";

const Landing = () => {
        return (
            <div>
                <Header/>
                <div className="landing">
                    <div className="project">
                       <p> Project Name : Jipime Fasta Quiz App
                           <br/>


                        Description :A project where anybody could quiz himself up
                           <br/>
                        You have to Login to see the complete website

                        sample email and password if you wont mind registering

                           <br/>
                        Feature Section
                        Completed features its self quiz and forum site
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
                        LinkedIn :
                        Github :
                           <br/>
                        GitHub Repo
                       </p>

                    </div>
                </div>

            </div>
        );

}

export default Landing;