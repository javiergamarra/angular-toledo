export class Option {

    private status:OptionStatus;

    constructor(public name, public description?, public votes = 0) {
    }
}

enum OptionStatus { Abandoned, Active }