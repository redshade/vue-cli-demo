<template>
  <div>
    <h1 style="color: red">
      <slot :userInfo="user" :phoneNum="phone">Default1</slot>
    </h1>
    <h2 style="color: orange">
      <slot name="t2">Default2</slot>
    </h2>
    <h3 style="color: skyblue">
      <slot name="t3">Default3</slot>
    </h3>
  </div>
</template>

<script>
export default {
  name: 'MyTitle',
  data() {
    return {
      user: {
        name: 'tom',
        age: 12
      },
      phone: 123123123
    }
  }
}
</script>

<style>

</style>
