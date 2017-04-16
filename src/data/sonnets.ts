import {SonnetData} from './sonnet-data';

export class Sonnets {

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

    random = () => {
        var randomElement = Math.floor(Math.random() * SonnetData.length);
        return SonnetData[randomElement];
    };
}