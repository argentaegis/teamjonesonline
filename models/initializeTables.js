const User = require('./user');

var tableSchemas = [];
tableSchemas.push(User.schema);

var currentTables = [];


populateTables = function(currentTables, tableSchemas) {
  tableSchemas.forEach(function (item, index, array) {
    if (currentTables.indexOf(item.TableName) === -1) {
      ddb.createTable(item, function (err, data) {
        if (err) {
          console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
        } else {
          console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2));
        }
      });
    }
  });
};

ddb.listTables({}, function(err, data) {
  if (err) {
    console.log("Error", err.code);
  } else {
    console.log("Before population the table names are ", data.TableNames);
    currentTables = data.TableNames;
    populateTables(currentTables, tableSchemas);
  }
});

