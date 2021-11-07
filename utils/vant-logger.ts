import moment from 'moment';

enum Level {
    INFO = 'INFO',
    WARN = 'WARN',
    ERROR = 'ERROR',
    FATAL = 'FATAL',
    DEBUG = 'DEBUG',
    ALL = 'ALL',
    OFF = 'OFF'
}

export default class VantLogger {
    info(message: String): void { 
        console.log(`${moment().format()}[${Level.INFO}]::${message}`);
    };
    warn(message: String): void { 
        console.log(`${moment().format()}[${Level.WARN}]::${message}`);
    };
    error(message: String): void { 
        console.log(`${moment().format()}[${Level.ERROR}]::${message}`);
    };
    debug(message: String): void { 
        console.log(`${moment().format()}[${Level.DEBUG}]::${message}`);
    };
}