import { Link } from "react-router-dom"

import { AppRouter } from "app/providers/router"
import { useTheme } from "app/providers/ThemeProvider"
import { classNames } from "shared/lib/classNames/classNames"
import { Navbar } from "widgets/Navbar"

import './styles/index.scss'



export const App = () => {
    const { theme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            
            <AppRouter />
        </div>
    )
}