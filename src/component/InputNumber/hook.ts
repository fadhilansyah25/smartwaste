import React from 'react';

interface Params {
  minimumValue: number | undefined;
  maximumValue: number | undefined;
  onChange: ((value: string) => void) | undefined;
}

export const useInputNumber = ({
  onChange,
  minimumValue,
  maximumValue,
}: Params) => {
  const [value, setValue] = React.useState('');

  React.useEffect(() => {
    if (minimumValue) {
      setValue(String(minimumValue));
    } else {
      setValue('0');
    }
  }, []);

  const handleInputChange = (text: string) => {
    // Menghapus karakter non-angka, non-desimal, dan non-tanda negatif
    const numericValue = text.replace(/[^0-9.]/g, '');

    // Memastikan hanya ada satu titik desimal yang diperbolehkan
    const decimalCount = (numericValue.match(/\./g) || []).length;
    let cleanedValue =
      decimalCount <= 1 ? numericValue : numericValue.replace(/\./g, '');

    // Menghapus angka nol di depan jika ada (khusus untuk angka negatif dan desimal)
    cleanedValue = cleanedValue.replace(/^(-)?0+(?=\d+)/, '$1');

    // Memastikan nilai berada dalam rentang minimum dan maksimum (jika diberikan)
    let validatedValue = cleanedValue;
    if (typeof minimumValue !== 'undefined') {
      const minValue = minimumValue!;
      validatedValue =
        parseFloat(cleanedValue) < minValue ? String(minValue) : validatedValue;
    }
    if (typeof maximumValue !== 'undefined') {
      const maxValue = maximumValue!;
      validatedValue =
        parseFloat(cleanedValue) > maxValue ? String(maxValue) : validatedValue;
    }

    setValue(validatedValue);
    if (onChange) {
      onChange(validatedValue);
    }
  };

  return {value, handleInputChange} as const;
};
