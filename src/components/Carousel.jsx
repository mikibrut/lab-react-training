import React, { useState, useEffect } from 'react'

export default function Carousel({images}) {

    const [imgIndex, setImgIndex] = useState(0)
    const [img, setImg] = useState(images[imgIndex])

    useEffect(() => {
        setImg(images[imgIndex])
    }, [imgIndex])

const handleLeft = () => {
    if(imgIndex > 0){
        setImgIndex(prev => prev -1)
    }
}

const handleRight = () => {
    if(imgIndex < images.length -1){
        setImgIndex(prev => prev +1)
    }
}

  return (
    <div>
        <img src={img} alt="Default" />
        <button onClick={handleLeft}>Left</button>
        <button onClick={handleRight}>Right</button>
    </div>
  )
}
