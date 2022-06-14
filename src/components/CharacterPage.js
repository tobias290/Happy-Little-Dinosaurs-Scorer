import {useState} from "react";

function CharacterPage({name, color, image}) {
    const [count, setCount] = useState(0);

    function updateCount(increase) {
        if (!increase && count === 0)
            return;


        setCount(increase ? count + 1 : count - 1);
    }

    return (
        <div className={`character-page character-page--${color}`}>
            <div className="character-page__header">
                <img src={`images/${image}`} alt={name} />
                <h1>{name}</h1>
            </div>

            <div className="character-page__body">
                <button className={`button button--${color} button--small`} onClick={() => setCount(0)}>Reset</button>

                <div className="character-page__counter">
                    <span>{count}</span>
                </div>

                <div className="character-page__btn-group">
                    <button className={`button button--${color}`} onClick={() => updateCount(false)}>-</button>
                    <button className={`button button--${color}`} onClick={() => updateCount(true)}>+</button>
                </div>
            </div>
        </div>
    );
}

export default CharacterPage;
