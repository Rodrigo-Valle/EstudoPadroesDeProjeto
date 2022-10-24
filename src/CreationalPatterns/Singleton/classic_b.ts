import { MyDatabaseClassic } from "./db/mydb-classic";
import { myDatabaseClassicA } from "./classic_a";

const myDatabaseClassicB = MyDatabaseClassic.instance;
myDatabaseClassicB.add({ name: "Branquinho", age: 3 });
myDatabaseClassicB.add({ name: "Cindy", age: 3 });
myDatabaseClassicB.add({ name: "Bela", age: 2 });
myDatabaseClassicB.show();

console.log(myDatabaseClassicB === myDatabaseClassicA);
