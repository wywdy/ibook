<template>
    <div class="chatBox">
        <div class="chatTitle">在线图书销售平台--客服中心</div>
        <div class="msg" ref="box">
            <div v-for="item in list" :class="[item.type,'msg-item']">
                <p>
                    <span style="color: #52bae8">{{item.type}}:</span>{{item.content}}
                </p>
            </div>
        </div>
        <div class="input-group">
            <textarea ref="text" style="width: 595px;height: 60px;border: 0px" placeholder="请输入内容"></textarea>
            <el-button type="danger" size="mini" @click="sendText">发送</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CustService",
        data(){
            return {
                list: [],//聊天记录的数组
                contentText: "",//input输入的值
            }
        },
        methods: {
            //发送聊天信息
            sendText() {
                let that = this;
                that.contentText=that.$refs.text.value;
                this.list = [...this.list, {type: "mine", content: this.contentText}];//通过type字段进行区分是自己（mine）发的还是系统（robot）返回的
                this.backText(function () {
                    that.contentText = "";//加回调在得到返回数据的时候清除输入框的内容
                    that.$refs.text.value="";//清空textarea中上次输入的内容
                });
            },
            backText(callback) {
                let that = this;
                if (window.WebSocket) {
                    let ws = new WebSocket("ws://127.0.0.1:8000");
                    ws.onopen = function (e) {
                        console.log("链接服务器成功");
                        console.log("that.contentText is", that.contentText);
                        ws.send(that.contentText);
                        callback();
                    };
                    ws.onclose = function (e) {
                        console.log("服务器关闭")
                    };
                    ws.onerror = function () {
                        console.log("服务器出错")
                    };
                    ws.onmessage = function (e) {
                        that.list = [...that.list, {type: "callCenter", content: e.data}]
                    }
                }
            }
        },
        watch: {
            //监听list,当有修改的时候进行div的屏幕滚动，确保能看到最新的聊天
            list: function () {
                let that = this;
                setTimeout(() => {
                    that.$refs.box.scrollTop = that.$refs.box.scrollHeight;
                }, 0);
                //加setTimeout的原因：由于vue采用虚拟dom，每次生成新的消息时获取到的div的scrollHeight的值是生成新消息之前的值，所以造成每次都是最新的那条消息被隐藏掉了
            }
        },

    }
</script>

<style scoped lang="less">
    .chatBox {
        text-align: center;
        position: relative;
    }
    .chatTitle{
        height: 40px;
        line-height: 40px;
        width: 592px;
        background-color: #db2a41;
        margin-left: auto;
        margin-right: auto;
        text-align: left;
        padding-left: 10px;
        color: white;
        font-size: 16px;
    }
    .msg {
        border: 1px solid #d2cfd0;
        width: 600px;
        height: 500px;
        overflow: auto;
        padding-top: 5px;
        margin-left: auto;
        margin-right: auto;
        background-color: #f0f1f2;
        .msg-item {
            position: relative;
            overflow: hidden;
            p {
                display: inline-block;
                border-radius: 40px;
                background: white;
                color: black;
                float: left;
                padding: 2px 12px;
                margin: 0 0 2px 0;
                max-width: 70%;
                text-align: left;
                box-sizing: border-box;
            }
            &.mine {
                p {
                    float: right;
                    background: #ff4c31;
                    color: white;
                }
            }
        }
    }
    .input-group{
        background-color: white;
        width: 600px;
        height: 100px;
        margin-left: auto;
        margin-right: auto;
        border: 1px solid #d2cfd0;
        position: relative;
        &>textarea:focus{
            outline: none!important;
        }
        &>.el-button{
            position: absolute;
            right: 5px;
            bottom: 5px;
        }
    }
</style>