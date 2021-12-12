export class MyNewClass {
  field: number;
  constructor(x: number) {
    this.field = x;
  }

  static staicMethod = () => {
    return "static";
  };

  method = () => {
    return 123;
  };
}
