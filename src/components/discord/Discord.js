import React from "react";
import "./Discord.css"
import discordLogo from "./logo-discord.svg";

export default function Discord() {
    return (
        <section className="discord">
            <div className="discord--logo-container"><img className="discord--logo-pic" src={discordLogo}></img></div>
            <h3 className="discord--heading">DevDojo Discord</h3>
            <p className="discord--text">Join the DevDojo Community Discord server and connect with other like minded developers!</p>

        </section>
    );
}