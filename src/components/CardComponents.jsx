import React, { useState } from 'react'

const CardComponents = ({children}) => {

    const [color, setColor] = useState("black")

    return (
        <div className="w-full h-screen duration-200"
            style={{ backgroundColor: color }}
        >
            <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
                <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">

                    {/* Render children and pass setColor as a prop */}
                    {React.Children.map(children, child => {
                        return React.cloneElement(child, { setColor });
                    })}

                </div>
            </div>
        </div >
    );
};

export default CardComponents