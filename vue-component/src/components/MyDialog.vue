<template>
  <a-modal v-model="visible" :title="title" @ok="handleOk">
    <div class="dialog-content">
      <img src="/myLib/logo.png" alt="" width="100px" height="100px" />
      <slot />
    </div>
  </a-modal>
</template>

<script>
export default {
  name: 'MyDialog',
  props: {
    title: String,
  },
  data() {
    return { visible: false }
  },
  methods: {
    show() {
      this.visible = true
    },
    handleOk() {
      this.visible = false
      this.$emit('ok')
    },
  },
}
</script>

<style scoped></style>
