import "../css/app.css";
import CharacterList from "./CharacterList";
import {useState} from "react";
import CharacterPage from "./CharacterPage";

const CHARACTERS = [
    {
        name: "Bad Luck Bronto",
        color: "purple",
        image: "bad-luck-bronto.png",
    },
    {
        name: "Cry Ceratops",
        color: "red",
        image: "cry-ceratops.png",
    },
    {
        name: "Nervous Rex",
        color: "yellow",
        image: "nervous-rex.png",
    },
    {
        name: "Pterry Dactyl",
        color: "pink",
        image: "pterry-dactyl.png",
    },
    {
        name: "Raging Raptor",
        color: "blue",
        image: "raging-raptor.png",
    },
    {
        name: "Stego",
        color: "green",
        image: "stego.png",
    }
];


function App() {
    const [activeCharacter, setActiveCharacter] = useState(null);

    function onCharacterSelect(character) {
        setActiveCharacter(character);
    }

    return (
        <>
            {activeCharacter === null && <CharacterList
                characters={CHARACTERS}
                onCharacterSelect={onCharacterSelect}
            />}

            {activeCharacter !== null && <CharacterPage {...activeCharacter}/>}
        </>
    );
}

export default App;
