import { ConstantInterface } from "@pabblo/libraryforpresentation-ts";
import { addNumbers } from "@pabblo/libraryforpresentation";

declare module "@pabblo/libraryforpresentation-ts" {
  interface ConstantInterface {
    additional: number;
  }
}
