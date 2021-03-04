<template>
  <div>
    <b-dropdown-item href="https://liberapay.com/kode54" target="_blank">LiberaPay</b-dropdown-item>
    <b-dropdown-divider/>
    <b-dropdown-item disabled>One time</b-dropdown-item>
    <b-dropdown-item href="https://paypal.me/kode54" target="_blank">PayPal</b-dropdown-item>
    <b-dropdown-item v-b-modal.bitcoin><del>Bitcoin and other cryptocurrencies</del></b-dropdown-item>
    <b-modal id="bitcoin" title="Donate in cryptocurrencies" ok-only centered>
      <p>We no longer accept cryptocurrencies.</p>
    </b-modal>
    <b-dropdown-divider/>
    <b-dropdown-item disabled>Recurring</b-dropdown-item>
    <b-dropdown-item href="https://patreon.com/kode54" target="_blank">Patreon</b-dropdown-item>
    <b-dropdown-item href="https://ko-fi.com/kode54" target="_blank">Ko-fi</b-dropdown-item>
  </div>
</template>
<script>
export default {
  name: 'DonationLinks'
}
</script>
