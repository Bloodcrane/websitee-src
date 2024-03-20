import HomePage from "./Pages/home"
import DiscographyPage from "./Pages/discography"
import AboutPage from "./Pages/about"

const router = [
    {
        element: <HomePage/>,
        path: '/'
    },
    {
        element: <AboutPage/>,
        path: '/about'
    },
    {
        element: <DiscographyPage/>,
        path: '/discography'
    } 
]

export default router