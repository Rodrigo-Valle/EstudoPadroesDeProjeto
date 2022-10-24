import { myDatabaseFunction } from "./db/mydb-function";
import { myDatabasefunctionE } from "./function_a";

const myDatabaseModuleF = myDatabaseFunction;
myDatabaseModuleF.add({ name: "Branquinho", age: 3 });
myDatabaseModuleF.add({ name: "Cindy", age: 3 });
myDatabaseModuleF.add({ name: "Bela", age: 2 });
myDatabaseModuleF.show();

console.log(myDatabaseModuleF === myDatabasefunctionE);
