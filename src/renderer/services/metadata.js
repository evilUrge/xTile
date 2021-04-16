module.exports = {
  duckIt: (query) => {
    require('duckduckgo-images-api').image_search({query: query, moderate: true})
      .then(async results => {
        const url = results[0].image
        const filename = query.split(' ').join('_').toLowerCase()
        const Path = require('path')
        const path = Path
          .join(__dirname, '..', '..', '..',
            'static', `${filename}.${url.split('/')[url.split('/').length - 1].split('.')[1]}`)
        const writer = require('fs').createWriteStream(path)

        const response = await require('axios')({
          url,
          method: 'GET',
          responseType: 'stream'
        })
        response.data.pipe(writer)
        // eslint-disable-next-line no-new
        new Promise((resolve, reject) => {
          writer.on('finish', resolve)
          writer.on('error', reject)
        })
        return path
      })
  }
}
