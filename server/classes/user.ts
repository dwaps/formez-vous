export class User {
  constructor(
    public id: string,
    public pseudo: string = 'anonymous',
    public room: string = 'no-room',
  ) {}
}

