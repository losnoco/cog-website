<template>
  <div>
    <b-dropdown-item href="https://liberapay.com/kode54" target="_blank">LiberaPay</b-dropdown-item>
    <b-dropdown-divider/>
    <b-dropdown-item disabled>One time</b-dropdown-item>
    <b-dropdown-item href="https://paypal.me/kode54" target="_blank">PayPal</b-dropdown-item>
    <b-dropdown-item v-b-modal.bitcoin>Bitcoin and other cryptocurrencies</b-dropdown-item>
    <b-modal id="bitcoin" title="Donate in cryptocurrencies" ok-only centered>
      <b-tabs>
        <b-tab title="Bitcoin" active>
          <a href="bitcoin:1FCbKqceYndit439orNrXmfQMc1ttFLJWL">
            <qrcode value="bitcoin:1FCbKqceYndit439orNrXmfQMc1ttFLJWL"
                    :options="{
                  width: 300
                }"/>
          </a>
          <p>Address: <code>1FCbKqceYndit439orNrXmfQMc1ttFLJWL</code></p>
        </b-tab>
        <b-tab title="Bitcoin Cash">
          <a href="bitcoincash:qz9atghxshwl2ntausstx5upf4c0jc6uyssphjgynt">
            <qrcode value="bitcoincash:qz9atghxshwl2ntausstx5upf4c0jc6uyssphjgynt"
                    :options="{
                  width: 300
                }"/>
          </a>
          <p>Address: <code>qz9atghxshwl2ntausstx5upf4c0jc6uyssphjgynt</code></p>
        </b-tab>
        <b-tab title="Ethereum">
          <a href="ethereum:0xD4A68cc3A3c1194fFa217DEb1616C48272af1AeC">
            <qrcode value="ethereum:0xD4A68cc3A3c1194fFa217DEb1616C48272af1AeC"
                    :options="{
                  width: 300
                }"/>
          </a>
          <p>Address: <code>0xD4A68cc3A3c1194fFa217DEb1616C48272af1AeC</code></p>
        </b-tab>
      </b-tabs>
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
