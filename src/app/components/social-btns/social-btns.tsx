import { GitHubIcon } from "../icons/github-icon";
import { LinkedInIcon } from "../icons/linkedin-icon";
import { TwitterIcon } from "../icons/twitter-icon";

import "./social-btns.scss"


export function SocialBtns(){
    return(
        <div className="social">
            <a href="https://www.linkedin.com/in/g-c-rodrigues/">
                <LinkedInIcon/>
            </a>
            <a href="https://github.com/Athla">
                <GitHubIcon/>
            </a>
        </div>
    )
}