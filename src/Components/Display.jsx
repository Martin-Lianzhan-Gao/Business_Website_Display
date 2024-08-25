import display from "../assets/display.jpg"


function Display() { 
    return (
        <div className="dispaly-section">
            <div className="overlay"></div>
            <div className="display-content">
                <p className="main-title">SLIDING DOORS AND WINDOWS KEPT IN STOCK</p>
                <p className="second-title">FAMILY OWNED AND OPERATED. ALL PRODUCTS AUSTRALIAN MADE.</p>
            </div>
            <div class="display-btns">
                <button className="display-btn">CONTACT US</button>
                <button className="display-btn">SEE PRODUCTS</button>
            </div>
        </div>
    );
}

export default Display;