function Display({ refs, onScroll }) {
    
    return (
        <div className="dispaly-section">
            <div className="overlay"></div>
            <div className="display-content">
                <p className="main-title">CUSTOMIZED ALUMINUM GLASS WINDOWS AND DOORS</p>
                <p className="second-title">CONSIDERING WINDOWS/DOOR REPLACEMENT? GET IN TOUCH WITH OUR EXPERT TEAM!</p>
            </div>
            <div className="display-btns">
                <button className="display-btn"
                    onClick={() => {
                        onScroll(refs.contact)
                    }}
                >CONTACT US</button>
                <button className="display-btn" onClick={() => {
                    onScroll(refs.projects)
                }}>SEE PROJECTS</button>
            </div>
        </div>
    );
}

export default Display;