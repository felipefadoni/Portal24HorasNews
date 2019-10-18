import React from 'react'

import LazyLoad from 'react-lazyload'

import semImagem from './../../assets/image/sem-imagem.svg'
import loading from './../../assets/image/carregando.webp'

const ImagemMostrar = (props) => {

    const imgLoading = <img src={loading} width="100%" alt="Carregando 24 Horas News"/>;

    var urlOpenNoticia = '';
    if(props.categoriaId === 1)
    urlOpenNoticia = "/noticia/" + props.id + "/" + props.url;
    
    if(props.categoriaId === 2)
    urlOpenNoticia = "/esporte/" + props.id + "/" + props.url;
    
    if(props.categoriaId === 3)
    urlOpenNoticia = "/entretenimento/" + props.id + "/" + props.url;

    return(
        <div className="col-12 col-lg-4">
            <a href={urlOpenNoticia} title={props.titulo}>
                <figure>
                    <LazyLoad height={166} placeholder={imgLoading}>
                        <img width="100%" src={(props.imagem) ? props.imagem : semImagem} alt={props.titulo} />
                    </LazyLoad>
                </figure>
            </a>
        </div>
    );
};

const RowNoticia = (props) => {

    var urlOpenNoticia = '';
    var classRows = '';
    if(props.categoriaId === 1) {
        urlOpenNoticia = "/noticia/" + props.id + "/" + props.url;
        classRows = 'row row-noticia cor-noticia';
    }
    
    if(props.categoriaId === 2) {
        urlOpenNoticia = "/esporte/" + props.id + "/" + props.url;
        classRows = 'row row-noticia cor-esporte';
    }
    
    if(props.categoriaId === 3) {
        urlOpenNoticia = "/entretenimento/" + props.id + "/" + props.url;
        classRows = 'row row-noticia cor-entretenimento';
    }

    return(
        <div className={classRows}>
        
            { props.imagem ? <ImagemMostrar {...props} categoriaId={props.categoriaId} /> : '' }

            <div className={props.imagem ? "col-12 col-lg-8" : "col-12" }>
                <a href={urlOpenNoticia} title={props.titulo}>
                    <h2>{props.titulo}</h2>
                    <h3>{props.subtitulo}</h3>
                    <p>{props.texto + "..."}</p>
                </a>
            </div>
        </div>
    );
};

export default RowNoticia;