import s from './searchInput.module.css'
import {ChangeEvent, useState} from "react";
import {debounce} from "../../../utils/debounce.ts";
import {getCharacters} from "../../../api/sendRequests.ts";
import {CharacterResponse} from "../../../types/types.ts";

const LIMIT_NUMBER = 3;

export const SearchInput = () => {
    const [symbol, setSymbol] = useState('')
    const [countCharacters, setCountCharacters] = useState<null | number>(null)
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSymbol(value)
        debounceSendRequest(value)
    }

    const debounceSendRequest = debounce((query: string) => {
        if (query.length > LIMIT_NUMBER) {
            console.log("count symbol", symbol)
            getCharacters(query).then((data: CharacterResponse) => {
                console.log("RequestData", data)
                setCountCharacters(data.info.count)
            })
        }
    }, 500)


    return (
        <div className={s.inputWrapper}>
            <input type="text" placeholder="Search characters..." className={s.input} autoFocus={true}
                   value={symbol} onChange={(e) => handleInputChange(e)}/>
            {
                countCharacters !== null && <p className={s.label}>Found characters: {countCharacters}</p>
            }
        </div>

    )
}