import Vue from 'vue'
import prettyBytes from "pretty-bytes";

Vue.filter('prettyBytes', (val) => {
  let vx
  if (typeof val === 'string') {
    vx = parseFloat(val)
  } else{
    vx = val
  }
  return prettyBytes(vx)
})
