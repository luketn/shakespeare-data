var expect = require('chai').expect;
var shakespeareData = require('./index');
var _ = require('underscore');

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
    describe('find', function () {
        it('should return an array of sonnets matching the term', function () {
            var sonnets = shakespeareData.find('truth');
            expect(sonnets instanceof Array).to.be.true;
            expect(sonnets.length > 0).to.be.true;

            _.each(sonnets, (sonnet) => {
                var truthLine = _.find(sonnet.lines, (line) => {
                    var lowerLine = line.toLowerCase();
                    if (lowerLine.indexOf('truth') != -1) {
                        return true;
                    } else {
                        return false;
                    }
                });
                expect(truthLine).to.be.a('string');
            });
            
        })
    })
});