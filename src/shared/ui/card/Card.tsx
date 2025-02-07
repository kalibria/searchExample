import s from './card.module.css';
import {mappingDates} from "../../utils/mappingDates.ts";
import {Link} from "react-router";
import {Status} from "../../types/types.ts";


type Props = {
    title: string
    status: Status
    dateCreated: string
    url: string
    className: string
    id: number
}


export const Card = ({title, status, dateCreated, className, id}:Props) => {
    const date = mappingDates(dateCreated)
    return (
        <div className={`${s.card} ${className}`} >
            {/*<a href={url} className={s.title}>{title}</a>*/}
            <Link to={`/character/${id}`} className={s.title}>{title}</Link>
            <div className={s.info}>
                <p>Status: <span style={{color: status === 'Alive' ? 'green' : 'red'}}>{status}</span></p>
                <p>Created: {date}</p>
            </div>

        </div>
    )
}

