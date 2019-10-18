import React from 'react'

import logoFooter from './../../assets/image/logo-24-horas-news-footer.svg'

function Footer() {
    return(
        <footer className="footer">

			<div className="logo-footer"><img src={logoFooter} alt="" /></div>
			<div className="texto-footer">Copyright ©2002 - 2019 - 24 Horas News - Todos os direitos reservados. <br /> website desenvolvido por <a href="https://webfadoni.com/" target="_blank" rel="noopener noreferrer">WEB Fadoni</a></div>

        </footer>
    );
}

export default Footer;
