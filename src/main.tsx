import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter, Route, Routes} from "react-router";
import {CharacterPage} from "./shared/ui/character/CharacterPage.tsx";



createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path='/character/:id' element={<CharacterPage/>}/>
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)
