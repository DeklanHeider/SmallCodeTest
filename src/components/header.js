const Header = ({ headerContent }) => {
    return (
        <header>
            <h3>{headerContent}</h3>
        </header>
    )
}

Header.defaultProps = {
    headerContent: 'Here is the Header for the site, please populate this area with usefull information', // Content of empty Headers will default to this string.
}

export default Header
