import "react-native-get-random-values";
import PouchDb from "pouchdb-core";
import HttpPouch from "pouchdb-adapter-http";
import replication from "pouchdb-replication";
import mapreduce from "pouchdb-mapreduce";
import SQLiteAdapterFactory from "pouchdb-adapter-react-native-sqlite";
import WebSQLite from "react-native-quick-websql";

const SQLiteAdapter = SQLiteAdapterFactory(WebSQLite);

export default PouchDb.plugin(HttpPouch)
  .plugin(replication)
  .plugin(mapreduce)
  .plugin(SQLiteAdapter);
