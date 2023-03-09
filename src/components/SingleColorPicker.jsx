import React from 'react'

export default function SingleColorPicker({color, value, onChange}) {
    
    const handleColor = () => {
        if(color === 'r') {
            return `rgb(${value},0,0)`
        } else if (color ==='g') {
            return `rgb(0,${value},0)`
        } else if (color === 'b') {
            return `rgb(0,0,${value})`
        }
    }
    return (
        <div className="color-pick">
        <div style={{width: '60px', height: '60px', backgroundColor: handleColor()}}></div>
        <label>{color}:</label>
        <input type="number" min={0} max={255} value={value} onChange={onChange}/>
        </div>
    )
  
}
