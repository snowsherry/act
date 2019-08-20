<template>
    <div class="coin-history">
        <div class="coin-list">
            <coin-item v-for="i in 5"></coin-item>
        </div>
    </div>
</template>

<script>
    import coinItem from '../../components/coin-history-item'
    export default {
        name: "coin-history",
        components:{
            coinItem
        }
    }
</script>

<style scoped lang="less">
.coin-history{
    min-height: 100vh; padding-bottom:80px ; box-sizing: border-box;
    .coin-list{
        width: 100%;
        padding: 0 15px;
        box-sizing: border-box;
    }
}
</style>