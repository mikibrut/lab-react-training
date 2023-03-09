import React , {useState} from 'react'
import SingleColorPicker from './SingleColorPicker';

export default function RGBColorPicker() {
    const [r, setR] = useState(0);
    const [g, setG] = useState(0);
    const [b, setB] = useState(0);
  
    
  
    return (
      <div>
        <SingleColorPicker
          color="r"
          value={r}
          onChange={(e) => {setR(e.target.value)}}
        />
  
        <SingleColorPicker
          color="g"
          value={g}
          onChange={(e) => {setG(e.target.value)}}
        />
  
        <SingleColorPicker
          color="b"
          value={b}
          onChange={(e) => {setB(e.target.value)}}
        />
        <div>
        <div style={{width: '60px', height: '60px', backgroundColor: `rgb(${r}, ${g}, ${b})`}}></div>
        <p>rgb({r},{g},{b})</p>
        </div>
      </div>
    );
}
