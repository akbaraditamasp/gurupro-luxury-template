export const slugify = (text = "") =>
  text
    .toString()
    .substring(0, 50)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");

export function encodeNumberToLowerCase(text = "") {
  const alphabet = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
  let encodedText = "";
  for (let i = 0; i < text.length; i++) {
    const char = text.charAt(i);
    const index = parseInt(char);
    encodedText += alphabet[index];
  }
  return encodedText;
}

// Fungsi untuk mendekripsi huruf kecil menjadi angka
export function decodeLowerCaseToNumber(text) {
  const alphabet = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
  let decodedText = "";
  for (let i = 0; i < text.length; i++) {
    const char = text.charAt(i);
    const index = alphabet.indexOf(char);
    decodedText += index.toString();
  }
  return decodedText;
}
