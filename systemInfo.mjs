import {bytesToSize} from './FreeMemory.mjs';
import os from 'os';

console.log('System Information:')
console.log(`Operation System: ${os.type()} (${os.release()})`);
console.log(`Free Memory: ${bytesToSize(os.freemem())}`);
console.log(`Total Memory: ${bytesToSize(os.totalmem())}`);
