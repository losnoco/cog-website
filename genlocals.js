const axios = require('axios').default;
const fs = require('fs');
const path = require('path');
const filesize = require('filesize').filesize;
const moment = require('moment');
const pug = require('pug');
const genIndex = pug.compileFile(path.join(__dirname, '/src/template.pug'));


(async() => {
    var feed = (await axios.get("https://storage.bunnycdn.com/cog-ecdn/mercury.json", {
        params: {
            "AccessKey": process.env.BUNNY_RO_ACCESS_KEY
        }
    })).data

    feed = feed.map(item => {
        item.PubDateFmt = moment(item.PubDate).format("dddd, MMMM Do YYYY, h:mm:ss a")

        item.Enclosure.LengthFmt = filesize(parseInt(item.Enclosure.Length))

        return item
    })

    var latest = feed.shift()

    var year = moment().format('YYYY')

    fs.writeFileSync(path.join(__dirname, '/src/index.html'), genIndex({ latest, feed, year }))

})()
