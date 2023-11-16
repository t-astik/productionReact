import { Route, Routes, Link } from "react-router-dom"
import { Suspense } from "react"
import './index.scss'
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async"
import { MainPageAsync } from "./pages/MainPage/MainPage.async"

export const App = () => {

    return (
        <div className="app">
            <Link to={'/'}>main</Link>
            <Link to={'./about'}>about</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                        <Route path={'/about'} element={<AboutPageAsync />}/>
                        <Route path={'/'} element={<MainPageAsync />}/>
                </Routes>
            </Suspense>
        </div>
    )
}