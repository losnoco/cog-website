<template>
<article>
  <h1>{{page.title}}</h1>
  <nuxt-content :document="page" />
</article>
</template>

<script>
export default {
  name: "features",
  head: {
    title: "Cog features",
  },
  async asyncData({$content}) {
    return {
      page: await $content("features").fetch()
    }
  }
}
</script>

<style scoped>

</style>
