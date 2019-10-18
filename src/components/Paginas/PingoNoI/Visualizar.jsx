import React, { PureComponent } from 'react'
import renderHTML from 'react-render-html'
import axios from 'axios'

import variables from './../../variables'

class Visualizar extends PureComponent {

    constructor(props) {
        super(props)
    
        this.state = {
            visualizarPingo: null,
            outrosPingos: null,
            loading: true
        }
    }
    

    componentDidMount() {
        this.getPingoVisualizar();
    }

    async getPingoVisualizar() {
        const visualizarPingoGet = await axios.get('https://24horasnews.com.br/api/pingo/visualizar/' + this.props.match.params.id + '/' + this.props.match.params.slug, { params: variables.tokenApi() });
        this.setState({ visualizarPingo: visualizarPingoGet.data.pingo, outrosPingos: visualizarPingoGet.data.outros, loading: false });
    }

    render() {

        const { visualizarPingo } = this.state;

        const imagemNoticia = (visualizarPingo && visualizarPingo.imagem) ? <figure>
                                <img src={visualizarPingo.imagem} alt={visualizarPingo.titulo} width="100%" />
                            </figure> : '';
        if(this.state.loading)
        return(<div>Carregando!</div>);
        else
        return(
            <div className="container">
                <div className="row margin-visualizar-noticia">
                    <div className="col-12 col-lg-8">  
                        <div className="row">
                            <div className="col-12 header-visualizar-noticia">
                                <h1 className="cor-pingo-no-i">{visualizarPingo ? visualizarPingo.titulo : ''}</h1>
                                <time dateTime={visualizarPingo ? visualizarPingo.data_cadastrada : ''}>{visualizarPingo ? visualizarPingo.autor : ''} | {visualizarPingo ? visualizarPingo.data_cadastrada : ''}</time>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12 header-visualizar-body">
                                {imagemNoticia}
                                {visualizarPingo ? renderHTML(visualizarPingo.texto) : ''}
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-lg-4">
                        <div className="row">
                            <div className="col-12">
                                banner
                            </div>
                        </div>
                        
                        <div className="lista-outros-pingos">
                            <ul>
                                {
                                    this.state.outrosPingos ? this.state.outrosPingos.map((pingo, index) => {
                                        return(
                                        <li key={index}>
                                            <a href={"/pingo-no-i/" + pingo.id_pingo + "/" + pingo.url} title={pingo.titulo}>{pingo.titulo}</a>
                                        </li>
                                        );
                                    }) : ''
                                }

                            </ul>
                        </div>

                    </div>
                    
                </div>
            </div>
        );
    }

}

export default Visualizar