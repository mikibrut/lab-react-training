const Greeting = (props) => {
    const { language, children } = props

let lang;
    switch (language){
    case 'en':
        lang = 'Hello';
    break;
    case 'de':
        lang = 'Hallo';
    break;
    case 'fr':
        lang = 'Bonjour';
    break;
    case 'es':
        lang = 'Hola';
    break;
    default: 
    break;
};

return (
    <div className = "card-container">
        <div className = "card">
            <h2>{lang} {children}</h2>
        </div>
    </div>
)
}

export default Greeting;