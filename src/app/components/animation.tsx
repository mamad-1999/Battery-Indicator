import React from "react";
import "./animation.css"

type AnimationType = {
    color: string
}

function Animation({ color }: AnimationType) {
    return (
        <div className="g-container">
            <div className="g-contrast">
                <ul className="g-bubbles" style={{ background: color }}>
                    <li className="i-bublles" style={{ background: color }}></li>
                    <li className="i-bublles" style={{ background: color }}></li>
                    <li className="i-bublles" style={{ background: color }}></li>
                    <li className="i-bublles" style={{ background: color }}></li>
                    <li className="i-bublles" style={{ background: color }}></li>
                    <li className="i-bublles" style={{ background: color }}></li>
                    <li className="i-bublles" style={{ background: color }}></li>
                    <li className="i-bublles" style={{ background: color }}></li>
                    <li className="i-bublles" style={{ background: color }}></li>
                    <li className="i-bublles" style={{ background: color }}></li>
                    <li className="i-bublles" style={{ background: color }}></li>
                    <li className="i-bublles" style={{ background: color }}></li>
                    <li className="i-bublles" style={{ background: color }}></li>
                    <li className="i-bublles" style={{ background: color }}></li>
                    <li className="i-bublles" style={{ background: color }}></li>
                </ul>
            </div>
        </div>
    )
}

export default Animation;
