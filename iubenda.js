const fs = require('fs');
const axios = require('axios').default;
const TurndownService = require('turndown');
const turndownPluginGfm = require('turndown-plugin-gfm');


(async() => {
    const iubenda = await axios.get('https://www.iubenda.com/api/privacy-policy/59859310/no-markup');
    var gfm = turndownPluginGfm.gfm
    var turndownService = new TurndownService()
    turndownService.use(gfm)
    var markdown = turndownService.remove(["script"]).turndown(iubenda.data.content)
    fs.writeFileSync('content/pp.md', markdown)


})();