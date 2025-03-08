export const formatCnpjOrCpf = (value: string) => {
  let valueRemovedNotNumber = value.replace(/\D/g, "");

  if (valueRemovedNotNumber.length > 14) {
    valueRemovedNotNumber = valueRemovedNotNumber.slice(0, 14);
  }

  if (valueRemovedNotNumber.length <= 11) {
    valueRemovedNotNumber = valueRemovedNotNumber.replace(
      /(\d{3})(\d)/,
      "$1.$2"
    );
    valueRemovedNotNumber = valueRemovedNotNumber.replace(
      /(\d{3})(\d)/,
      "$1.$2"
    );
    valueRemovedNotNumber = valueRemovedNotNumber.replace(
      /(\d{3})(\d{1,2})$/,
      "$1-$2"
    );
  } else {
    valueRemovedNotNumber = valueRemovedNotNumber.replace(
      /(\d{2})(\d)/,
      "$1.$2"
    );
    valueRemovedNotNumber = valueRemovedNotNumber.replace(
      /(\d{3})(\d)/,
      "$1.$2"
    );
    valueRemovedNotNumber = valueRemovedNotNumber.replace(
      /(\d{3})(\d{1,4})/,
      "$1/$2"
    );
    valueRemovedNotNumber = valueRemovedNotNumber.replace(
      /(\d{4})(\d{1,2})$/,
      "$1-$2"
    );
  }

  return valueRemovedNotNumber;
};
