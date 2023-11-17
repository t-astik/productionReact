import { Route, Routes, Link } from "react-router-dom"
import { Suspense } from "react"
import './styles/index.scss'
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async"
import { MainPageAsync } from "./pages/MainPage/MainPage.async"
import { useTheme } from "./theme/useTheme"


export const App = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <div className={`app ${theme}`}>
            <Link to={'/'}>main</Link>
            <Link to={'./about'}>about</Link>
            <button onClick={toggleTheme}>Toggle</button>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                        <Route path={'/about'} element={<AboutPageAsync />}/>
                        <Route path={'/'} element={<MainPageAsync />}/>
                </Routes>
            </Suspense>
        </div>
    )
}