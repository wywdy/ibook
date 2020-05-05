<template>
    <canvas :id="canvasId" :width="width" :height="height"></canvas>
</template>

<script>
    export default {
        name: "circleCanvas",
        data(){
            return {
                canvas: '',
                ctx: '',
                totalValue: ''
            }
        },
        props: {
            canvasId: {
                type: String,
                default: ''
            },
            width: {
                type: [String, Number],
                default: ''
            },
            height: {
                type: [String, Number],
                default: ''
            },
            type: {
                type: String,
                default: 'ring' // 圆环ring 柱状图bar 折线图 line 饼状pie
            },
            data: { // 存放图表数据
                type: Array,
                default: []
            },
            options: {
                type: Object,
                required: false
            }
        },
        mounted () {
            this.sChart(this.canvasId, this.type, this.data, this.options)
        }
    }
</script>

<style scoped>

</style>