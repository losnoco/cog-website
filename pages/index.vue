<template>
  <div>
    <b-jumbotron class="text-center border">
      <template slot="header">
         <span class="text-primary font-weight-bold"><img style="height: 70px;vertical-align: sub;" src="/android-chrome-192x192.png" alt="Cog icon"> Cog</span>
      </template>
      <template slot="lead">
        A free and open source audio player for macOS.
      </template>
      Supports these formats:
      <ul class="list-inline">
        <li class="list-inline-item">MP3</li>
        <li class="list-inline-item">WAV</li>
        <li class="list-inline-item">AAC (LC, HE, HEv2, xHE)</li>
        <li class="list-inline-item">Apple Lossless (ALAC)</li>
        <li class="list-inline-item">FLAC</li>
        <li class="list-inline-item">Ogg Opus</li>
        <li class="list-inline-item">Ogg Vorbis</li>
        <li class="list-inline-item">AC3</li>
        <li class="list-inline-item"><nuxt-link to="/features">and more...</nuxt-link></li>
      </ul>
      <b-btn-group>
        <b-btn to="/features" variant="info"><b-icon-info-circle-fill class="mr-2" />Features</b-btn>
        <b-btn to="/download" variant="success"><b-icon-download class="mr-2" />Download</b-btn>
      </b-btn-group>
      <b-btn-group>
        <b-dropdown right split split-href="https://github.com/losnoco/cog" variant="warning">
          <template slot="button-content">
            <b-icon-github class="mr-2" />GitHub repository
          </template>
          <b-dropdown-item href="https://gitlab.com/kode54/cog">GitLab</b-dropdown-item>
          <b-dropdown-item href="https://bitbucket.org/losnoco/cog">BitBucket</b-dropdown-item></b-dropdown>
      </b-btn-group>
      <b-btn-group>
        <b-dropdown variant="success" right>
          <template slot="button-content">
            <b-icon-heart class="mr-2" /> Donate
          </template>
          <donation-links/>
        </b-dropdown>
      </b-btn-group>
      <b-btn-group>
        <b-btn href="https://www.iubenda.com/privacy-policy/59859310" variant="info"><b-icon-shield-check class="mr-2" />Privacy Policy</b-btn>
      </b-btn-group>
    </b-jumbotron>
  </div>
</template>

<script>
export default {}
</script>

<style>
.list-inline-item {
  border: 1px solid #949499 !important;
  margin-top: 0.5rem;
  padding: 3px;
  /*border-radius: 5px;*/
}
</style>

