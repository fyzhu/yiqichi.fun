<template>
  <div id="app">
    <vheader></vheader>
  </div>
</template>

<script>
import vheader from './components/v-header/v-header.vue'

export default {
  name: 'app',
  components: {
    vheader
  }
}
</script>
<style lang="stylus">
#app {
  .tab-wrapper {
    position: fixed;
    top: 136px;
    left: 0;
    right: 0;
    bottom: 0;
  }
}
</style>
