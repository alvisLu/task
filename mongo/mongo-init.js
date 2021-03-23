print('################ Start Create Database ################');

db = db.getSiblingDB('task');
db.createUser({
  user: 'root',
  pwd: 'password',
  roles: [{ role: 'readWrite', db: 'task' }],
});

print('################ End Create Database ################');
