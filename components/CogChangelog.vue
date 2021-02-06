<template>
  <div v-if="$fetchState.pending">Loading...</div>
  <div v-else-if="$fetchState.error">There was an error while loading the changelog.</div>
  <ul v-else class="list-unstyled pt-3" v-html="realDescription"/>
</template>
<script>
export default {
  name: 'cog-changelog',
  props: {
    description: {},
    url: {}
  },
  data() {
    return {
      realDescription: ""
    }
  },
  async fetch() {
    if (typeof this.description === 'undefined') {
      const ft = await this.$axios.get(this.url.replace(/f\.losno/g,"balde.losno"))
      this.realDescription = ft.data
    } else {
      this.realDescription = this.description
    }
  }
}
</script>
