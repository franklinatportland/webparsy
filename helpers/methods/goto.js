const schema = {
    method: 'goto',
    puppeteer: true,
    process: (flags, page, params, html) => {
        return null;
    }
};

module.exports = schema;