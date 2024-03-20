import HomePage from "./Pages/home"
import DiscographyPage from "./Pages/discography"
import AboutPage from "./Pages/about"

const router = [
    {
        index: true,
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