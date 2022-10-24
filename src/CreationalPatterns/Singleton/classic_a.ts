import { MyDatabaseClassic } from "./db/mydb-classic";

const myDatabaseClassicA = MyDatabaseClassic.instance;
myDatabaseClassicA.add({ name: "Rodrigo", age: 31 });
myDatabaseClassicA.add({ name: "Paloma", age: 26 });
myDatabaseClassicA.add({ name: "Maggie", age: 4 });
myDatabaseClassicA.remove(1);

export { myDatabaseClassicA };
