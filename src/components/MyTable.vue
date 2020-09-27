<template>
  <div>
    <ul class="table">
      <li v-for="(item, key) in data" :key="item.id">
        <span>
          <slot />
          {{ item.id }}
        </span>
        ----
        <span>
          {{ item.name }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MyTable',
  props: {
    data: {
      type: Array,
      default: function() {
        return [
          {
            id: '暂无',
            name: '暂无'
          }
        ]
      }
    }
  },
  data() {
    return {
      defaultData: {
        name: 'defaultData',
        value: '我是默认数据'
      }
    }
  }
}
</script>

<style>

</style>
