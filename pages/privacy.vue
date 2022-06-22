<template>
  <article>
    <nuxt-content :document="pp" />
  </article>
</template>

<script>
export default {
  name: "privacy",
  head: {
    title: "Privacy Policy",
  },
  async asyncData({$content}) {
    return {
      pp: await $content("pp").fetch()
    }
  }
}
</script>