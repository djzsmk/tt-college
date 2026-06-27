function CharacterCard ({character}) {
    return (
        <>
            <h1>Character Card</h1>


            <div>
                <div>Name:{character.name}</div>
                <div>Race:{character.race}</div>
                <div>Class:{character.characterClass}</div>
                <div>Level:{character.level}</div>
            </div>

        
        </>
    )
}

export default CharacterCard