import s from './searchInput.module.css'

export const SearchInput = () => {
    return (
        <div className={s.inputWrapper}>
            <input type="text" placeholder="Search characters..." className={s.input}/>
        </div>
    )
}