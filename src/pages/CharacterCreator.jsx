import CharacterCard from "./CharacterCard";

function CharacterCreator () {
    const character = {
        name: "Lucian",
        race: "Elf",
        CharacterClass: "Fighter",
        level: 1
    };
    return (
        <>
        <h1>Character creator</h1>

        <CharacterCard character={character} />
        </>
    )
}

export default CharacterCreator