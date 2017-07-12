
export class Hero {
  constructor(
    public id: number,
    public name: string,
    public power: string,
    public alterEgo?: string
  ) {
  }

  clear() {
    this.id = 0;
    this.name = '';
    this.power = '';
    this.alterEgo = '';
  }

}
