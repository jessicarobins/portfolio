<template>
  <div class="down-button-container">
    <div class="down-button" @click="scroll">
      <i class="medium material-icons animated pulse infinite">keyboard_arrow_down</i>
    </div>
  </div>
</template>

<script>

export default {
  name: 'down',
  props: ['anchor'],
  methods: {
    scroll: function() {
      const scrollElement = document.querySelector(this.anchor)
      this.$SmoothScroll(scrollElement)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .down-button-container {
    position: relative;
    bottom: 5px;
    width: 100%;
    text-align: center;
  }
  
  .down-button {
    cursor: pointer;
  }
</style>
