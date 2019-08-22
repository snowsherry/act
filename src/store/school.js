export const SET_JOIN_INFO='set_join_info';
export const INIT_JOIN_INFO='init_join_info';
export  default {
    namespaced:true,
    state:{
        joinInfo:{
            joined:false,
            school:{
                name:"",
                code:"",
            }
        }
    },
    getters:{
        getJoinInfo:state=>state.joinInfo
    },
    mutations:{
        [SET_JOIN_INFO]:(state,joinInfo)=>{
            console.log('change joinInfo',joinInfo)
            state.joinInfo=joinInfo;
        }
    },
    actions:{
        [INIT_JOIN_INFO]:(context)=>{
            Promise.resolve('666').then(res=>{
                let info={
                   joined: true,
                   school:{
                       name:'UNIT',
                       code:666
                   }
                }
                console.log(333)
                context.commit(SET_JOIN_INFO,info)
            })
        }
    }

}