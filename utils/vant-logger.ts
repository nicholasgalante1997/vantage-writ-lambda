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
    info(message: String): String { 
        return `${moment().format()}[${Level.INFO}]::${message}`;
    };
    warn(message: String): String { 
        return `${moment().format()}[${Level.WARN}]::${message}`;
    };
    error(message: String): String { 
        return `${moment().format()}[${Level.ERROR}]::${message}`;
    };
    debug(message: String): String { 
        return `${moment().format()}[${Level.DEBUG}]::${message}`;
    };
}