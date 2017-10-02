var expect  = require('chai').expect;
var request = require('request');
var jsdom = require('jsdom');
var fs = require('fs');


describe('Our first test', ()=> {
    it('should pass', ()=> {
        expect(true).to.equal(true);
    });
});

describe('index.html', ()=> {
    it('should hello', (done)=> {
        const index = fs.readFileSync('./src/index.html','utf-8');
        jsdom.env(index, (err,window)=>{
            const h1 = window.document.getElementsByTagName('h1')[0];
            expect(h1.innerHTML).to.equal('Hello World!');
            done();
            window.close();
        });       
    });
});