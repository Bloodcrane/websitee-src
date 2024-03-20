
import LinkLayout from "../Layouts/linkLayout"

const AboutPage = () => {
    return (
        <div>
            <header>
                <LinkLayout/>
            </header>
            <div className="content-about">
                <div className="image-container-about">
                    <img src="https://d.wattpad.com/story_parts/609417795/images/1545bb0364221ba3638315120070.jpg" alt="About" />
                </div>
                <div className="text-container-about">
                    <h1>BTS</h1>
                    <p>BTS, also known as the Bangtan Boys, is a globally renowned South Korean boy band 
                        formed by Big Hit Entertainment. Debuted in 2013, BTS consists of seven members: RM (formerly known as Rap Monster), 
                        Jin, Suga, J-Hope, Jimin, V, and Jungkook. Renowned for their captivating music, dynamic performances, and socially 
                        conscious lyrics, BTS has garnered immense popularity worldwide, earning the title of "The Beatles of the 21st Century" 
                        by media outlets. Their music transcends genres, blending elements of pop, hip-hop, R&B, and EDM, while addressing themes
                         such as mental health, self-love, and societal issues. With chart-topping albums, sold-out world tours, and a dedicated 
                         fanbase known as the ARMY, BTS continues to make significant cultural and musical contributions, 
                        solidifying their position as one of the most influential and iconic acts in contemporary music.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutPage