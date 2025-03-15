import { useState } from "react";
import SaunaView from "./assets/SaunaView";
import SideBar from "./assets/SideBar";
import ToolBar from "./assets/ToolBar";
import testSauna from "./assets/Saunas";
import blanksauna from "./assets/blanksauna.png";

export default function App() {
  //  **raised** state for sauna :)
  //TEST_DATA put into state
  const [saunaState, setSaunaState] = useState(testSauna);
  const [selectedSaunaID, setSelectedSaunaID] = useState(0);

  //function section

  //function to add a new sauna
  const addNewSauna = () => {
    const newSauna = {
      id: saunaState.length ? saunaState[saunaState.length - 1].id + 1 : 0,
      order: saunaState.length + 1,
      image: blanksauna,
      name: "New Sauna",
      text: "New Sauna text",
      isSelected: false,
    };
    setSaunaState([...saunaState, newSauna]);
  };

  //function to delete a sauna
  const deleteSauna = (id: number) => {
    setSaunaState(saunaState.filter((s) => s.id !== id));
  };

  //function to update text of a sauna
  const updateSauna = (
    id: number,
    text: string,
    image: string,
    name: string
  ) => {
    setSaunaState(
      saunaState.map((s) => (s.id === id ? { ...s, text, image, name } : s))
    );
  };

  //render section of App
  return (
    <div className="d-flex vh-100 flex-column">
      <ToolBar addNewSauna={addNewSauna} />
      <div className="d-flex flex-grow-1">
        <SideBar
          sauna={saunaState}
          selectedSaunaID={selectedSaunaID}
          setSelectedSaunaID={setSelectedSaunaID}
          deleteSauna={deleteSauna}
        />
        <SaunaView
          sauna={saunaState}
          selectedSaunaID={selectedSaunaID}
          updateSaunaText={updateSauna}
        />
      </div>
    </div>
  );
}
