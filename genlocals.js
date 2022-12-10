const axios = require('axios').default;
const fs = require('fs');
const path = require('path');
const filesize = require('filesize').filesize;
const moment = require('moment');
const pug = require('pug');
const genIndex = pug.compileFile(path.join(__dirname, '/src/template.pug'));


(async() => {
    var feed = (await axios.get("https://cog-cdn.b-cdn.net/mercury.json", {
        params: {
            "_": Date.now()
        }
    })).data

    feed = feed.map(item => {
        item.PubDateFmt = moment(item.PubDate).format("dddd, MMMM Do YYYY, h:mm:ss a")

        item.Enclosure.LengthFmt = filesize(parseInt(item.Enclosure.Length))

        return item
    })

    latest = feed.shift()

    fs.writeFileSync(path.join(__dirname, '/src/index.html'), genIndex({ latest, feed }))

})()