import dbConfig from "./dev";

const firebase = require('firebase/app');
require('firebase/database');

export default firebase
.initializeApp(dbConfig)
.database()
.ref();
