export const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
export const passwordFormat = /^(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;
export const phoneNumberFormat = /^\+62\s\d{3}-\d{4}-\d{4,5}(?:(?<=\d)2)?$/;

export const formatPhoneNumber = (text: string) => {
  let formattedText = text.split('-').join('');
  if (formattedText.length > 0) {
    formattedText = formattedText
      .replace(/^(\d{3})(\d)/g, '$1-$2') // add space after 3rd character
      .replace(/(\d{4})(\d)/g, '$1-$2'); // add space after 8th character
  }
  return formattedText;
};
