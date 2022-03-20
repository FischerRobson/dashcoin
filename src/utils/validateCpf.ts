/* eslint-disable no-plusplus */
export function validateCpf(cpf: string) {
  let sum;
  let rest;
  sum = 0;
  if (cpf === '00000000000') return false;

  for (let i = 1; i <= 9; i++) sum += parseInt(cpf.substring(i - 1, i), 10) * (11 - i);
  rest = (sum * 10) % 11;

  if ((rest === 10) || (rest === 11)) rest = 0;
  if (rest !== parseInt(cpf.substring(9, 10), 10)) return false;

  sum = 0;
  for (let i = 1; i <= 10; i++) sum += parseInt(cpf.substring(i - 1, i), 10) * (12 - i);
  rest = (sum * 10) % 11;

  if ((rest === 10) || (rest === 11)) rest = 0;
  if (rest !== parseInt(cpf.substring(10, 11), 10)) return false;
  return true;
}
