import React from "react";
import Tick from "../tick/Tick"
import { v4 as uuidv4 } from "uuid";

export default function SortingOptions(props) {
    
    const optionsArray = ["Default", "Featured", "Latest", "Following", "Bookmarks"];

    const [selectedOption, setSelectedOption] = React.useState(1);
    const [hoveredOption, setHoveredOption] = React.useState(null)

    return (
    <ul className="accordion--flexList">
        {optionsArray.map((item, index) => (
        <li key={uuidv4()} 
            className="accordion--flexOption" 
            onMouseEnter={() => setHoveredOption(index + 1)}
            onMouseLeave={() => setHoveredOption(null)}
            onClick={() => setSelectedOption(index+1)}>
                <Tick visible={selectedOption === index + 1 || hoveredOption === index + 1 ? true : false} />{item}
            </li>) )}
    </ul>
    );
}