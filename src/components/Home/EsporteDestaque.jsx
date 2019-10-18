import React, { PureComponent } from 'react'

import LazyLoad from 'react-lazyload'

import iconBolinhaVerde from './../../assets/image/icon-bolinha-verde.svg'

import loading from './../../assets/image/carregando.webp'

class EsporteDestaque extends PureComponent {

    render() {

        const { noticias } = { ...this.props };

        const imgLoading = <img src={loading} width="100%" alt="Carregando 24 Horas News"/>;
        
        return(           

            <div className="col-12 col-lg-6 col-xl-3">
                <div className="row mt-32">
                    <div className="col-12">
                        <div className="esporte-destaque-imagem">
                            <a href={noticias.esporte_01_url} title={noticias.esporte_01_titulo}>
                                <LazyLoad height={137} placeholder={imgLoading}>
                                    <img src={(noticias.esporte_01_imagem) ? noticias.esporte_01_imagem : loading} width="100%" alt={noticias.esporte_01_titulo} />
                                </LazyLoad>
                                <h2>{noticias.esporte_01_titulo}</h2>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="row mt-32">
                    <div className="col-12">
                        <div className="esporte-destaque-bolinha">
                            <a href={noticias.esporte_02_url} title={noticias.esporte_02_titulo}>
                                <i><img src={iconBolinhaVerde} alt="" /></i>
                                <h2>{noticias.esporte_02_titulo}</h2>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="row mt-32">
                    <div className="col-12">
                        <div className="esporte-destaque-bolinha">
                            <a href={noticias.esporte_03_url} title={noticias.esporte_03_titulo}>
                                <i><img src={iconBolinhaVerde} alt="" /></i>
                                <h2>{noticias.esporte_03_titulo}</h2>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="row mt-32">
                    <div className="col-12">
                        <div className="esporte-destaque-bolinha">
                            <a href={noticias.esporte_04_url} title={noticias.esporte_04_titulo}>
                                <i><img src={iconBolinhaVerde} alt="" /></i>
                                <h2>{noticias.esporte_04_titulo}</h2>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="row mt-32">
                    <div className="col-12">
                        <div className="esporte-destaque-bolinha">
                            <a href={noticias.esporte_05_url} title={noticias.esporte_05_titulo}>
                                <i><img src={iconBolinhaVerde} alt="" /></i>
                                <h2>{noticias.esporte_05_titulo}</h2>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="row mt-32">
                    <div className="col-12">
                        <div className="esporte-destaque-bolinha">
                            <a href={noticias.esporte_06_url} title={noticias.esporte_06_titulo}>
                                <i><img src={iconBolinhaVerde} alt="" /></i>
                                <h2>{noticias.esporte_06_titulo}</h2>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="row mt-32">
                    <div className="col-12">
                        <div className="esporte-destaque-bolinha">
                            <a href={noticias.esporte_07_url} title={noticias.esporte_07_titulo}>
                                <i><img src={iconBolinhaVerde} alt="" /></i>
                                <h2>{noticias.esporte_07_titulo}</h2>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }

}

export default EsporteDestaque;