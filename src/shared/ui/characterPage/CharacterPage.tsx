import {useParams} from "react-router";
import {getCharacter} from "../../api/sendRequests.ts";
import {useEffect, useState} from "react";
import {Character, ResultOrError} from "../../types/types.ts";
import s from './characterPage.module.css'


export function CharacterPage() {
    console.log('CharacterPage')
    const {id} = useParams();
    const [character, setCharacter] = useState<Character | null>(null);
    const [error, setError] = useState<null | string>(null)

    useEffect(() => {
        if (id) {
            getCharacter(Number(id)).then(({data, error}: ResultOrError<Character>) => {
                if(error){
                    setCharacter(null)
                    setError(error.message)
                }else {
                    setCharacter(data)
                    setError(null)
                }

            });
        }
    }, [id]);

    if (!character && !error) {
        return <div className={s.card}>Loading...</div>;
    }else if(error){
        return <div className={s.error}>"Oops! Something went wrong. Please reload the page."</div>
    }

    return (
        <div className={s.card}>
            <h1 className={s.title}>{character?.name}</h1>
            <img src={character?.image} alt={character?.name} className={s.image}/>
            <p className={s.info}>Status: <span
                style={{color: character?.status === 'Alive' ? 'green' : 'red'}}> {character?.status}</span>
            </p>
            <p className={s.info}>Location: {character?.location.name}</p>
        </div>
    )
}