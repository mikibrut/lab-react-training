import React, { useState } from 'react'

const LikeButton = () => {
    const [count, setCount] = useState(0);

    const colorArr = ['purple','blue','green','yellow','orange','red'];

    const backGroundStyle = {
        backgroundColor : `${colorArr[Math.floor(Math.random()*colorArr.length)]}`
    }

    const handleIncrease = () => {
        setCount(prev => prev +1);
    }

    return (
    <div >
        <button style={backGroundStyle} onClick = {handleIncrease}>{count} Likes</button>
    </div>
  )
}

export default LikeButton;
