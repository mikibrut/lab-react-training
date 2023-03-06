import React, {useState} from 'react'

export default function ClickablePicture({img, imgClicked}) {
    const [photo, setPhoto ] = useState(img);

const handleChange = () => {
    const newPhoto = photo === img ? imgClicked : img;
    setPhoto(newPhoto);
}

  return (
    <img onClick={handleChange} src={photo} alt="maxence"/>
  )
}

