const colors = require('colors/safe');

const env = process.env.NODE_ENV || 'development';
if(env === 'development') {
    process.env.PORT = 3000;
    process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp';
} else if (env === 'test') {
    process.env.PORT = 3000;
    process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest';
}

console.log(`Enviroment: ${colors.green(env)}`);
console.log(`Port:       ${colors.green(process.env.PORT)}`);
console.log(`Database:   ${colors.green(process.env.MONGODB_URI)}`);
console.log('');