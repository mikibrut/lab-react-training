const BoxColor = (props) => {
        const {r, g, b} = props;
        let styleBox = {
            backgroundColor: `rgb(${r},${g},${b})`,
            padding: '20px',
            margin: '10px 30px 10px 30px',
            border: '1px solid black',
            textAlign: 'center'
        };
    return(
        <div style={styleBox}>rgb({r},{g},{b})</div>
        )
}

export default BoxColor;