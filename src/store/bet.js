export  const SET_NAV='set_nav';//设置导航 main rank minie
export  const GET_CHANCE='get_chance';
export  const SET_CHANCE='set_chance';
export  const ADD_CHANCE='add_chance';
export  default {
    namespaced:true,
    state:{
        nav:'main',
        chance:0,
    },
    getters:{
        getNav:(state)=>state.nav,
        getChance:(state)=>state.chance
    },
    mutations:{
        [SET_NAV]:(state,nav)=>{
            state.nav=nav;
        },
        [SET_CHANCE]:(state,chance)=>{
            state.chance=chance;
        },
        [ADD_CHANCE]:(state,extra)=>{
            state.chance+=extra;
        },
    },
    actions:{

    }
}