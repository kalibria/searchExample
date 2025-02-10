import s from './searchInput.module.css'
import {ChangeEvent, Dispatch, useState} from "react";
import {debounce} from "../../../utils/debounce.ts";
import {getCharacters} from "../../../api/sendRequests.ts";
import {Character, CharacterResponse, ResultOrError} from "../../../types/types.ts";

const LIMIT_NUMBER = 3;

type Props = {
    setCharacters: Dispatch<React.SetStateAction<Character[]>>
}

export const SearchInput = ({setCharacters}:Props) => {
    const [symbol, setSymbol] = useState('')
    const [countCharacters, setCountCharacters] = useState<null | number>(null)
    const [error, setError] = useState<null | string>(null)
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSymbol(value)
        debounceSendRequest(value)
    }

    const debounceSendRequest = debounce((query: string) => {
        if (query.length > LIMIT_NUMBER) {
            getCharacters(query)
                .then(({data, error}: ResultOrError<CharacterResponse>) => {
                    if(error) {
                        setError(error.message)
                        setCountCharacters(null);
                        setCharacters([]);
                    }else{
                        console.log('data', data)
                        setCountCharacters(data.info.count);
                        setCharacters(data.results);
                        setError(null)


                    }


                })
                .catch(error => {
                    console.log('error we are in catch', error)
                    // console.error("Error fetching characters:", error.message);
                });
        }
    }, 500);


    return (
        <div className={s.inputWrapper}>
            <input type="text" placeholder="Search characters..." className={s.input} autoFocus={true}
                   value={symbol} onChange={(e) => handleInputChange(e)}/>
            {
                countCharacters !== null && <p className={s.label}>Found characters: {countCharacters}</p>
            }
            {error && <p className={s.error}>{error}</p>}
        </div>

    )
}