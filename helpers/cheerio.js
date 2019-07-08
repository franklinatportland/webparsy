const cheerio = require('cheerio')


const opts = {
    xml: {
        normalizeWhitespace: true,
        // withDomLvl1: true,
        xmlMode: true,
        // decodeEntities: true
    }
};
const load = (html) => {
    return typeof html === 'string' ? cheerio.load(html, opts) : html

}
module.exports.load = load
module.exports.text = (html, selector) => typeof (html === 'string') ?
    load(html)(selector || null).text() :
    cheerio(selector || null).text()

module.exports.html = (html, selector) => {
    // Get full page html
    if (!selector && typeof html === 'string') return html

    // Get element html
    return typeof (html === 'string') ?
        load(html)(selector || null).html() :
        cheerio(selector || null).html()
}