export  const SET_NAV='set_nav';//设置导航 main rank minie
export  default {
    namespaced:true,
    state:{
        nav:'main',
    },
    getters:{
        getNav:(state)=>state.nav,
    },
    mutations:{
        [SET_NAV]:(state,nav)=>{
            state.nav=nav;
        },
    },
    actions:{

    }
}