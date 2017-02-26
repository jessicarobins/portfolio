<template>
  <div class="chip">
    <i v-bind:class="['colored', className()]" v-if="className()"></i>
    {{this.tag}}
  </div>
</template>

<script>
import TechTagService from '../services/TechTagService'

export default {
  name: 'tag',
  props: ['tag'],
  methods: {
    className: function() {
      return TechTagService.getClassName(this.tag)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.chip {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
}
</style>
