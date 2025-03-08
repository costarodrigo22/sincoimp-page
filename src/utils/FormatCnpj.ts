export function formatCNPJ(value: string): string {
  return value
    .replace(/\D/g, '') // Remove tudo que não for número
    .replace(/^(\d{2})(\d)/, '$1.$2') // Coloca o primeiro ponto
    .replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3') // Coloca o segundo ponto
    .replace(/\.(\d{3})(\d)/, '.$1/$2') // Coloca a barra
    .replace(/(\d{4})(\d)/, '$1-$2') // Coloca o traço
    .slice(0, 18); // Garante que o tamanho máximo seja respeitado
}

export function unformatCNPJ(value: string): string {
  return value.replace(/\D/g, ''); // Remove tudo que não for número
}