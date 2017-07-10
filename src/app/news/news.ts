export class News {

  private status: NewsStatus;

  constructor(public name, public description?, public id?, public votes = 0) {
  }
}

enum NewsStatus { Abandoned, Active }