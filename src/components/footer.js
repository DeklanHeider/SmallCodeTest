const Footer = ({ footerContent }) => {
    return (
        <footer>
            <h4>{footerContent}</h4>
        </footer>
    )
}

Footer.defaultProps = {
    footerContent: 'Here is the footer, please populate this area with usefull information', // Content of all Footers will default to this if nothing is specified
}

export default Footer
