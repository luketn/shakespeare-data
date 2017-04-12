import SonnetData from './sonnet-data';

export default class Sonnets {

    all = () => SonnetData;

    find = (term:String) => {
        var lowerTerm = term ? term.toLowerCase() : "";
        return SonnetData.filter(
            sonnet => {
                var linesWithTerm = sonnet.lines.filter(line => line.toLowerCase().indexOf(lowerTerm) != -1);
                return linesWithTerm.length > 0;
            }
        );
    };
}