export class DiscountDto {
  constructor(
    public article_id: number,
    public type: string,
    public value: number) { }
}
