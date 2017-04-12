var _ = require('underscore');
var sonnets = require('./data/sonnets');

module.exports = {
    sonnets: { 
        all: function() {
            return sonnets;
        },
        find: function(term){
            var lowerTerm = term ? term.toLowerCase() : "";
            return _.filter(sonnets, (sonnet) => {
                return _.find(sonnet.lines, (line) => {
                    return line.toLowerCase().indexOf(lowerTerm) != -1;
                });
            });
        }
    }
};