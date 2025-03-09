import { useState } from "react";
import { Sauna } from "./Saunas"
import ToolButton from "./ToolButton"


const cardStyle = {
    height: '35rem',
    width: '25rem',
    center: 'text-center'
}

interface SaunaViewProps {
    sauna: Sauna[];
    selectedSaunaID: number;
    updateSaunaText: (id: number, text: string) => void;
  }
/* this is the card view of which sauna will be selected.  It will display a large image of the sauna, it's name and descriptive text.  The toolbutton will take info from input text and update the sauna info */
export default function SaunaView({ sauna, selectedSaunaID, updateSaunaText }: SaunaViewProps ) {

    const [inputText, setInputText] = useState("")

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(event.target.value)
    }
    // Toolbutton below contains the prop to update saunaview contenrt
    return(
        
        <div className="container d-flex flex-grow-1 flex-column justify-content-center">
        <div className="card justify-content-center shadow-sm " style={ cardStyle }>
  <img src= { sauna[selectedSaunaID].image } className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{ sauna[selectedSaunaID].name }</h5>
    <p className="card-text">{ sauna[selectedSaunaID].text }</p>
    <input className="me-2" type="text" onChange={handleInput}></input>
    
    <ToolButton buttonColor= "purple" buttonText="Update" onClick={(() => updateSaunaText(selectedSaunaID, inputText))}/>
  </div>
  <br></br>
</div>
</div>
    )
}