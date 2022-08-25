import { red, magenta, yellow, blue, grey} from 'colors'

import ILogger from "./logger.interface";

export default class CommonLogger implements ILogger {
    info(message: string): void {
        console.log(`${blue('[INFO]')} ${this.time} ${blue(message)}`);
        
    }
    warn(message: string): void {
        console.log(`${yellow('[WARN]')} ${this.time} ${yellow(message)}`);
    }
    error(message: string): void {
        console.log(`${red('[ERROR]')} ${this.time} ${red(message)}`);
    }
    debug(message: string): void {
        console.log(`${magenta('[DEBUG]')} ${this.time} ${magenta(message)}`);
    }

    private get time() {
        return grey(new Date().toISOString());
    }
}