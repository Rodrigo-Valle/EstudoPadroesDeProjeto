import { myDatabaseModule } from "./db/mydb-module";

const myDatabaseModuleC = myDatabaseModule;
myDatabaseModuleC.add({ name: "Rodrigo", age: 31 });
myDatabaseModuleC.add({ name: "Paloma", age: 26 });
myDatabaseModuleC.add({ name: "Maggie", age: 4 });

export { myDatabaseModuleC };
