import {useParams} from "react-router";
import {getCharacter} from "../../api/sendRequests.ts";
import {useEffect, useState} from "react";
import {Character} from "../../types/types.ts";
import s from './characterPage.module.css'


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
        <div className={s.card}>
            <h1 className={s.title}>{character.name}</h1>
            <div>
                <img src={character.image} alt={character.name}/>
            </div>
            <p className={s.info}>Status: <span
                style={{color: character.status === 'Alive' ? 'green' : 'red'}}> {character.status}</span>
            </p>
            <p className={s.info}>Location: {character.location.name}</p>
        </div>
    )
}