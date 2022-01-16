<template>
  <div v-if="$fetchState.pending">Loading...</div>
  <div v-else-if="$fetchState.error">There was an error while loading the changelog.</div>
  <ul v-else class="list-unstyled pt-3" v-html="realDescription"/>
</template>
<script>
export default {
  name: 'cog-changelog',
  props: ['item'],
  data() {
    return {
      realDescription: ""
    }
  },
  async fetch() {
    if (typeof this.item.description === 'undefined') {
      const url = this.item['sparkle:releaseNotesLink']
      console.log(url)
      const ft = await this.$axios.get(url)
      this.realDescription = ft.data
    } else {
      this.realDescription = this.item.description
    }
  },
  fetchOnServer: true,
  fetchDelay: 1500,
  fetchKey() {
    return this.url
  }
}
</script>
