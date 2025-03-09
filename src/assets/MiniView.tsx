import { Sauna } from "./Saunas"
/*This is the mini card that goes into the side bar, it displays the order number in the array and the associated image*/

interface MiniViewProps {
    sauna: Sauna;
    isSelected: boolean;
    onSelected: (id: number) => void;
    deleteSauna: (id: number) => void
}

//DELETE PROP BELOW
// this is the mini card that goes into the sidebar, it displays the order number in the array and the associated image
export default function MiniView({ sauna, isSelected, onSelected, deleteSauna }: MiniViewProps) {
return(
    <>
    <div className="container p-1" >
    <div className="row">
        <div className="col-sm align-items-baseline">{ sauna.order }</div> 
            <div className="col-sm p-1 text-end">
                <button className="btn btn-danger" onClick={() => deleteSauna(sauna.id)}>x</button>
            </div>
    </div>
        <div style={{padding: "3px"}} 
    onClick={() => onSelected(sauna.id)}
    className={ isSelected ? "border border-primary bold rounded-2" : "" }>
        <img 
    src={ sauna.image } 
    style={{width: "150px", margin: "5px"}}/>
        </div>
    </div>
    </>
)
}