<template>
  <div>
    <div class="box">
      <button @click="handleClick">back</button>
      <h1>Demo1</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Demo1',
  data() {
    return {
      params: this.$route.params
    }
  },
  mounted() {
    console.log(this.params.allData)
  },
  methods: {
    handleClick() {
      console.log('demo1', this.params)
      this.$router.push({ name: 'home', params: this.params })
    }
  }
}
</script>>
<style lang="less" scoped>
    .box {
        width: 200px;
        height: 300px;
        background-color: orange;
        h1 {
            font-size: 20px;
        }
    }
</style>
