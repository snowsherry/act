<template>
    <div class="popNew">
        <red-bag :type="'result'" :money="money" :closeEvent="closeSelf"></red-bag>
    </div>
</template>

<script>
    import redBag from '../../components/red-bag'
    import {popCloseSelf} from "../../dsbridge";
    export default {
        name: "popNew",
        components:{
            redBag
        },
        data(){
            return {
                money:this.$route.query.money
            }
        },
        methods:{
            closeSelf(){
                console.log('close self')
                popCloseSelf();
            }
        }
    }
</script>

<style scoped lang="less">

</style>