import { classNames } from "shared/lib/classNames/classNames"
import { useTheme } from "app/providers/ThemeProvider"
import { Theme } from "app/providers/ThemeProvider"
import { Button, ThemeButton } from "shared/ui/Button/Button"

import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import LightIcon from 'shared/assets/icons/theme-light.svg'

import cls from './ThemeSwitcher.module.scss'

interface ThemeSwitcherProps {
    classname?: string,
}

export const ThemeSwitcher = ({classname}: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme()

    return (
        <Button 
            className={classNames(cls.ThemeSwitcher, {}, [classname])}
            onClick={toggleTheme}
            theme={ThemeButton.CLEAR}
        >
            { theme === Theme.DARK ? <DarkIcon /> : <LightIcon />} 
            
        </Button>
    )
}