import React from "react";
import Links from "./Links";

function About(props) {
  
  return (
    <div id="about">
      <h2>About Me</h2>
      {props.bio.length > 0 && <p>{props.bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
     <Links linkedin={props.Links.linkedin} github={props.Links.github} />
      
    </div>
  );
}

export default About;
