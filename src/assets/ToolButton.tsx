/* Tool bar button */


export default function ToolButton({ buttonText, buttonColor, onClick}: {buttonText: string, buttonColor: string, onClick: () => void}) {
    return(
        <button 
        className="btn btn-outline-primary me-2" style={{color: buttonColor}} onClick={onClick}
        >{ buttonText }</button>
    )
}