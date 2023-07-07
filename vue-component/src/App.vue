<template>
  <div id="app">
    <MyDialog title="弹框标题" ref="MyDialogRef" />
  </div>
</template>

<script>
import MyDialog from './components/MyDialog.vue'

export default {
  name: 'App',
  components: {
    MyDialog,
  },
  mounted() {
    this.$refs.MyDialogRef.show()
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
