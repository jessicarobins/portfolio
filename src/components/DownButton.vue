<template>
  <div class="down-button">
    <i class="medium material-icons animated pulse">keyboard_arrow_down</i>
  </div>
</template>

<script>

export default {
  name: 'down',
  props: ['anchor'],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .down-button {
    position: absolute;
    bottom: 10px;
    width: 100%;
    text-align: center;
  }
</style>
