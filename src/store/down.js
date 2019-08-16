export  const SET_ACCOUNT='set_account';
export  const ADD_ACCOUNT='add_account';
export  default {
    namespaced:true,
    state:{
        account:0,
    },
    getters:{
        getAccount:(state)=>state.account,
    },
    mutations:{
        [ADD_ACCOUNT]:(state,num=1)=>{
            state.account=state.account+num;
        },
          [SET_ACCOUNT]:(state,num)=>{
              state.account=num;
          }
    },
    actions:{
        initAccountAsync(context){
            setTimeout(()=>{
                let num=5;
                context.commit(SET_ACCOUNT,num);
            },300)
        }
    }
}