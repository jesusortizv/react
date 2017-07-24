export const BANK_SELECT = 'BANK_SELECT';

export function selectBank(bank) {
  return {
    type: BANK_SELECT,
    bank,
  }
}
