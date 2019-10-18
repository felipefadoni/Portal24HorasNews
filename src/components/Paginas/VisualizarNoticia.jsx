import React, { PureComponent } from 'react'
import renderHTML from 'react-render-html'
import axios from 'axios'
import MetaTags from 'react-meta-tags'

import variables from './../variables'

import TopNoticias from './TopNoticias'

class VisualizarNoticia extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            visualizarNoticia: [],
            categoriaId: null,
            categoriaSection: '',
            classCor: "",
            dadosNoticia: [],
            topNoticias: [],
            outrasNoticias: [],
            loading: true
        }

    }

    componentDidMount() {
        this.getNoticia();
        if(this.props.match.path === "/noticia/:id/:slug"){
            this.setState({ classCor: "visualizar-noticia-azul", categoriaId: 1, categoriaSection: 'Notícia' });
        }

        if(this.props.match.path === "/esporte/:id/:slug"){
            this.setState({ classCor: "visualizar-noticia-verde", categoriaId: 2, categoriaSection: 'Esporte' });
        }

        if(this.props.match.path === "/entretenimento/:id/:slug"){
            this.setState({ classCor: "visualizar-noticia-roxo", categoriaId: 3, categoriaSection: 'Entretenimento' });
        }

        setTimeout(() => {
            this.getTopNoticias();
            this.getOutrasNoticias();
        }, 300);
    }

    async getNoticia() {
        const dadosNoticiaGet = await axios.get("https://www.24horasnews.com.br/api/noticias/getnoticia/"+this.props.match.params.id+"/"+this.props.match.params.slug, { params: variables.tokenApi() });
        var idCategoriaNoticiaVer = parseInt(dadosNoticiaGet.data.id_categoria, 10);

        if(idCategoriaNoticiaVer === this.state.categoriaId) {
            this.setState({ dadosNoticia: dadosNoticiaGet.data, loading: false });
        } else {

            var urlRedirect = '';
            if(idCategoriaNoticiaVer === 1)
                urlRedirect = '/noticia/' + this.props.match.params.id + '/' + this.props.match.params.slug;
            
            if(idCategoriaNoticiaVer === 2)
                urlRedirect = '/esporte/' + this.props.match.params.id + '/' + this.props.match.params.slug;

            if(idCategoriaNoticiaVer === 3)
                urlRedirect = '/entretenimento/' + this.props.match.params.id + '/' + this.props.match.params.slug;

            window.location.href = urlRedirect;
        }
    }

    async getTopNoticias() {
        const dadosNoticiaGet = await axios.get("https://www.24horasnews.com.br/api/noticias/topNoticias/" + this.state.categoriaId, { params: variables.tokenApi() });
        this.setState({ topNoticias: dadosNoticiaGet.data });
    }
    
    async getOutrasNoticias() {
        const dadosNoticiaGet = await axios.get("https://www.24horasnews.com.br/api/noticias/outrasNoticias/" + this.state.categoriaId + "/" + this.props.match.params.id, { params: variables.tokenApi() });
        this.setState({ outrasNoticias: dadosNoticiaGet.data });
    }
    
    
    render() {

        const { dadosNoticia } = this.state;

        const descricaoImagem = (dadosNoticia.descricao_imagem) ? <span>{dadosNoticia.descricao_imagem}</span> : '';
        const imagemNoticia = (dadosNoticia.imagem) ? <figure>
                                <img src={dadosNoticia.imagem} alt={dadosNoticia.titulo} width="100%" />
                                {descricaoImagem}
                            </figure> : '';

        const textoNoticia = dadosNoticia.texto;

        const fonteNoticia = (dadosNoticia.fonte_url) ? <div className="row">
                                <div className={this.state.classCor + " col-12 visualizar-fontes"}>
                                    <h4>Fonte: <a href={dadosNoticia.fonte_url} target="_blank" rel="noopener noreferrer">{(dadosNoticia.fonte) ? dadosNoticia.fonte : dadosNoticia.jornalista}</a></h4>
                                </div>
                            </div> : '';

        const outrasNoticias = (this.state.outrasNoticias.length > 0) ? this.state.outrasNoticias.map((noticia, index) => {

            var urlNoticia = '';
            var imagem = '';

            if(this.state.categoriaId === 1)
                urlNoticia = '/noticia/' + noticia.id + '/' + noticia.url;
            if(this.state.categoriaId === 2)
                urlNoticia = '/esporte/' + noticia.id + '/' + noticia.url;
            if(this.state.categoriaId === 3)
                urlNoticia = '/entretenimento/' + noticia.id + '/' + noticia.url;

            if(noticia.imagem) {
                imagem = <div className="col-12 col-lg-3">
                            <figure>
                                <img width="100%" src={noticia.imagem} alt={noticia.titulo} />
                            </figure>
                        </div>;
            }

            return(
                <div className="row" key={noticia.id}>
                    {imagem}
                    <div className={noticia.imagem ? "col-12 col-lg-8" : "col-12"}>
                        <a href={urlNoticia} title={noticia.titulo}>
                            <h2>{noticia.titulo}</h2>
                            <h3>{(noticia.subtitulo) ? noticia.subtitulo : noticia.texto}</h3>
                        </a>
                    </div>
                </div>
            );
        }) : '';

        if(this.state.loading)
        return(<div>caregando</div>) 
        else
        return( 
            <div className="container">
                <div className="row margin-visualizar-noticia">
                    <div className="col-12 col-lg-8">  
                        <div className="row">
                            <div className="col-12 header-visualizar-noticia">
                                <h4>{dadosNoticia.chapeu}</h4>
                                <h1 className={this.state.classCor}>{dadosNoticia.titulo}</h1>
                                <h2>{dadosNoticia.subtitulo}</h2>
                                <time dateTime={dadosNoticia.agendamento}>{dadosNoticia.jornalista} | {dadosNoticia.dataFormatada}</time>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12 header-visualizar-body">
                                {imagemNoticia}
                                {(textoNoticia) ? renderHTML(textoNoticia) : ''}
                            </div>
                        </div>

                        {fonteNoticia}
                        
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="row">
                            <div className="col-12">
                                banner
                            </div>
                        </div>
                        
                        <TopNoticias classCor={this.state.classCor} topNoticias={this.state.topNoticias} categoriaId={this.state.categoriaId} />

                    </div>
                </div>
                <div className="row margin-visualizar-noticia">
                    <div className="col-12 col-lg-8">
                        banner meio total
                    </div>
                    <div className="col-12 col-lg-4">
                        banner direita
                    </div>
                </div>

                <div className="row margin-visualizar-noticia">
                    <div className="col-12 col-lg-10 mx-auto">
                        <div className={this.state.classCor + " lista-outras-noticias"}>{outrasNoticias}</div>
                    </div>
                </div>
          
                <MetaTags>
                    <title>{dadosNoticia.titulo}</title>
                    <meta name="description" content={dadosNoticia.subtitulo} />
                    <meta property="og:site_name" content="24 Horas News" />
                    <meta property="og:title" content={dadosNoticia.titulo} />
                    <meta property="og:image" content={dadosNoticia.imagem} />
                    <meta property="og:description" content={dadosNoticia.subtitulo} />
                    <meta property="og:type" content="article" />
                    <meta property="og:article:author" content="24 Horas News" />
                    <meta property="og:article:section" content={this.state.categoriaSection} />
                    <meta property="og:article:tag" content={dadosNoticia.titulo.toString().toLowerCase().replace(/ /g, ', ')} />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:site" content="@24horasnews_" />
                    <meta name="twitter:title" content={dadosNoticia.titulo} />
                    <meta name="twitter:description" content={dadosNoticia.subtitulo} />
                    <meta name="twitter:image" content={dadosNoticia.imagem} />
                    <link rel="canonical" href={variables.urlBase + this.props.location.pathname} />
                </MetaTags>
                
            </div>
        );
    }

}

export default VisualizarNoticia;