import Home from './components/Home/index'
import ComoAnunciar from './components/Paginas/ComoAnunciar'
import FaleConosco from './components/Paginas/FaleConosco'
import Expediente from './components/Paginas/Expediente'

import Noticia from './components/Paginas/Noticia'
import Esporte from './components/Paginas/Esporte'
import Entretenimento from './components/Paginas/Entretenimento'

import PingoNoI from './components/Paginas/PingoNoI'
import VisualizarPingoNoI from './components/Paginas/PingoNoI/Visualizar'

import Videos from './components/Paginas/Videos'
import VisualizarNoticia from './components/Paginas/VisualizarNoticia'

const routes = [
  { path: "/", exact: true, component: Home },
  { path: "/como-anunciar", exact: true, component: ComoAnunciar },
  { path: "/fale-conosco", exact: true, component: FaleConosco },
  { path: "/expediente", exact: true, component: Expediente },
  
  { path: "/noticia", exact: true, component: Noticia },
  { path: "/noticia/:id/:slug", exact: true, component: VisualizarNoticia },

  { path: "/esporte", exact: true, component: Esporte },
  { path: "/esporte/:id/:slug", exact: true, component: VisualizarNoticia },

  { path: "/entretenimento", exact: true, component: Entretenimento },
  { path: "/entretenimento/:id/:slug", exact: true, component: VisualizarNoticia },

  { path: "/pingo-no-i", exact: true, component: PingoNoI },
  { path: "/pingo-no-i/:id/:slug", exact: true, component: VisualizarPingoNoI },

  { path: "/videos", exact: true, component: Videos },
];

export default routes;