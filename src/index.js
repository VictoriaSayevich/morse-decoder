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
    'space':  ' ',
};

function decode(expr) {
    let str_morse_letter = "", letter = "", rezult = "";
    for (let i = 0; i < expr.length; i += 10) {
        str_morse_letter = decodeSymbol (expr.substr(i, 10));
        letter = decodeInLetter (MORSE_TABLE, str_morse_letter);
        rezult = rezult.concat(letter);
    }
    console.log(rezult);
    return rezult;
}


module.exports = {
    decode
}

function decodeSymbol(str_symbol) {
    let i = 0;
    let rez = "";
    if (str_symbol.localeCompare('*'.repeat(10)) == 0) return rez = 'space';
    while (str_symbol[i] != 1) {
        i++;
        continue;
    }
    for (i; i < str_symbol.length - 1; i += 2) {
        if (str_symbol[i + 1] == '0') rez = rez.concat('.');
        else rez = rez.concat('-');
    }
    return rez;
}

function decodeInLetter (arr, str) {
    let letter = "";
    for (let key in arr) {
        switch(key) {
            case str: 
            letter = arr[key];
                break;
        }
    }
    return letter;
}