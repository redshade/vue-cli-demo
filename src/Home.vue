<template>
  <div>
    <MyTitle>
      <template v-slot:default="{ phoneNum, userInfo }" />
      <template v-slot:t2>
        <i>I'm title2</i>
      </template>
      <template v-slot:t3>
        <i>I'm title3</i>
      </template>
    </MyTitle>
    <Button @click="handleClick()">demo1</Button>
  </div>
</template>

<script>
import MyTitle from '@/components/MyTitle'

export default {
  name: 'Home',
  components: {
    MyTitle
  },
  data() {
    return {
      params: this.$route.params,
      data: {
        name: '123',
        age: '12'
      }
    }
  },
  mounted() {
    if (this.params.allData !== undefined) {
      this.data = this.params.allData
      console.log('home', this.data)
    }
  },
  methods: {
    handleClick() {
      const data = {
        allData: this.data
      }
      this.$router.push({ name: 'demo1', params: data })
    }
  }
}
</script>>
