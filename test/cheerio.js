const expect = require('chai').expect

const cheerio = require('cheerio')

describe('cheerio', function () {
    describe('text', function () {
        let html = '<tr role="row" class="odd">\n' +
            '    <td class="entityId">C2479096</td>' +
            '    <td>12/18/2002\n</td>' +
            '    <td>\n' +
            '        ACTIVE\n' +
            '    </td>\n' +
            '    <td data-order="HARROD\'S, INC." class="sorting_1">\n' +
            '            <label hidden="hidden" aria-hidden="false" for="btnDetail-02479096">View details for entity number 02479096</label>\n' +
            '                <button id="btnDetail-02479096" value="02479096" name="EntityId" class="btn-link EntityLink">HARROD\'S, INC.</button>\n' +
            '    </td>\n' +
            '    <td>\n' +
            '        CALIFORNIA\n' +
            '    </td>\n' +
            '    <td>\n' +
            '        MICHAEL R HARROD\n' +
            '    </td>\n' +
            '</tr>';

        const $ = cheerio.load(html, {
            xml: {
                // normalizeWhitespace: true
                // withDomLvl1: true,
                // xmlMode: true,
                // decodeEntities: true
            }
        });

        console.log('As XML: ', $.xml());

        it('button should return column text', function () {
            let elem = $('button');
            let text = elem.text().trim();
            expect(text).to.equal('HARROD\'S, INC.')
        });

        it('td:nth-child(1) should return entity number text', function () {
            let elem = $('td:nth-child(1)');
            let text = elem.text().trim();
            expect(text).to.equal('C2479096')
        });

        it('.className should find element ', () => {

            let elem = $('.entityId').text();


            console.log('ELEM: ', elem);

            expect(elem).to.not.be.null;
            expect(elem).to.be.equal('C2479096');
        });
    });

});