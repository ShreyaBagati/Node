const cp = require('child_process');

cp.execSync('calc');
cp.execSync('start chrome https://www.scaler.com/topics/');
console.log('End');