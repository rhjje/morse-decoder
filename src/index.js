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
    '':  ' ',
};

function decode(expr) {
    let code = [];
    let morseCode = [];

    for (let i = 0; i < expr.length; i+= 10) {
        code.push(expr.slice(i, i + 10));
    }

    for (let i = 0; i < code.length; i++) {
        let temp = '';
        for (let j = 0; j < code[i].length; j += 2) {
            if (code[i].slice(j, j + 2) === '00') {
                temp += '';
            } else if (code[i].slice(j, j + 2) === '10') {
                temp += '.';
            } else if (code[i].slice(j, j + 2) === '11') {
                temp += '-';
            }
        }
        morseCode.push(temp);
        temp = '';
    }

    return morseCode.map(item => MORSE_TABLE[item]).join('');
}

module.exports = {
    decode
}

