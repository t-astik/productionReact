import { Link } from "react-router-dom"

import { AppRouter } from "app/providers/router"
import { useTheme } from "app/providers/ThemeProvider"
import { classNames } from "shared/lib/classNames/classNames"

import './styles/index.scss'



export const App = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Link to={'/'}>main</Link>
            <Link to={'./about'}>about</Link>
            <button onClick={toggleTheme}>Toggle</button>
            <AppRouter />
        </div>
    )
}