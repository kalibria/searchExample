import './App.module.css'
import {SearchInput} from "./shared/ui/SearchInput/SearchInput/SearchInput.tsx";
import {useState} from "react";
import {Character} from "./shared/types/types.ts";
import {Card} from "./shared/ui/card/Card.tsx";
import s from './App.module.css'


function App() {
    const [characters, setCharacters] = useState<Character[]>([])
    return (
        <>
            <SearchInput setCharacters={setCharacters}/>
            <div className={s.cardsContainer}>
                {characters.map(character => (
                    <Card title={character.name} status={character.status} dataCreated={character.created}
                          url={character.url} key={character.id} className={s.card}/>))
                }
            </div>
        </>
    )
}

export default App
