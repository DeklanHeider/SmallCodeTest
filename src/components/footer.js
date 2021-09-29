import PropTypes from 'prop-types'

const Footer = ( {footerContent} ) => {
    return (
        <footer className='footer'>
            <h3>{footerContent}</h3>
        </footer>
    )
}

Footer.defaultProps = {
    footerContent: 'Here is the footer, please populate this area with usefull information',
}

Footer.propTypes = {
    footerContent: PropTypes.string.isRequired,
}

export default Footer
