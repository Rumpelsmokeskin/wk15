import { useState } from "react";
import { Sauna } from "./Saunas";
import ToolButton from "./ToolButton";

const cardStyle = {
 
  width: "25rem",
  center: "text-center",
};

interface SaunaViewProps {
  sauna: Sauna[];
  selectedSaunaID: number;
  updateSaunaText: (
    id: number,
    text: string,
    image: string,
    name: string
  ) => void;
}
/* this is the card view of which sauna will be selected.  It will display a large image of the sauna, it's name and descriptive text.  The toolbutton will take info from input text and update the sauna info */
export default function SaunaView({
  sauna,
  selectedSaunaID,
  updateSaunaText,
}: SaunaViewProps) {
  const [inputText, setInputText] = useState("");
  const [inputImage, setInputImage] = useState("");
  const [inputName, setInputName] = useState("");

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const handleImageInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputImage(event.target.value);
  };

  const handleInputName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputName(event.target.value);
  };
  // Toolbutton below contains the prop to update saunaview content
  return (
    <div className="container d-flex flex-grow-1 flex-column justify-content-center">
      <div className="card justify-content-center shadow-sm " style={cardStyle}>
        <img
          src={sauna[selectedSaunaID].image}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{sauna[selectedSaunaID].name}</h5>
          <p className="card-text">{sauna[selectedSaunaID].text}</p>

          <form
            className="border rounded p-3"
            onSubmit={(event) => event.preventDefault()}
          >
            <label>Sauna Image: </label>
            <br></br>
            <input
              className="me-2"
              type="text"
              onChange={handleImageInput}
            ></input>
            <br></br>
            <label>Sauna Name: </label>
            <br></br>
            <input
              className="me-2"
              type="text"
              onChange={handleInputName}
            ></input>
            <br></br>
            <label>Sauna Text: </label>
            <br></br>
            <input className="me-2" type="text" onChange={handleInput}></input>

            <ToolButton
              buttonText="Update Sauna"
              buttonColor="purple"
              onClick={() =>
                updateSaunaText(
                  selectedSaunaID,
                  inputText,
                  inputImage,
                  inputName
                )
              }
            />
          </form>
        </div>
        <br></br>
      </div>
    </div>
  );
}
