export function generatePass(options) {
  const { length, upperCases, lowerCases, numbers, specials } = options;

  const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const specialChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

  let allowedChars = "";

  if (upperCases) allowedChars += upperCaseChars;
  if (lowerCases) allowedChars += lowerCaseChars;
  if (numbers) allowedChars += numberChars;
  if (specials) allowedChars += specialChars;

  if (!allowedChars) return "";

  let generatedPassword = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    generatedPassword += allowedChars[randomIndex];
  }

  return generatedPassword;
}
