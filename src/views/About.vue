<template>
  <div>
  </div>
</template>

<script>
  export default {
    name: "caseSix",
    data (){
      return {
        user: {},
        token: ''//token,可以放VUEX，本地存储等
      }
    },
    methods:{
      userLogin (){
        let that = this;
        this.$axios.post('/api/fore/user/login',
                this.qs.stringify({
                  usernameOrTel: 'lisi',
                  password: '123'
                })
        )
                .then((res)=>{
                  console.log(res)
                  console.log(res.headers)
                  // 获取token，并存储

                  sessionStorage.setItem('token',res.headers['authenticate'])
                })
                .catch((res)=>{
                  console.log(res)
                })

      },
      getUser(){
        this.$axios.get('/api/fore/user'
                // ,
                // {
                //     headers: {
                //         //后端自验证token的有效期，失效时，就不能正常调用 接口。
                //         // 'authenticate': this.token
                //         'authenticate': sessionStorage.getItem('token')
                //     }
                // }
        )
                .then((res)=>{
                  console.log(res)
                  if(res.data.code === 200){
                    alert(res.data.msg);
                  }
                })
                .catch((res)=>{
                  console.log(res)
                })
      },
      openCustSeivice(){
         window.open('/custservice')
      }
    }
  }
</script>

<style scoped>

</style>