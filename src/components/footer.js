const Footer = ({ footerContent }) => {
    return (
        <footer className='footer'>
            <h4>{footerContent}</h4>
        </footer>
    )
}

Footer.defaultProps = {
    footerContent: 'Here is the footer, please populate this area with usefull information',
}


export default Footer
