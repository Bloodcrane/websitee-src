import LinkLayout from "../Layouts/linkLayout"

const HomePage = () => {
    return (
    <div>
        <div className="vinyl-container">
                {/* Spinning vinyl element */}
                {/* You can use an image or a div with CSS to achieve the spinning effect */}
        </div>
        <main>
            <header>
                <LinkLayout/>
            </header>
            <div class='content'>
                <div class='visible'>
                    <ul>
                        <li>K-pop</li>
                        <li>Hip hop</li>
                        <li>Pop</li>
                        <li>R&B</li>
                        <li>EDM</li>
                    </ul>
                </div>
            </div>
        </main>
    </div>
    )
}

export default HomePage