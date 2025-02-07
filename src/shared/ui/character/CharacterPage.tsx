import {useParams} from "react-router";
import {getCharacter} from "../../api/sendRequests.ts";
import {useEffect, useState} from "react";
import {Character} from "../../types/types.ts";


export function CharacterPage() {
    console.log('CharacterPage')
    const {id} = useParams();
    const [character, setCharacter] = useState<Character | null>(null);

    useEffect(() => {
        if (id) {
            getCharacter(Number(id)).then(data => setCharacter(data));
        }
    }, [id]);

    if (!character) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{character.name}</h1>
            <div>
                <img src={character.image} alt={character.name}/>
            </div>
            <p>Status: {character.status}</p>
            <p>Location: {character.location.name}</p>
        </div>
    )
}