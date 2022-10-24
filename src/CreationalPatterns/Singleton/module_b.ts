import { myDatabaseModule } from "./db/mydb-module";
import { myDatabaseModuleC } from "./module_a";

const myDatabaseModuleD = myDatabaseModule;
myDatabaseModule.add({ name: "Branquinho", age: 3 });
myDatabaseModule.add({ name: "Cindy", age: 3 });
myDatabaseModule.add({ name: "Bela", age: 2 });
myDatabaseModule.show();

console.log(myDatabaseModuleC === myDatabaseModuleD);
