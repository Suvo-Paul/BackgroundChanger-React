import React from 'react'

const ButtonComponent = ({ color, setColor, text }) => {
    return (
        <button onClick={() => setColor(color)}
            className="outline-none px-4 py-2 rounded-full shadow-lg" style={{ backgroundColor: color, color: text }}>
            {color}
        </button>
    )
}

export default ButtonComponent