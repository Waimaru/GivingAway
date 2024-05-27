import "../scss/main.scss"

function HomeHeader() {
    return (
        <header>
            <div className="btn-container">
                <button>Zaloguj</button>
                <button className="create-account-btn">Załóż konto</button>
            </div>
            <div className="menu-btn-container">
                <button className="btn-border">Start</button>
                <button>O co chodzi?</button>
                <button>O nas</button>
                <button>Fundacja i organizacja</button>
                <button>Kontakt</button>
            </div>
        </header>
    );
}

export default HomeHeader