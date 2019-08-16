<template>
    <div>
        Down Page
        <input type="button" @click="addAccount(1)" value="Add" style="background: #c00;"/>
        <p>当前数量为:{{this.account}}</p>
    </div>

</template>

<script>
    import  {mapGetters,mapState,mapMutations,mapActions} from 'vuex'
    import  {ADD_ACCOUNT,SET_ACCOUNT} from '../store/down'
    export default {
        name: "down",
        methods:{
            ...mapMutations('down',{
                addAccount:ADD_ACCOUNT,
            }),
            ...mapActions('down',{
                initAccount:'initAccountAsync'
            })
        },
        computed:{
          ...mapGetters('down',{
              account:'getAccount'
          })
        },
        beforeMount() {
            this.initAccount();
        }
    }
</script>

<style scoped>

</style>