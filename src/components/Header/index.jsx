import React from 'react'
import { Link } from 'react-router-dom'

import iconFacebook from './../../assets/image/icon-facebook.svg'
import iconInsta from './../../assets/image/icon-insta.svg'
import logo24Horas from './../../assets/image/logo-24-horas-news.svg'
import iconLocalizar from './../../assets/image/icon-localizar.svg'


function Header() {
    return(
		<React.Fragment>
	        <header className="header">

	            <div className="header-topo">
	                <div className="container">
	                    <div className="row">
	                        <div className="col-12 col-sm-2">
	                            <div className="lista-icons-social">
	                                <a href="https://www.facebook.com/24horasnews/" target="_blank" rel="noopener noreferrer" title="Facebook"><img src={iconFacebook} alt="Facebook" /></a>
	                                <a href="https://www.facebook.com/24horasnews/" target="_blank" rel="noopener noreferrer" title="Instagram"><img src={iconInsta} alt="Instagram" /></a>
	                            </div>
	                        </div>
	                        <div className="col-12 col-sm-10">
	                            <nav className="header-topo-links">
	                                <ul>
	                                    <li><Link to="/como-anunciar" title="Como Anunciar">Como Anunciar</Link></li>
	                                    <li>|</li>
	                                    <li><Link to="/fale-conosco" title="Fale Conosco">Fale Conosco</Link></li>
	                                    <li>|</li>
	                                    <li><Link to="/expediente" title="Expediente">Expediente</Link></li>
	                                </ul>
	                            </nav>
	                        </div>
	                    </div>
	                </div>
	            </div>

	            <div className="header-logo-menu">
	                <div className="container">
	                    <div className="row">

	                        <div className="col-12 col-sm-2">
	                            <a href="/" title="Voltar a Home do 24 Horas News"><img src={logo24Horas} alt="Logo 24 Horas News" className="img-fluid" /></a>
	                        </div>

	                        <div className="col-12 col-sm-5">
	                            <nav className="opcoes-header-logo">
	                                <li className="noticia"><a href="/noticia" title="Notícia">Notícia</a></li>
	                                <li className="esporte"><a href="/esporte" title="Esporte">Esporte</a></li>
	                                <li className="entretenimento"><a href="/entretenimento" title="Entretenimento">Entretenimento</a></li>
	                                <li className="pingo"><a href="/pingo-no-i" title="Pingo no i">Pingo no i</a></li>
	                                <li className="videos"><a href="/videos" title="Vídeos">Vídeos</a></li>
	                            </nav>
	                        </div>

	                        <div className="col-12 col-sm-5">
	                            <div className="localizar-header">
	                                <input placeholder="localizar no 24 horas news" /><button><img src={iconLocalizar} alt="Localizar" /></button>
	                            </div>
	                        </div>

	                    </div>
	                </div>
	            </div>

	        </header>

			<div className="banner-header">
				<div className="container">
					<div className="container-banner-header">
						<ins data-revive-zoneid="18" data-revive-target="_blank" data-revive-blockcampaign="1" data-revive-id="3cc3bd3e22640677cba16e4cb22664e9"></ins>
					</div>
				</div>
			</div>

		</React.Fragment>
    );
}

export default Header;
