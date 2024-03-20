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
                    <ul className="textUl">
                        <li className="textLi">K-pop</li>
                        <li className="textLi">Hip hop</li>
                        <li className="textLi">Pop</li>
                        <li className="textLi">R&B</li>
                        <li className="textLi">EDM</li>
                    </ul>
                </div>
            </div>
        </main>
    </div>
    )
}

export default HomePage