const getRandomNumber = (number: number) => Math.floor(Math.random() * number);

const BASIC_CHARS = [
  'a', 'b', 'c', 'd', 'e', 'f',
  'g', 'h', 'i', 'j', 'k', 'l',
  'm', 'n', 'o', 'p', 'q', 'r',
  's', 't', 'u', 'v', 'w', 'x',
  'y', 'z'
];
const UPPERCASE_CHARS = [
  'A', 'B', 'C', 'D', 'E', 'F',
  'G', 'H', 'I', 'J', 'K', 'L',
  'M', 'N', 'O', 'P', 'Q', 'R',
  'S', 'T', 'U', 'V', 'W', 'X',
  'Y', 'Z'
];
const NUMBERS = [
  '0', '1', '2', '3',
  '4', '5', '6', '7',
  '8', '9'
];
const SYMBOLS = [
  '!', '#', '$', '%', '&',
  '@', '*', '(', ')', '*',
  '+', ',', '.', '/', '^',
  '`', '{', '|', '}', '~'
];

export const passwordGenerator = (
  numberOfSymbols: string = '15',
  numberOfInterval: string = '5',
  includeUppercase: boolean,
  includeNumbers: boolean,
  includeSymbols: boolean
): string => {
  let collCharsForPassworg: string[] = BASIC_CHARS;
  if (includeUppercase) collCharsForPassworg = collCharsForPassworg.concat(UPPERCASE_CHARS);
  if (includeNumbers) collCharsForPassworg = collCharsForPassworg.concat(NUMBERS);
  if (includeSymbols) collCharsForPassworg = collCharsForPassworg.concat(SYMBOLS);
  const passwordLength = collCharsForPassworg.length;
  const arrayForPassword = new Array(Number(numberOfSymbols)).fill(0);
  const password = arrayForPassword.reduce((acc) => (acc += collCharsForPassworg[getRandomNumber(passwordLength)]), '');
  return password.match(new RegExp('.{1,' + numberOfInterval + '}', 'g')).join('-');
  // Регулярное выражение метода match для разделения строки на заданное количество символов
};
