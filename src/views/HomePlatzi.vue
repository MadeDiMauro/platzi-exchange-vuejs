/* eslint-disable vue/multi-word-component-names */

<template>
  <div>
    <px-assets-table :assets="assets"></px-assets-table>
  </div>
</template>

<script>
import api from '@/api'
import PxAssetsTable from '@/components/PxAssetsTable'

export default {
  name: 'HomePlatzi',
  components: {
    PxAssetsTable,
  },
  data() {
    return {
      assets: [],
    }
  },

  created() {
    api.getAssets().then((assets) => (this.assets = assets))
  },
}
</script>
