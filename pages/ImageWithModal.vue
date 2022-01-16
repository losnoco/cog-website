<template>
  <div class="pb-3">
    <a href="" @click.prevent="$bvModal.show(imgKey)">
      <b-img :src="source" fluid thumbnail/>
    </a>
    <b-modal :id="imgKey" size="xl" :title="title">
      <template slot="modal-footer">
        <b-form-checkbox id="light-mode-chooser"
                         v-model="mode"
                         unchecked-value="light"
                         value="dark"
                         switch>{{mode.charAt(0).toUpperCase() + mode.slice(1)}} mode</b-form-checkbox>
      </template>
      <b-img :src="source" fluid thumbnail/>
    </b-modal>
  </div>
</template>
<script>
export default {
  name: 'image-with-modal',
  props: ['imgKey', 'mode', 'title'],
  computed: {
    source() {
      return `https://cogcdn.cog.losno.co/screenshots/${this.imgKey}@${this.mode}.png`
    }
  }
}
</script>
