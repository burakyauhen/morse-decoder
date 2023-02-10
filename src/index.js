const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    
    function getArrDate(expr) {
        let arr = [];
        while (expr) {
            arr.push(expr.slice(0, 10));
            expr = expr.slice(10);
        }
        return arr;
    }
    
    function decodeArr(arr) {
        arr = arr.map(function(item) {
            if (item === '**********') return ' ';
            while (item[0] === '0') item = item.slice(1);
                let arr1 = [];
            while (item) {
                let str = item.slice(0, 2);
                item = item.slice(2);
                if (str === '10') arr1.push('.');
                if (str === '11') arr1.push('-')
            }
        return arr1.join('');
        });
        return arr; 
    }
    
    function getText(arr) {
        arr = arr.map(function(item) {
            if (item === ' ') return ' ';
            return MORSE_TABLE[item]; 
        });
        return arr;
    }
    
    let arr = getArrDate(expr);
    arr = decodeArr(arr);
    arr = getText(arr);
    
    return arr.join('');
}

module.exports = {
    decode
}