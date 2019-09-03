<template>
    <div class="pop">
            <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "index",
    }
</script>

<style scoped lang="less">
.pop{
    height: 100vh;
    background: rgba(0,0,0,0.8);
}
</style>