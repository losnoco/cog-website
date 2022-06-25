<template>
  <div>
    <h1>Download Cog</h1>
    <b-alert show variant="warning">The last version that works on Mac OS X Mountain Lion is version <a href="https://cogcdn.cog.losno.co/Cog-3b628c398.zip">1148-g3b628c398</a>.</b-alert>
    <b-alert show variant="warning">The last version that works on macOS Sierra is version <a href="https://cogcdn.cog.losno.co/Cog-ff44bc4d.zip">2405</a>.</b-alert>
        <a href="https://apps.apple.com/us/app/cog-kode54/id1630499622">
          <img style="height: 40px;vertical-align: sub;" src="/masdl.svg" alt="Download on the Mac App Store">
        </a>


    <section :id="`v.${item['sparkle:version']?item['sparkle:version']:item.enclosure['sparkle:version']}`" v-for="(item, index) in versions" :key="index" class="py-2">
      <h2>Version {{item["sparkle:version"]?item["sparkle:version"]:item.enclosure["sparkle:version"]}}</h2>
      <p class="pt-3">
        Published on {{ $moment(item.pubDate).format("LLLL") }}. <br/>
        <!-- Supports macOS version {{item["sparkle:minimumSystemVersion"]}} and newer. -->
      </p>
      <b-btn :href="item.enclosure.url" variant="success" :size="index===0?'lg':null">
        <b-icon-download class="mr-2" />Download <span v-if="index===0"> the latest version</span>
        <span class="text-white-50 pl-2">{{item.enclosure.length |prettyBytes}}</span>
      </b-btn>
      <div v-html="descriptions[index]" class="list-unstyled pt-3"></div>
    </section>

  </div>


</template>

<script>
import xml2js from 'xml2js'

const parser = new xml2js.Parser({
  explicitRoot: false,
  explicitArray: false,
  mergeAttrs: true
});

export default {
  head: {
    title: "Download Cog",
  },
  async asyncData(context) {
    let data = await context.$axios.$get("https://cogcdn.cog.losno.co/mercury.xml")
    let result = await parser.parseStringPromise(await data)

    let sorted = result.channel.item.sort((a, b) => {
      let dateA = new Date(a.pubDate), dateB = new Date(b.pubDate);
      return dateB - dateA;
    });

    var versions = sorted.slice(0, 15)
    var descriptions = {}

    for (const [i, v] of versions.entries()) {
      if ('description' in v) {
        descriptions[i] = v.description
      } else {
        var url = v["sparkle:releaseNotesLink"].replace("https://f.losno.co/cog/","https://cogcdn.cog.losno.co/")
        descriptions[i] = await context.$axios.$get(url)
      }
    }


    return {
      versions, descriptions
    }
  }


}
</script>

<style scoped>

</style>
