import Vue from "vue";
import VueRouter from 'vue-router';
import VuePageTransition from 'vue-page-transition';
import InicioTicket from '../components/InicioTicket';
import ResultadosTicket from '../components/ResultadosTicket'

const routes = [
    {
        path: '/',
        component: InicioTicket
    },
    {
        path: '/resultados',
        name: 'resultados',
        component: ResultadosTicket
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
    
});

Vue.use(VueRouter);
Vue.use(VuePageTransition);

export default router;
