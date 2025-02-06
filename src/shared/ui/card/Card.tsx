import s from './card.module.css'


type Props = {
    title: string
    status: Status
    dataCreated: string
    url: string
    className: string
}

type Status = 'Alive' | 'Dead'

export const Card = ({title, status, dataCreated, url, className}:Props) => {
    return (
        <div className={`${s.card} ${className}`} >
            <a href={url} className={s.title}>{title}</a>
            <div className={s.info}>
                <p>Status: <span style={{color: status === 'Alive' ? 'green' : 'red'}}>{status}</span></p>
                <p>Created: {dataCreated}</p>
            </div>

        </div>
    )
}

