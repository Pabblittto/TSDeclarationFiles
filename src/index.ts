import { ConstantInterface } from "@pabblo/libraryforpresentation-ts";

import { addNumbers } from "@pabblo/libraryforpresentation";

interface extended extends ConstantInterface {
  asdF: number;
}

const example: extended;

// declare module "@pabblo/libraryforpresentation-ts" {
//   interface ConstantInterface {
//     additional: number;
//   }
// }
