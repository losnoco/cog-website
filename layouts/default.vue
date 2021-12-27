<template>
  <div class="d-flex flex-column" style="height: 100vh !important;">
    <transition name="navbar-anim">
      <b-navbar toggleable="md" type="light" variant="light"  fixed="top" v-if="$route.name !== 'index'">
        <b-navbar-brand to="/" class="text-primary font-weight-bold">
          <img src="/favicon-32x32.png" class="d-inline-block align-top" alt="Cog logo">
          Cog
        </b-navbar-brand>

        <b-navbar-toggle target="nav-col"></b-navbar-toggle>
        <b-collapse id="nav-col" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/features" active-class="active"><b-icon-info-circle-fill class="mr-2" />Features</b-nav-item>
            <b-nav-item to="/download" active-class="active"><b-icon-download class="mr-2" />Download</b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="https://github.com/losnoco/cog"><b-icon-github class="mr-2" />GitHub</b-nav-item>
            <b-nav-item-dropdown
              id="repos.menu"
              toggle-class="repos"
              right
              >
              <b-dropdown-item href="https://gitlab.com/kode54/cog">GitLab</b-dropdown-item>
              <b-dropdown-item href="https://bitbucket.org/losnoco/cog">BitBucket</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown
              id="donate.menu"
              toggle-class="donate"
              right
            >
              <template slot="button-content">
                <b-icon-heart class="mr-2" /> Donate
              </template>
              <donation-links/>
            </b-nav-item-dropdown>

          </b-navbar-nav>

        </b-collapse>
      </b-navbar>
    </transition>

    <main role="main" class="flex-shrink-0">
      <b-container class="py-5 mt-5">
        <Nuxt/>
      </b-container>
    </main>
    <footer class="footer mt-auto py-3 bg-light">
      <b-container>
        <b-row>
          <b-col cols="12" md="8">
            <span class="text-muted">&copy; 2021 <a href="https://kode54.net">Christopher Snowhill</a>. <a href="https://cogx.org/">Originally developed</a> by <a
              href="http://vspader.com/">Vincent Spader</a>.</span>
          </b-col>
          <b-col class="text-right" cols="12" md="4">
            Design by <a href="https://kddlb.com">Kevin López</a>.
            <a href="https://losno.co"><img src="https://losno.co/lsc2021.svg" alt="LoSnoCo" style="height: 16pt;"></a>
          </b-col>
        </b-row>
      </b-container>
    </footer>
  </div>
</template>

<style lang="scss">
@import "cogstyle";
</style>

<script>
import DonationLinks from "~/components/DonationLinks";

export default {
  components: {DonationLinks}
}
</script>
