/**
 * Formata um valor numérico no formato de moeda brasileira (R$ x.xxx,xx), começando dos centavos.
 * @param {number | string} value - O valor numérico a ser formatado.
 * @returns {string} - O valor formatado em reais.
 */
export function formatCurrency(value: number | string): string {
  if (!value && value !== 0) return '';

  const numericValue = typeof value === 'string' ? parseFloat(value.replace(/\D/g, '')) : value;

  if (isNaN(numericValue)) return '';

  const centavosValue = numericValue / 100;

  return centavosValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

/**
 * Formata um valor numérico no formato de moeda brasileira (R$ x.xxx,xx), começando dos centavos.
 * @param {number | string} value - O valor numérico a ser formatado.
 * @returns {string} - O valor formatado em reais.
 */
/**
 * Desformata um valor numérico no formato de moeda brasileira (R$ x.xxx,xx).
 * @param {string} value - O valor numérico a ser desformatado.
 * @returns {string} - O valor desformatado em reais.
 */
export function unformatCurrency(value: string): number {
  if (!value) return 0;

  // Remove espaços e "R$"
  let cleanedValue = value.replace(/\s|R\$/g, '');

  // Substitui vírgula decimal por ponto
  cleanedValue = cleanedValue.replace(',', '.');

  // Remove separadores de milhar
  cleanedValue = cleanedValue.replace(/\.(?=\d{3})/g, '');

  // Converte para número e multiplica por 100 para obter o valor em centavos
  const numberValue = Math.round(parseFloat(cleanedValue)*100);

  return isNaN(numberValue) ? 0 : numberValue;
}
