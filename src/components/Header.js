function Header({isDarkMode, onDarkModeClick}){
    return (
        <header onClick={onDarkModeClick}>
            <h2>Shopster</h2>
            <button>
            {isDarkMode ? "Dark" : "Light"} Mode
            </button>
        </header>
    )
}

export default Header