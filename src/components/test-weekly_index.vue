<template>
  <div id="app1">
    <h1>网站列表</h1>
    <div v-for="(site,url) in info">
      {{ url }}:{{site}}
    </div>
  </div>
</template>

<script type = "text/javascript">
  export default {
  name: 'app1',
  data () {
    
      return {
          info: this.info
      }
  },
  mounted () {
      this.getData()
  },
  methods: {
      getData () {
          this.$axios.get('/api/menu')
          .then(response => ( this.info = response.data.menu))
          , response => { console.log('error')
          }
      }
  }
}
//     el: '#app1',
//     data () {
//       return {
//         info: null
//       }
//     },
//     mounted () {
//       axios
//         .get('https://www.runoob.com/try/ajax/json_demo.json')
//         .then(response => (this.info = response.data.sites))
//         .catch(function (error) { // 请求失败处理
//           console.log(error);
//         });
//     }
// }

</script>