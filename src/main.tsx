import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {HashRouter, Route, Routes} from "react-router";
import {CharacterPage} from "./shared/ui/characterPage/CharacterPage.tsx";



createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <HashRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path='/character/:id' element={<CharacterPage/>}/>
            </Routes>
        </HashRouter>
    </StrictMode>,
)
