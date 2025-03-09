import ToolButton from "./ToolButton";

//ToolbarProps type that will
type ToolbarProps = {
    addNewSauna: () => void
}
/* toolbar component that will display the buttons for the user to interact with */

export default function ToolBar({addNewSauna}: ToolbarProps) {

    // ToolButton component bellow uses props from above to call the addNewSauna function
    // render section of toolbar that will display buttons and the ToolButton component calls pass props down to the ToolButton component
    return(
        <div className="border-bottom p-3">
            <span>
                <ToolButton buttonText="Bold" buttonColor="green" onClick={(()=> alert("Add Sauna"))}/>
                <ToolButton buttonText="Add" buttonColor="blue" onClick={addNewSauna}/>
            </span>
        </div>
    )
}