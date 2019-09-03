<template>
    <div class="popNew">
        <red-bag :type="'result'" :money="money"></red-bag>
    </div>
</template>

<script>
    import redBag from '../../components/red-bag'
    export default {
        name: "popNew",
        components:{
            redBag
        },
        data(){
            return {
                money:this.$route.query.money
            }
        }
    }
</script>

<style scoped lang="less">

</style>