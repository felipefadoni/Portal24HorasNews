import React, { PureComponent } from 'react'
import axios from 'axios'

import LazyLoad from 'react-lazyload'

import loadingSvg from './../../assets/image/carregando.webp'

import NoticiaDestaque from './NoticiaDestaque'
import EntretenimentoDestaque from './EntretenimentoDestaque'
import EsporteDestaque from './EsporteDestaque'
import PingoColunistas from './PingoColunistas'

import variables from './../variables'

class Home extends PureComponent {

	constructor(props) {
		super(props);
		this.state = {
			capa: {
				destaques: [],
				colunistas: [],
				pingonoi: [],
			},
			noticiasMeio: [],
			esportesMeio: [],
			entretenimentoMeio: []
		};
	}

	componentDidMount() {
		this.loadCapa();
		this.getNoticiasMeio();
	}

	async loadCapa() {
		const capaGet = await axios.get('https://24horasnews.com.br/api/noticias/capaSite', { params: variables.tokenApi() });
		this.setState({ capa: capaGet.data });
	}

	async getNoticiasMeio() {
		const noticiasTotaisMeio = await axios.get("https://www.24horasnews.com.br/api/noticias/noticiasmeio", { params: variables.tokenApi() });
		this.setState({ noticiasMeio: noticiasTotaisMeio.data.noticias, esportesMeio: noticiasTotaisMeio.data.esportes, entretenimentoMeio: noticiasTotaisMeio.data.entretenimento });
	}

	render() {

		const imgLoading = <img src={loadingSvg} width="100%" alt="Carregando 24 Horas News"/>

		return(
	        <React.Fragment>
	            
				<div className="meio-site-total">
		            <div className="container">

						<div className="row">
							
							<NoticiaDestaque noticias={this.state.capa.destaques} />

							<EntretenimentoDestaque noticias={this.state.capa.destaques} />

							<EsporteDestaque noticias={this.state.capa.destaques} />

						</div>

		            </div>
				</div>

				<div className="banner-header mt-32">
					<div className="container">
						<div className="container-banner-header">
							<ins data-revive-zoneid="19" data-revive-target="_blank" data-revive-blockcampaign="1" data-revive-id="3cc3bd3e22640677cba16e4cb22664e9"></ins>
						</div>
					</div>
				</div>

				<div className="meio-site-total">
		            <div className="container">

						<div className="row mt-16">

							<div className="col-12 col-lg-4 col-xl-4">
								<div className="row">
									<div className="col-12">
										<div className="noticia-destaque-meio-img-total">
											<a title={this.state.noticiasMeio[0] ? this.state.noticiasMeio[0].titulo : ''} href={this.state.noticiasMeio[0] ? "/noticia/" + this.state.noticiasMeio[0].id + "/" + this.state.noticiasMeio[0].url : ''}>
												<LazyLoad height={189} placeholder={imgLoading}>
													<img src={this.state.noticiasMeio[0] ? this.state.noticiasMeio[0].imagem : loadingSvg} width="100%" alt={this.state.noticiasMeio[0] ? this.state.noticiasMeio[0].titulo : ''} />
												</LazyLoad>
												<h2>{this.state.noticiasMeio[0] ? this.state.noticiasMeio[0].titulo.toString().substring(0, 85) : ''}</h2>
											</a>
										</div>
									</div>
								</div>
								<div className="row mt-32">
									<div className="col-12">
										<div className="noticia-destaque-divisao-img">
											<a title={this.state.noticiasMeio[1] ? this.state.noticiasMeio[1].titulo.toString() : ''} href={this.state.noticiasMeio[1] ? "/noticia/" + this.state.noticiasMeio[1].id + "/" + this.state.noticiasMeio[1].url : ''} >
												<div className="row">
													<div className="col-12 col-xl-6">
														<LazyLoad height={87} placeholder={imgLoading}>
															<img src={this.state.noticiasMeio[1] ? this.state.noticiasMeio[1].imagem : loadingSvg} width="100%" alt={this.state.noticiasMeio[1] ? this.state.noticiasMeio[1].titulo : ''} />
														</LazyLoad>
													</div>
													<div className="col-12 col-xl-6">
														<h2>{this.state.noticiasMeio[1] ? this.state.noticiasMeio[1].titulo.toString().substring(0, 65) : ''}...</h2>
													</div>
												</div>
											</a>
										</div>
									</div>
								</div>
								<div className="row mt-32">
									<div className="col-12">
										<div className="noticia-destaque-divisao-img">
											<a title={this.state.noticiasMeio[2] ? this.state.noticiasMeio[2].titulo.toString() : ''} href={this.state.noticiasMeio[2] ? "/noticia/" + this.state.noticiasMeio[2].id + "/" + this.state.noticiasMeio[2].url : ''} >
												<div className="row">
													<div className="col-12 col-xl-6">
														<LazyLoad height={87} placeholder={imgLoading}>
															<img src={this.state.noticiasMeio[2] ? this.state.noticiasMeio[2].imagem : loadingSvg} width="100%" alt={this.state.noticiasMeio[2] ? this.state.noticiasMeio[2].titulo : ''} />
														</LazyLoad>
													</div>
													<div className="col-12 col-xl-6">
														<h2>{this.state.noticiasMeio[2] ? this.state.noticiasMeio[2].titulo.toString().substring(0, 65) : ''}...</h2>
													</div>
												</div>
											</a>
										</div>
									</div>
								</div>

								<div className="row mt-32">
									<div className="col-12">
										<div className="noticia-destaque-divisao-img">
											<a title={this.state.noticiasMeio[3] ? this.state.noticiasMeio[3].titulo.toString() : ''} href={this.state.noticiasMeio[3] ? "/noticia/" + this.state.noticiasMeio[3].id + "/" + this.state.noticiasMeio[3].url : ''} >
												<h2>{this.state.noticiasMeio[3] ? this.state.noticiasMeio[3].titulo.toString().substring(0, 75) : ''}...</h2>
											</a>
										</div>
									</div>
								</div>

								<div className="row mt-32">
									<div className="col-12">
										<div className="noticia-destaque-divisao-img">
											<a title={this.state.noticiasMeio[4] ? this.state.noticiasMeio[4].titulo.toString() : ''} href={this.state.noticiasMeio[4] ? "/noticia/" + this.state.noticiasMeio[4].id + "/" + this.state.noticiasMeio[4].url : ''} >
												<h2>{this.state.noticiasMeio[4] ? this.state.noticiasMeio[4].titulo.toString().substring(0, 75) : ''}...</h2>
											</a>
										</div>
									</div>
								</div>

								<div className="row mt-32">
									<div className="col-12">
										<div className="noticia-destaque-divisao-img">
											<a title={this.state.noticiasMeio[5] ? this.state.noticiasMeio[5].titulo.toString() : ''} href={this.state.noticiasMeio[5] ? "/noticia/" + this.state.noticiasMeio[5].id + "/" + this.state.noticiasMeio[5].url : ''} >
												<h2>{this.state.noticiasMeio[5] ? this.state.noticiasMeio[5].titulo.toString().substring(0, 75) : ''}...</h2>
											</a>
										</div>
									</div>
								</div>
							</div>

							<div className="col-12 col-lg-4 col-xl-4">
								<div className="row">
									<div className="col-12">
										<div className="entretenimento-destaque-meio-img-total">
											<a title={this.state.entretenimentoMeio[0] ? this.state.entretenimentoMeio[0].titulo.toString() : ''} href={this.state.entretenimentoMeio[0] ? "/entretenimento/" + this.state.entretenimentoMeio[0].id + "/" + this.state.entretenimentoMeio[0].url : ''}>
												<LazyLoad height={189} placeholder={imgLoading}>
													<img src={this.state.entretenimentoMeio[0] ? this.state.entretenimentoMeio[0].imagem : loadingSvg} width="100%" alt={this.state.entretenimentoMeio[0] ? this.state.entretenimentoMeio[0].titulo : ''} />
												</LazyLoad>
												<h2>{this.state.entretenimentoMeio[0] ? this.state.entretenimentoMeio[0].titulo.toString().substring(0, 85) : ''}</h2>
											</a>
										</div>
									</div>
								</div>
								<div className="row mt-32">
									<div className="col-12">
										<div className="entretenimento-destaque-divisao-img">
											<a title={this.state.entretenimentoMeio[1] ? this.state.entretenimentoMeio[1].titulo.toString() : ''} href={this.state.entretenimentoMeio[1] ? "/entretenimento/" + this.state.entretenimentoMeio[1].id + "/" + this.state.entretenimentoMeio[1].url : ''} >
												<div className="row">
													<div className="col-12 col-xl-6">
														<LazyLoad height={87} placeholder={imgLoading}>
															<img src={this.state.entretenimentoMeio[1] ? this.state.entretenimentoMeio[1].imagem : loadingSvg} width="100%" alt={this.state.entretenimentoMeio[1] ? this.state.entretenimentoMeio[1].titulo : ''} />
														</LazyLoad>
													</div>
													<div className="col-12 col-xl-6">
														<h2>{this.state.entretenimentoMeio[1] ? this.state.entretenimentoMeio[1].titulo.toString().substring(0, 65) : ''}...</h2>
													</div>
												</div>
											</a>
										</div>
									</div>
								</div>
								<div className="row mt-32">
									<div className="col-12">
										<div className="entretenimento-destaque-divisao-img">
											<a title={this.state.entretenimentoMeio[2] ? this.state.entretenimentoMeio[2].titulo.toString() : ''} href={this.state.entretenimentoMeio[2] ? "/entretenimento/" + this.state.entretenimentoMeio[2].id + "/" + this.state.entretenimentoMeio[2].url : ''} >
												<div className="row">
													<div className="col-12 col-xl-6">
														<LazyLoad height={87} placeholder={imgLoading}>
															<img src={this.state.entretenimentoMeio[2] ? this.state.entretenimentoMeio[2].imagem : loadingSvg} width="100%" alt={this.state.entretenimentoMeio[2] ? this.state.entretenimentoMeio[2].titulo : ''} />
														</LazyLoad>
													</div>
													<div className="col-12 col-xl-6">
														<h2>{this.state.entretenimentoMeio[2] ? this.state.entretenimentoMeio[2].titulo.toString().substring(0, 65) : ''}...</h2>
													</div>
												</div>
											</a>
										</div>
									</div>
								</div>

								<div className="row mt-32">
									<div className="col-12">
										<div className="entretenimento-destaque-divisao-img">
											<a title={this.state.entretenimentoMeio[3] ? this.state.entretenimentoMeio[3].titulo.toString() : ''} href={this.state.entretenimentoMeio[3] ? "/entretenimento/" + this.state.entretenimentoMeio[3].id + "/" + this.state.entretenimentoMeio[3].url : ''} >
												<h2>{this.state.entretenimentoMeio[3] ? this.state.entretenimentoMeio[3].titulo.toString().substring(0, 75) : ''}...</h2>
											</a>
										</div>
									</div>
								</div>

								<div className="row mt-32">
									<div className="col-12">
										<div className="entretenimento-destaque-divisao-img">
											<a title={this.state.entretenimentoMeio[4] ? this.state.entretenimentoMeio[4].titulo.toString() : ''} href={this.state.entretenimentoMeio[4] ? "/entretenimento/" + this.state.entretenimentoMeio[4].id + "/" + this.state.entretenimentoMeio[4].url : ''} >
												<h2>{this.state.entretenimentoMeio[4] ? this.state.entretenimentoMeio[4].titulo.toString().substring(0, 75) : ''}...</h2>
											</a>
										</div>
									</div>
								</div>

								<div className="row mt-32">
									<div className="col-12">
										<div className="entretenimento-destaque-divisao-img">
											<a title={this.state.entretenimentoMeio[5] ? this.state.entretenimentoMeio[5].titulo.toString() : ''} href={this.state.entretenimentoMeio[5] ? "/entretenimento/" + this.state.entretenimentoMeio[5].id + "/" + this.state.entretenimentoMeio[5].url : ''} >
												<h2>{this.state.entretenimentoMeio[5] ? this.state.entretenimentoMeio[5].titulo.toString().substring(0, 75) : ''}...</h2>
											</a>
										</div>
									</div>
								</div>
							</div>

							<div className="col-12 col-lg-4 col-xl-4">
								<div className="row">
									<div className="col-12">
										<div className="esporte-destaque-meio-img-total">
											<a title={this.state.esportesMeio[0] ? this.state.esportesMeio[0].titulo.toString() : ''} href={this.state.esportesMeio[0] ? "/esporte/" + this.state.esportesMeio[0].id + "/" + this.state.esportesMeio[0].url : ''}>
												<LazyLoad height={189} placeholder={imgLoading}>
													<img src={this.state.esportesMeio[0] ? this.state.esportesMeio[0].imagem : loadingSvg} width="100%" alt={this.state.esportesMeio[0] ? this.state.esportesMeio[0].titulo : ''} />
												</LazyLoad>
												<h2>{this.state.esportesMeio[0] ? this.state.esportesMeio[0].titulo.toString().substring(0, 85) : ''}</h2>
											</a>
										</div>
									</div>
								</div>
								<div className="row mt-32">
									<div className="col-12">
										<div className="esporte-destaque-divisao-img">
											<a title={this.state.esportesMeio[1] ? this.state.esportesMeio[1].titulo.toString() : ''} href={this.state.esportesMeio[1] ? "/esporte/" + this.state.esportesMeio[1].id + "/" + this.state.esportesMeio[1].url : ''} >
												<div className="row">
													<div className="col-12 col-xl-6">
														<LazyLoad height={87} placeholder={imgLoading}>
															<img src={this.state.esportesMeio[1] ? this.state.esportesMeio[1].imagem : loadingSvg} width="100%" alt={this.state.esportesMeio[1] ? this.state.esportesMeio[1].titulo : ''} />
														</LazyLoad>
													</div>
													<div className="col-12 col-xl-6">
														<h2>{this.state.esportesMeio[1] ? this.state.esportesMeio[1].titulo.toString().substring(0, 65) : ''}...</h2>
													</div>
												</div>
											</a>
										</div>
									</div>
								</div>
								<div className="row mt-32">
									<div className="col-12">
										<div className="esporte-destaque-divisao-img">
											<a title={this.state.esportesMeio[2] ? this.state.esportesMeio[2].titulo.toString() : ''} href={this.state.esportesMeio[2] ? "/esporte/" + this.state.esportesMeio[2].id + "/" + this.state.esportesMeio[2].url : ''} >
												<div className="row">
													<div className="col-12 col-xl-6">
														<LazyLoad height={87} placeholder={imgLoading}>
															<img src={this.state.esportesMeio[2] ? this.state.esportesMeio[2].imagem : loadingSvg} width="100%" alt={this.state.esportesMeio[2] ? this.state.esportesMeio[2].titulo : ''} />
														</LazyLoad>
													</div>
													<div className="col-12 col-xl-6">
														<h2>{this.state.esportesMeio[2] ? this.state.esportesMeio[2].titulo.toString().substring(0, 65) : ''}...</h2>
													</div>
												</div>
											</a>
										</div>
									</div>
								</div>

								<div className="row mt-32">
									<div className="col-12">
										<div className="esporte-destaque-divisao-img">
											<a title={this.state.esportesMeio[3] ? this.state.esportesMeio[3].titulo.toString() : ''} href={this.state.esportesMeio[3] ? "/esporte/" + this.state.esportesMeio[3].id + "/" + this.state.esportesMeio[3].url : ''} >
												<h2>{this.state.esportesMeio[3] ? this.state.esportesMeio[3].titulo.toString().substring(0, 75) : ''}...</h2>
											</a>
										</div>
									</div>
								</div>

								<div className="row mt-32">
									<div className="col-12">
										<div className="esporte-destaque-divisao-img">
											<a title={this.state.esportesMeio[4] ? this.state.esportesMeio[4].titulo.toString() : ''} href={this.state.esportesMeio[4] ? "/esporte/" + this.state.esportesMeio[4].id + "/" + this.state.esportesMeio[4].url : ''} >
												<h2>{this.state.esportesMeio[4] ? this.state.esportesMeio[4].titulo.toString().substring(0, 75) : ''}...</h2>
											</a>
										</div>
									</div>
								</div>

								<div className="row mt-32">
									<div className="col-12">
										<div className="esporte-destaque-divisao-img">
											<a title={this.state.esportesMeio[5] ? this.state.esportesMeio[5].titulo.toString() : ''} href={this.state.esportesMeio[5] ? "/esporte/" + this.state.esportesMeio[5].id + "/" + this.state.esportesMeio[5].url : ''} >
												<h2>{this.state.esportesMeio[5] ? this.state.esportesMeio[5].titulo.toString().substring(0, 75) + '...' : ''}</h2>
											</a>
										</div>
									</div>
								</div>
							</div>

						</div>

					</div>
				</div>

				<div className="banner-header mt-32">
					<div className="container">
						<div className="container-banner-header">
							<ins data-revive-zoneid="5" data-revive-target="_blank" data-revive-id="8d2354d34d644e023082470dba3b2a96"></ins>
						</div>
					</div>
				</div>

				<div className="meio-site-total mt-32 mb-32">
					<div className="container">
						<PingoColunistas pingonoi={this.state.capa.pingonoi} colunistas={this.state.capa.colunistas} />
					</div>
				</div>

	        </React.Fragment>
	    );
	}

}

export default Home;
