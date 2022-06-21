import React from "react";
import "./Accordion.css";
import SortingOptions from "../SortingOptions/SortingOptions";
import Arrow from "../arrow/Arrow"


export default function Accordion() {
    const [sectionOneActive, setSectionOneActive] = React.useState(false);
    const [sectionTwoActive, setSectionTwoActive] = React.useState(false);

    const [sectionOneHeight, setSectionOneHeight] = React.useState("0px");
    const [sectionTwoHeight, setSectionTwoHeight] = React.useState("0px");

    const [selectedSort, setSelectedSort] = React.useState("")

    const contentOne = React.useRef(null);
    const contentTwo = React.useRef(null);
    
    function toggleSectionOne() {
        setSectionOneActive(prev => !prev);
        setSectionOneHeight(sectionOneActive ? "0px" : `${contentOne.current.scrollHeight}px`);
    }

    function toggleSectionTwo() {
        setSectionTwoActive(prev => !prev);
        setSectionTwoHeight(sectionTwoActive ? "0px" : `${contentTwo.current.scrollHeight}px`);
    }

    return (
        <main className="accordion--container">

            <div className="accordion--section">
                <button className="accordion--button" onClick={toggleSectionOne}>
                    <span className="accordion--button-text">
                        <svg className="accordion--sliderIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20px">
                            <path d="M0 416C0 398.3 14.33 384 32 384H86.66C99 355.7 127.2 336 160 336C192.8 336 220.1 355.7 233.3 384H480C497.7 384 512 398.3 512 416C512 433.7 497.7 448 480 448H233.3C220.1 476.3 192.8 496 160 496C127.2 496 99 476.3 86.66 448H32C14.33 448 0 433.7 0 416V416zM192 416C192 398.3 177.7 384 160 384C142.3 384 128 398.3 128 416C128 433.7 142.3 448 160 448C177.7 448 192 433.7 192 416zM352 176C384.8 176 412.1 195.7 425.3 224H480C497.7 224 512 238.3 512 256C512 273.7 497.7 288 480 288H425.3C412.1 316.3 384.8 336 352 336C319.2 336 291 316.3 278.7 288H32C14.33 288 0 273.7 0 256C0 238.3 14.33 224 32 224H278.7C291 195.7 319.2 176 352 176zM384 256C384 238.3 369.7 224 352 224C334.3 224 320 238.3 320 256C320 273.7 334.3 288 352 288C369.7 288 384 273.7 384 256zM480 64C497.7 64 512 78.33 512 96C512 113.7 497.7 128 480 128H265.3C252.1 156.3 224.8 176 192 176C159.2 176 131 156.3 118.7 128H32C14.33 128 0 113.7 0 96C0 78.33 14.33 64 32 64H118.7C131 35.75 159.2 16 192 16C224.8 16 252.1 35.75 265.3 64H480zM160 96C160 113.7 174.3 128 192 128C209.7 128 224 113.7 224 96C224 78.33 209.7 64 192 64C174.3 64 160 78.33 160 96z"/>
                        </svg> Sort Home Feed By Featured Posts
                    </span> 
                    <Arrow className={!sectionOneActive ? "arrow" : "arrow arrow--active"} />
                </button>
                <div ref={contentOne} style={{maxHeight: `${sectionOneHeight}`}} className="accordion--content">
                    <SortingOptions />
                </div>
            </div>

            <div className="accordion--section">
                <button className="accordion--button" onClick={toggleSectionTwo}>
                    <span className="accordion--button-text">
                        <svg className="accordion--sliderIcon"
                            width="20px" 
                            height="20px" 
                            viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="gridLargeIconTitle" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" color="#000000"> <title id="gridLargeIconTitle">Large Grid</title> <rect width="7" height="7" x="3" y="3"/> <rect width="7" height="7" x="14" y="3"/> <rect width="7" height="7" x="3" y="14"/> <rect width="7" height="7" x="14" y="14"/> 
                        </svg>
                        More Things To Do
                    </span>
                    <Arrow className={!sectionTwoActive ? "arrow" : "arrow arrow--active"} />
                </button>
                <div ref={contentTwo} style={{maxHeight: `${sectionTwoHeight}`}} className="accordion--content">
                    <ul className="accordion--gridList">
                    <li className="accordion--gridOption">✍️ Write a post</li>
                    <li className="accordion--gridOption">🎨 Design a site</li>
                    <li className="accordion--gridOption">🚀 Ninja training</li>
                    <li className="accordion--gridOption">👓 Read tutorials</li>
                    <li className="accordion--gridOption">💵 Build a SAAS</li>
                    <li className="accordion--gridOption">🙋‍♂️ Ask a question</li>
                    <li className="accordion--gridOption">🍿 Watch videos</li>
                    <li className="accordion--gridOption">⭐ <span className="accordion--highlitedOption">Upgrade to pro</span></li>

                    </ul>
                </div>
            </div>

        </main>
    );
}