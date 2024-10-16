"use client";  // Correct client directive

import { useState } from "react";
import style from "../conditional.module.css";

const ConditionalStyling = () => {
    const [color, setColor] = useState('green'); 
    const {green} = style
    const toggleColor = () => {
        setColor(prevColor => prevColor == 'green' ? 'pink' : 'green'); 
    };

    return (
        <div>
            <h2 className={style.heading}>Conditional Styling in Next.js 14</h2>
            <h3 className={color === 'green' ? style.green : style.pink}>Adnan Yousaf</h3> 
            <button onClick={toggleColor}>Change Color</button>
            <h4 className={green}>green</h4> 
            <h4 className={green}>green color</h4> 
            
        </div>
    );
}

export default ConditionalStyling;
