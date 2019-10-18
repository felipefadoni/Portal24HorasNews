import React, { PureComponent } from 'react'

import LazyLoad from 'react-lazyload'

import loading from './../../assets/image/carregando.webp'

class NoticiaDestaque extends PureComponent {

    render() {

        const { noticias } = { ...this.props };

        const imgLoading = <img src={loading} width="100%" alt="Carregando 24 Horas News"/>;
        
        return(
            <div className="col-12 col-xl-6">
                <div className="row">
                    <div className="col-12">
                        <div className="noticia-destaque">
                            <a href={(noticias.noticia_01_url) ? noticias.noticia_01_url : ''} title={(noticias.noticia_01_titulo) ? noticias.noticia_01_titulo : ''}>
                                <h3>{(noticias.noticia_01_chapeu) ? noticias.noticia_01_chapeu : ''}</h3>
                                <h2>{(noticias.noticia_01_titulo) ? noticias.noticia_01_titulo : ''}</h2>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="row mt-32">
                    <div className="col-12 col-lg-6 col-xl-6">
                        <div className="noticia-destaque-imagem">
                            <a href={(noticias.noticia_02_url) ? noticias.noticia_02_url : ''} title={(noticias.noticia_02_titulo) ? noticias.noticia_02_titulo : ''}>
                                <LazyLoad height={158} placeholder={imgLoading}>
                                    <img src={(noticias.noticia_02_imagem) ? noticias.noticia_02_imagem : loading} width="100%" alt={(noticias.noticia_02_titulo) ? noticias.noticia_02_titulo : ''} />
                                </LazyLoad>
                                <h2>{(noticias.noticia_02_titulo) ? noticias.noticia_02_titulo : ''}</h2>
                            </a>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-6">
                        <div className="noticia-destaque-imagem">
                            <a href={(noticias.noticia_03_url) ? noticias.noticia_03_url : ''} title={(noticias.noticia_03_titulo) ? noticias.noticia_03_titulo : ''}>
                                <LazyLoad height={158} placeholder={imgLoading}>
                                    <img src={(noticias.noticia_03_imagem) ? noticias.noticia_03_imagem : loading} width="100%" alt={(noticias.noticia_03_titulo) ? noticias.noticia_03_titulo : ''} />
                                </LazyLoad>
                                <h2>{(noticias.noticia_03_titulo) ? noticias.noticia_03_titulo : ''}</h2>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="row mt-32">
                    <div className="col-12 col-lg-4 col-xl-4">
                        <div className="noticia-destaque-imagem-4">
                            <a href={(noticias.noticia_04_url) ? noticias.noticia_04_url : ''} title={(noticias.noticia_04_titulo) ? noticias.noticia_04_titulo : ''}>
                                <LazyLoad height={92} placeholder={imgLoading}>
                                    <img src={(noticias.noticia_04_imagem) ? noticias.noticia_04_imagem : loading} width="100%" alt={(noticias.noticia_04_titulo) ? noticias.noticia_04_titulo : ''} />
                                </LazyLoad>
                                <h2>{(noticias.noticia_04_titulo) ? noticias.noticia_04_titulo : ''}</h2>
                            </a>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 col-xl-4">
                        <div className="noticia-destaque-imagem-4">
                            <a href={(noticias.noticia_05_url) ? noticias.noticia_05_url : ''} title={(noticias.noticia_05_titulo) ? noticias.noticia_05_titulo : ''}>
                                <LazyLoad height={92} placeholder={imgLoading}>
                                    <img src={(noticias.noticia_05_imagem) ? noticias.noticia_05_imagem : loading} width="100%" alt={(noticias.noticia_05_titulo) ? noticias.noticia_05_titulo : ''} />
                                </LazyLoad>
                                <h2>{(noticias.noticia_05_titulo) ? noticias.noticia_05_titulo : ''}</h2>
                            </a>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 col-xl-4">
                        <div className="noticia-destaque-imagem-4">
                            <a href={(noticias.noticia_06_url) ? noticias.noticia_06_url : ''} title={(noticias.noticia_06_titulo) ? noticias.noticia_06_titulo : ''}>
                                <LazyLoad height={92} placeholder={imgLoading}>
                                    <img src={(noticias.noticia_06_imagem) ? noticias.noticia_06_imagem : loading} width="100%" alt={(noticias.noticia_06_titulo) ? noticias.noticia_06_titulo : ''} />
                                </LazyLoad>
                                <h2>{(noticias.noticia_06_titulo) ? noticias.noticia_06_titulo : ''}</h2>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default NoticiaDestaque;