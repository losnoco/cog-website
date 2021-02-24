<template>
<article>
  <b-row>
    <b-col>
      <h1>{{page.title}}</h1>
      <nuxt-content :document="page" />
    </b-col>
    <b-col>
      <aside>
        <h1>Screenshots</h1>
        <b-form-checkbox id="light-mode-chooser"
                         v-model="imageMode"
                         unchecked-value="light"
                         value="dark"
                         switch>{{imageMode.charAt(0).toUpperCase() + imageMode.slice(1)}} mode</b-form-checkbox>
        <image-with-modal title="Cog full window" imgKey="cog" :mode.sync="imageMode"/>
        <image-with-modal title="Cog mini window" imgKey="mini" :mode.sync="imageMode"/>
        <image-with-modal title="Cog mini window with volume control" imgKey="mini-vol" :mode.sync="imageMode"/>
      </aside>
    </b-col>
  </b-row>


</article>
</template>

<script>
import ImageWithModal from "~/pages/ImageWithModal";

export default {
  name: "features",
  components: {ImageWithModal},
  head: {
    title: "Cog features",
  },
  data() {
    return {
      imageMode: "light"
    }
  },
  async asyncData({$content}) {
    return {
      page: await $content("features").fetch()
    }
  }
}
</script>

