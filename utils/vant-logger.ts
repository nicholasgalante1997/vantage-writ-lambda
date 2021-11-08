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
	info(message: string): void { 
		console.log(`${moment().format()}[${Level.INFO}]::${message}`);
	}
	warn(message: string): void { 
		console.log(`${moment().format()}[${Level.WARN}]::${message}`);
	}
	error(message: string): void { 
		console.log(`${moment().format()}[${Level.ERROR}]::${message}`);
	}
	debug(message: string): void { 
		console.log(`${moment().format()}[${Level.DEBUG}]::${message}`);
	}
}