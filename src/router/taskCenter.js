export default [
    /*{
        path: "/",
        name: "taskcenter",
        component: () => import('@/views/taskcenter'),
    },*/

    {
        path:"/invite",
        name:"invite",
        component:()=>import('@/views/taskcenter/invite.vue')
    },
    {
        path:"/draw",
        name:"draw",
        component:()=>import('@/views/taskcenter/draw.vue')
    },
    {
        path:"/draw-history",
        name:"drawHistory",
        component:()=>import('@/views/taskcenter/draw-history.vue')
    },
    {
        path:"/draw-detail",
        name:"drawDetail",
        component:()=>import('@/views/taskcenter/draw-detail.vue')
    },
    {
        path:"/coin-history",
        name:"coinHistory",
        component:()=>import('@/views/taskcenter/coin-history.vue')
    },


]