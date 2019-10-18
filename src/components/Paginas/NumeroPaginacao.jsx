import React from 'react'

const NumeroPaginacao = (props) => {

    var urlPaginacaoMuda = '';
    var urlPaginaInicial = '';
    if(props.categoriaId === 1) {
        urlPaginacaoMuda = "/noticia?p=" + props.numeracao;
        urlPaginaInicial = "/noticia";
    }

    if(props.categoriaId === 2) {
        urlPaginacaoMuda = "/esporte?p=" + props.numeracao;
        urlPaginaInicial = "/esporte";
    }

    if(props.categoriaId === 3) {
        urlPaginacaoMuda = "/entretenimento?p=" + props.numeracao;
        urlPaginaInicial = "/entretenimento";
    }

    if(props.pagina !== props.numeracao)
        return(<a href={(props.numeracao > 1) ? urlPaginacaoMuda : urlPaginaInicial}>{props.numeracao}</a>);
    else
        return(<strong className="active">{props.numeracao}</strong>);
};

export default NumeroPaginacao;