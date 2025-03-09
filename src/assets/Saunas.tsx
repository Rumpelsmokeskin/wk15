/* importing all images */
import alignThermo from "./Align_Thermo.png"
import align from "./Align.png"
import balanceThermo from "./Balance-Thermo.png"
import balance from "./Balance.png"

// I created a type for sauna that I could import to proptypes in each section of the app
export type Sauna = {

    
    id: number,
    order: number,
    image: string,
    name: string,
    text: string,
    isSelected: boolean
   

}
/*dummy information*/
const testSauna = [
    
    {
        id: 0,
        order: 1,
        image: alignThermo,
        name: "Align Thermo",
        text: "Align Thermo is sauna luxury. The wall paneling are made of thermally-treated aspen lumber with wider slats and narrower groove, giving the feeling of infinity and warmth.",
        isSelected: false,
      

    },
    {
        id: 1,
        order: 2,
        image: align,
        name: "Align",
        text: "The Align is fresh and simple, setting the standard for style, technology, comfort and practicality, with interior and exterior cladding of solid aspen, and a classic softline profile.",
        isSelected: false,
       
    },
    {
        id: 2,
        order: 3,
        image: balanceThermo,
        name: "Balance Thermo",
        text: "Step into the Balance Thermo Sauna, where premium design and elegant detailing meet thermally-treated aspen lumber to elevate your experience and enhance your overall well-being.",
        isSelected: false,
       
    },
    {
        id: 3,
        order: 4,
        image: balance,
        name: "Balance",
        text: "Discover elevated energy and rejuvenation with our Balance sauna. Balance is crafted with beautiful, blonde-aspen lumber for a lighter, brighter immersive sauna experience.",
        isSelected: false,
     
    }
]

export default testSauna