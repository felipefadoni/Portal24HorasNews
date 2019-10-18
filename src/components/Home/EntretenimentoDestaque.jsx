import React, { PureComponent } from 'react'

import LazyLoad from 'react-lazyload'

import iconBolinha from './../../assets/image/icon-bolinha.svg'

import loading from './../../assets/image/carregando.webp'

class EntretenimentoDestaque extends PureComponent {


    render() {

        const { noticias } = { ...this.props };

        const imgLoading = <img src={loading} width="100%" alt="Carregando 24 Horas News"/>;
        
        return(            
                <div className="col-12 col-lg-6 col-xl-3">
                    <div className="row mt-32">
                        <div className="col-12">
                            <div className="entretenimento-destaque-imagem">
                                <a href={noticias.entretenimento_01_url} title={noticias.entretenimento_01_titulo}>
                                    <LazyLoad height={137} placeholder={imgLoading}>
                                        <img src={(noticias.entretenimento_01_imagem) ? noticias.entretenimento_01_imagem : loading} width="100%" alt={noticias.entretenimento_01_titulo} />
                                    </LazyLoad>
                                    <h2>{noticias.entretenimento_01_titulo}</h2>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-32">
                        <div className="col-12">
                            <div className="entretenimento-destaque-bolinha">
                                <a href={noticias.entretenimento_02_url} title={noticias.entretenimento_02_titulo}>
                                    <i><img src={iconBolinha} alt="" /></i>
                                    <h2>{noticias.entretenimento_02_titulo}</h2>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-32">
                        <div className="col-12">
                            <div className="entretenimento-destaque-bolinha">
                                <a href={noticias.entretenimento_03_url} title={noticias.entretenimento_03_titulo}>
                                    <i><img src={iconBolinha} alt="" /></i>
                                    <h2>{noticias.entretenimento_03_titulo}</h2>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-32">
                        <div className="col-12">
                            <div className="entretenimento-destaque-bolinha">
                                <a href={noticias.entretenimento_04_url} title={noticias.entretenimento_04_titulo}>
                                    <i><img src={iconBolinha} alt="" /></i>
                                    <h2>{noticias.entretenimento_04_titulo}</h2>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-32">
                        <div className="col-12">
                            <div className="entretenimento-destaque-bolinha">
                                <a href={noticias.entretenimento_05_url} title={noticias.entretenimento_05_titulo}>
                                    <i><img src={iconBolinha} alt="" /></i>
                                    <h2>{noticias.entretenimento_05_titulo}</h2>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-32">
                        <div className="col-12">
                            <div className="entretenimento-destaque-bolinha">
                                <a href={noticias.entretenimento_06_url} title={noticias.entretenimento_06_titulo}>
                                    <i><img src={iconBolinha} alt="" /></i>
                                    <h2>{noticias.entretenimento_06_titulo}</h2>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-32">
                        <div className="col-12">
                            <div className="entretenimento-destaque-bolinha">
                                <a href={noticias.entretenimento_07_url} title={noticias.entretenimento_07_titulo}>
                                    <i><img src={iconBolinha} alt="" /></i>
                                    <h2>{noticias.entretenimento_07_titulo}</h2>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
        );
    }

}

export default EntretenimentoDestaque;