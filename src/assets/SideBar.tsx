/* importing miniview and dummy data */
import { useState } from "react";
import MiniView from "./MiniView";
import { Sauna } from "./Saunas";

type SideBarProps ={
    selectedSaunaID: number,
    setSelectedSaunaID: (id: number) => void, 
    sauna: Sauna[]
    deleteSauna: (id: number) => void
}

/* sidebar is calling in 4 miniview components and passing props to those components */
export default function SideBar ({sauna, setSelectedSaunaID, selectedSaunaID, deleteSauna}: SideBarProps) {
    const [isExpanded, setIsExpanded] = useState(true)
    

    const expanderClick = () => {
        setIsExpanded(!isExpanded)
    }

    const handleSlideClick =(id: number) => {
        setSelectedSaunaID(id)
    }
    return (
        <>
        {isExpanded ? (
        <div className="border rounded p-3 flex-column">
            { sauna.map( (sauna: Sauna) => <MiniView key={sauna.id} sauna= {sauna} onSelected={handleSlideClick} isSelected={sauna.id === selectedSaunaID} deleteSauna={deleteSauna}/>) }
            
        </div>) : null}
       <button className="btn btn-light p-1" onClick={expanderClick}>{ isExpanded ? "<" : ">"}</button>
        </>
    )
}