import {Chosenapple} from "./chosenapple";

export class Order {
  apples: Chosenapple[] = [];
  totalSum!: string;
  username!: string;
  date: Date = new Date();
}
