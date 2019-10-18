import React, { PureComponent } from 'react'

import axios from 'axios'

import variables from './../../variables'

import loadingSvg from './../../../assets/image/carregando.webp'

import RowNoticia from './../RowNoticia';
import TopNoticias from './../TopNoticias';
import NumeroPaginacao from './../NumeroPaginacao';

class Noticia extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            listaNoticias: [],
            classCor: "visualizar-noticia-azul",
            categoriaId: 1,
            pagina: 1,
            totalPagina: 0,
            limite: 26,
            totalNoticias: 0,
            loading: true,
            topNoticias: []
        }

        this.mudaPaginacao = this.mudaPaginacao.bind(this);
    }
    
    componentDidMount() {
        document.title = "Notícia | 24 Horas News";
        this.getPaginaUrl();
        this.getTopNoticias();
    }

    async getNoticias() {
        const noticias = await axios.get('https://24horasnews.com.br/api/noticias/listar/'+this.state.categoriaId+'/'+this.state.pagina+'/'+this.state.limite, { params: variables.tokenApi() });
        this.setState({ listaNoticias: noticias.data.noticias, totalNoticias: noticias.data.totalNoticias, totalPagina: noticias.data.totalPaginas, loading: false });
    }

    async getTopNoticias() {
        const dadosNoticiaGet = await axios.get("https://www.24horasnews.com.br/api/noticias/topNoticias/" + this.state.categoriaId, { params: variables.tokenApi() });
        this.setState({ topNoticias: dadosNoticiaGet.data });
    }

    mudaPaginacao( paginaSet ) {
        this.setState({ pagina: paginaSet, loading: true });
        setTimeout(() => {
            this.getNoticias();
            this.getTopNoticias();
        }, 300);        
    }

    getPaginaUrl() {
        
        var query = this.props.location.search.slice(1);
        var partes = query.split('&');
        var data = {};
        
        partes.forEach(function (parte) {
            var chaveValor = parte.split('=');
            var chave = chaveValor[0];
            var valor = chaveValor[1];
            data[chave] = valor;
        });
        
        let paginaSet = (parseInt(data.p, 10)) ? parseInt(data.p, 10) : 1;

        this.setState({ pagina: paginaSet });

        setTimeout(() => {
            this.getNoticias();
        }, 300);        

    }

    render() {

        var paginas = [];
        var steps = 3;
        var initialLimite = this.state.pagina + steps;
        for(var pa = this.state.pagina - steps; pa <= initialLimite; pa++) {
            if(pa < 1) {
                pa = 1;
            }

            if(pa < this.state.totalPagina) {
                paginas.push(<NumeroPaginacao key={pa} {...this.state} numeracao={pa} mudaPaginacao={this.mudaPaginacao} />);
            }
            
        }

        const paginacaoRender = this.state.totalPagina ? <div className="row">
                                                            <div className="col-12">
                                                                <div className={this.state.classCor + " paginacao"}>
                                                                    {paginas}
                                                                </div>
                                                            </div>
                                                        </div> : '';

        const listarNoticias = this.state.listaNoticias.map((noticia, index) => { return <RowNoticia key={index} {...noticia} categoriaId={this.state.categoriaId} /> });

        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 noticia-header cor-noticia">
                        <h1>Notícia</h1>
                        <h2>Notícia de Cuiabá, Mato Grosso, do Brasil e do Mundo você encontra aqui no 24 Horas News.</h2>
                    </div>
                </div>

                <div className="row row-container">
                    <div className="col-12 col-lg-8">

                        {(this.state.loading) ? <img src={loadingSvg} alt="Loading" width="100%" /> : listarNoticias}

                        {paginacaoRender}

                    </div>
                    <div className="col-12 col-lg-4">
                        
                        <div className="row mb-4">
                            <div className="col-12">
                                banner aqui
                            </div>
                        </div>

                        <TopNoticias classCor={this.state.classCor} topNoticias={this.state.topNoticias} categoriaId={this.state.categoriaId} />

                    </div>
                </div>
            </div>
        );

    }

}

export default Noticia;