<template>
  <md-chip>
    <i v-bind:class="['colored', className()]" v-if="className()"></i>
    <span class="truncate">{{this.tag}}</span>
  </md-chip>
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
.md-chip {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  line-height: 30px;
  margin: 5px 5px 0 0;
}
</style>
