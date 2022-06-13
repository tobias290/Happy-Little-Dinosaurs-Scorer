function CharacterList({characters, onCharacterSelect}) {
    return (
        <div className="characters">
            {characters.map(character =>
                <div className={`character character--${character.color}`} onClick={() => onCharacterSelect(character)}>
                    <img
                        className="character__img"
                        src={`images/${character.image}`}
                        alt={character.name}
                    />
                    <h1 className="character__name">{character.name}</h1>
                </div>
            )}
        </div>
    );
}

export default CharacterList;
