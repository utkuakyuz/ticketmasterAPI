export const toShortSentence = (str, kac, nokta) => {
 const maxLength = typeof kac === "number" ? kac : 14;
 if (str.length > maxLength) {
   str = str.substr(0, maxLength);
   str = nokta ? str + "..." : str;
 }
 return str;
};
const pad = (number) => (number < 10 ? "0" + number : number);
export const formatDate = (date, nor = 1, full = false, day = false) => {
 const tar = new Date(date);
 let net = pad(tar.getDate());
 return net;
};