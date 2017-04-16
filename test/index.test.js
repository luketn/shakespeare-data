var expect = require('chai').expect;
var shakespeareData = require('../dist/index');
var _ = require('underscore');

describe('shakespeareData', function () {
    describe('sonnets.all()', function () {
        it('should contain an array of sonnet objects', function () {
            var sonnets = shakespeareData.sonnets.all();
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
    describe('sonnets.find(term)', function () {
        it('should return an array of sonnets matching the term', function () {
            var sonnets = shakespeareData.sonnets.find('truth');
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
    describe('sonnets.random()', function () {
        it('should return a single random sonnet', function () {
            var sonnet = shakespeareData.sonnets.random();
            expect(sonnet.number).to.be.a('number');
            _.each(sonnet.lines, (line) => {
                expect(line).to.be.a('string');
            });
        })
    })
});