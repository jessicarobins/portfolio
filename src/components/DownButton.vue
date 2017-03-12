<template>
  <div class="down-button-container">
    <div class="down-button animated pulse infinite" @click="scroll">
      <div class="text" v-if="text">{{text}}</div>
      <i class="medium material-icons">keyboard_arrow_down</i>
    </div>
  </div>
</template>

<script>

export default {
  name: 'down',
  props: ['anchor', 'text'],
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
    text-align: center;
    padding-top: 20px;
  }
  
  .down-button {
    cursor: pointer;
  }
  
  .text {
    text-transform: uppercase;
    font-size: 20px;
  }
</style>
