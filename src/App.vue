<template>
  <div id="app">
    <vheader :seller="seller"></vheader>
  </div>
</template>

<script>
import vheader from './components/v-header/v-header.vue'
import { getSeller } from 'api/index'

export default {
  name: 'app',
  data() {
    return {
      seller: {}
    }
  },
  created() {
    this._getSeller()
  },
  methods: {
    _getSeller() {
      getSeller().then((seller) => {
      this.seller = seller
    })
    }
  },
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
