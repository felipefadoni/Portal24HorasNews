import React from 'react'

import LazyLoad from 'react-lazyload'

import loading from './../../assets/image/carregando.webp'


const PingoColunistas = (props) => {

    const { pingonoi, colunistas } = {...props};

    const imgLoading = <img src={loading} width="100%" alt="Carregando 24 Horas News"/>;

    return(
        <div className="row">
            <div className="col-12 col-xl-4">
                <div className="home-pingo-no-i">
                    <a href={(pingonoi) ? 'pingo-no-i/' + pingonoi.id_pingo + '/' + pingonoi.url : '#'} title={(pingonoi) ? pingonoi.titulo : '...'}>
                        <LazyLoad height={189} placeholder={imgLoading}>
                            <img src={(pingonoi) ? pingonoi.imagem : loading} width="100%" alt={(pingonoi) ? pingonoi.titulo : '...'} />
                        </LazyLoad>
                        <h3>Pingo no i</h3>
                        <h2>{(pingonoi) ? pingonoi.titulo : '...'}</h2>
                    </a>
                </div>
            </div>

            <div className="col-12 col-xl-8">
                <div className="row">
                    <div className="col-12 col-xl-3 col-sm-6">
                        <div className="home-artigos">
                            <a href={(colunistas.length > 0) ? colunistas[0].url : '/pingo-no-i'} title={(colunistas.length > 0) ? colunistas[0].titulo : '...'}>
                                <LazyLoad height={199} placeholder={imgLoading}>
                                    <img src={(colunistas.length > 0) ? colunistas[0].imagem : loading} width="100%" alt={(colunistas.length > 0) ? colunistas[0].nome : '...'} />
                                </LazyLoad>
                                <h2>{(colunistas.length > 0) ? colunistas[0].titulo : '...'}</h2>
                                <p>{(colunistas.length > 0) ? colunistas[0].nome : '...'}</p>
                            </a>
                        </div>
                    </div>
                    <div className="col-12 col-xl-3 col-sm-6">
                        <div className="home-artigos">
                            <a href={(colunistas.length > 0) ? colunistas[1].url : '/pingo-no-i'} title={(colunistas.length > 0) ? colunistas[1].titulo : '...'}>
                                <LazyLoad height={199} placeholder={imgLoading}>
                                    <img src={(colunistas.length > 0) ? colunistas[1].imagem : loading} width="100%" alt={(colunistas.length > 0) ? colunistas[1].nome : '...'} />
                                </LazyLoad>
                                <h2>{(colunistas.length > 0) ? colunistas[1].titulo : '...'}</h2>
                                <p>{(colunistas.length > 0) ? colunistas[1].nome : '...'}</p>
                            </a>
                        </div>
                    </div>
                    <div className="col-12 col-xl-3 col-sm-6">
                        <div className="home-artigos">
                            <a href={(colunistas.length > 0) ? colunistas[2].url : '/pingo-no-i'} title={(colunistas.length > 0) ? colunistas[2].titulo : '...'}>
                                <LazyLoad height={199} placeholder={imgLoading}>
                                    <img src={(colunistas.length > 0) ? colunistas[2].imagem : loading} width="100%" alt={(colunistas.length > 0) ? colunistas[2].nome : '...'} />
                                </LazyLoad>
                                <h2>{(colunistas.length > 0) ? colunistas[2].titulo : '...'}</h2>
                                <p>{(colunistas.length > 0) ? colunistas[2].nome : '...'}</p>
                            </a>
                        </div>
                    </div>
                    <div className="col-12 col-xl-3 col-sm-6">
                        <div className="home-artigos">
                            <a href={(colunistas.length > 0) ? colunistas[3].url : '/pingo-no-i'} title={(colunistas.length > 0) ? colunistas[3].titulo : '...'}>
                                <LazyLoad height={199} placeholder={imgLoading}>
                                    <img src={(colunistas.length > 0) ? colunistas[3].imagem : loading} width="100%" alt={(colunistas.length > 0) ? colunistas[3].nome : '...'} />
                                </LazyLoad>
                                <h2>{(colunistas.length > 0) ? colunistas[3].titulo : '...'}</h2>
                                <p>{(colunistas.length > 0) ? colunistas[3].nome : '...'}</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>							
        </div>
    );
}

export default PingoColunistas;