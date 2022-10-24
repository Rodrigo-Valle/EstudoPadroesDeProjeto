import { myDatabaseFunction } from "./db/mydb-function";

const myDatabasefunctionE = myDatabaseFunction;
myDatabaseFunction.add({ name: "Rodrigo", age: 31 });
myDatabaseFunction.add({ name: "Paloma", age: 26 });
myDatabaseFunction.add({ name: "Maggie", age: 4 });
myDatabaseFunction.remove(1);

export { myDatabasefunctionE };
 