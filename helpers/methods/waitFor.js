const parser = require('../parser')

const schema = {
  method: 'waitFor',
  process: async (flags, page, params, html, usingPuppeteer) => {
    if (!usingPuppeteer) throw new Error(`form requires using puppeteer to browse pages`)
    
    if (params.selector) {
      await page.waitForSelector(params.selector)
    }
    else if (params.time) {
      await page.waitFor(parseInt(params.time))
    }
    else {
      throw new Error('Invalid waitFor options')
    }
  }
}

module.exports = schema