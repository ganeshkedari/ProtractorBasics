var winston = require('winston');


winston.remove(winston.transports.Console);
winston.add(winston.transports.Console, { timestamp: true });
// winston.add(winston.transports.File, { filename: 'winston-basic.log' });
winston.configure({transports: [new winston.transports.File({ filename: 'logfile.log' }) ]});
module.exports = winston;

 