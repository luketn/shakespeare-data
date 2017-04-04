var expect = require('chai').expect;
var shakespeareData = require('./index');

describe('shakespeareData', function () {
    describe('sonnets', function () {
        it('should contain an array of sonnet objects', function () {
            var sonnets = shakespeareData.sonnets();
            expect(sonnets instanceof Array).to.be.true;

            for (i = 1; i < sonnets.length+1; i++) {
                var sonnet = sonnets[i-1];
                expect(sonnet instanceof Object).to.be.true;
                expect(sonnet.number).to.equal(i);
                expect(sonnet.lines instanceof Array).to.be.true;
                sonnet.lines.every(function(line){
                    return line instanceof String;
                });
            }
        })
    })
});