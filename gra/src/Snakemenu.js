import React from 'react';
export default (props) => {
    return (
        <div>
            {props.start.map((dot, i) => {
                const stur = {
                    left: `${dot[0]}%`,
                    top: `${dot[1]}%`
                }
                return (
                    <div className="snake-dot2" key={i} style={stur}></div>
                )
            })}
        </div>
    )
}