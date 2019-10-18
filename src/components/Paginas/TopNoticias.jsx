import React, { PureComponent } from 'react'

class TopNoticias extends PureComponent {

    render() {

        const { topNoticias } = {...this.props};

        const listaTopNoticias = (topNoticias) ? topNoticias.map((noticia, index) => {

            var urlOpenNot = '';
            if(this.props.categoriaId === 1)
                urlOpenNot = '/noticia/' + noticia.id + '/' + noticia.url;
            if(this.props.categoriaId === 2)
                urlOpenNot = '/esporte/' + noticia.id + '/' + noticia.url;
            if(this.props.categoriaId === 3)
                urlOpenNot = '/entretenimento/' + noticia.id + '/' + noticia.url;

            return(<li key={index} title={noticia.titulo}><a href={urlOpenNot}><h2>{noticia.titulo}</h2></a></li>); 
        }) : '';

        return(
            <React.Fragment>
                <div className="row">
                    <div className={this.props.classCor + " col-12 header-mais-lidas"}>
                        <h2>Mais Lidas</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className={this.props.classCor + " lista-mais-lidas"}>
                            <ul>{listaTopNoticias}</ul>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}

export default TopNoticias;