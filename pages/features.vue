<template>
<div>
  <h1>Features</h1>
  <ul>
    <li>Gapless playback</li>
    <li>Automatic updates</li>
    <li>Last.fm support</li>
    <li>Global hotkeys</li>
    <li>Desktop notifications</li>
    <li>Shuffle, both albums and tracks</li>
    <li>Repeat single track, album or whole playlist</li>
    <li>Playback from HTTP(S) sources, both livestreams and hosted files</li>
  </ul>
  <h2>
    Supported formats
  </h2>
  <ul>
    <li>MP3</li>
    <li>WAV</li>
    <li>AAC</li>
    <ul>
      <li>LC-AAC</li>
      <li>HE-AAC</li>
      <li>HE-AACv2</li>
      <li>xHE-AAC (USAC)</li>
    </ul>
    <li>Apple Lossless (ALAC)</li>
    <li>FLAC</li>
    <li>Ogg Opus</li>
    <li>Ogg Vorbis</li>
    <li>AC3</li>
    <li>Windows Media Audio</li>
    <li>DTS</li>
    <li>TTA True Audio</li>
    <li>TwinVQ</li>
    <li>RealAudio</li>
    <li>ATRAC3</li>
    <li>Musepack</li>
    <li>WavPack</li>
    <li>MIDI</li>
      <ul>
        <li>SoundFont support via <a href="http://www.un4seen.com/bass.html">BASSMIDI</a>.</li>
        <li>FM synthesis via <a href="https://nukeykt.retrohost.net/">Nuked OPL3</a>, </li>
        <li>Audio Unit synthesizer support, including Apple's DLSMusicDevice and <a href="https://www.roland.com/us/products/rc_sound_canvas_va/">Roland Sound Canvas VA</a>.</li>
      </ul>
    <li>Syntrax</li>
    <li>Shorten</li>
    <li>Tracker music via <a href="https://lib.openmpt.org/libopenmpt/">libopenmpt</a> (<a href="https://openmpt.org/features#modules">supported formats</a>).</li>
    <li>SID</li>
    <li>Game music</li>
      <ul>
        <li>GBS</li>
        <li>NSF</li>
        <li>SPC</li>
        <li>VGM</li>
        <li>VGZ</li>
        <li>PSF</li>
        <li>SSF</li>
        <li>DSF</li>
        <li>QSF</li>
        <li>USF</li>
        <li>NCSF</li>
        <li>2SF</li>
        <li>Streamed music via <a href="https://vgmstream.org">vgmstream</a></li>
      </ul>
    <li>Archive files</li>
    <ul>
      <li>ZIP</li>
      <li>RAR</li>
      <li>GZip</li>
      <li>7Z</li>
    </ul>
  </ul>
</div>
</template>

<script>
export default {
  name: "features",
  head: {
    title: "Cog features",
  },
}
</script>

<style scoped>

</style>
