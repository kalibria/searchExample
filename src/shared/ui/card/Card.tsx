import s from './card.module.css'
import {mappingDates} from "../../utils/mappingDates.ts";


type Props = {
    title: string
    status: Status
    dateCreated: string
    url: string
    className: string
}

type Status = 'Alive' | 'Dead'

export const Card = ({title, status, dateCreated, url, className}:Props) => {
    const date = mappingDates(dateCreated)
    return (
        <div className={`${s.card} ${className}`} >
            <a href={url} className={s.title}>{title}</a>
            <div className={s.info}>
                <p>Status: <span style={{color: status === 'Alive' ? 'green' : 'red'}}>{status}</span></p>
                <p>Created: {date}</p>
            </div>

        </div>
    )
}

