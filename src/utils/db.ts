import PouchDb from "./pouchdb";

const db = new PouchDb("clipboard", { adapter: "react-native-sqlite" });

export default db;
