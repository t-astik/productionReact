import { Route, Routes } from "react-router-dom"
import { Suspense } from "react"

import { routeConfig } from "shared/config/routeConfig/routeConfig"

const AppRouter = () => {

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                    {Object.values(routeConfig).map(({element, path}) => (
                        <Route element={element} path={path} key={path} />
                    ))}
            </Routes>
        </Suspense>
    )
}

export default AppRouter