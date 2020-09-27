<template>
  <div>
    <h1>demo2</h1>
    <MyTable
      :data="tableData"
    >
      <template>
        <span>这是插槽</span>
      </template>
    </MyTable>
  </div>
</template>

<script>
import MyTable from '@/components/MyTable'

export default {
  name: 'Demo2',
  components: {
    MyTable
  },
  data() {
    return {
      tableData: [
        {
          id: 1,
          name: 'title1'
        },
        {
          id: 2,
          name: 'title2'
        },
        {
          id: 3,
          name: 'title3'
        }
      ]
    }
  }
}
</script>

<style>

</style>
