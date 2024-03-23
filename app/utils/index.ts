import QRcode from "qrcode";

export const formatBalance = (rawBalance: string) => {
  const balance = (parseInt(rawBalance) / 1000000000000000000).toFixed(2);
  return balance;
};

export const formatChainAsNum = (chainIdHex: string) => {
  const chainIdNum = parseInt(chainIdHex);
  return chainIdNum;
};

export const formatAddress = (addr: string, num: number) => {
  return `${addr.substring(0, num)}...`;
};

export function shuffleArray(array: string[] | any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export async function createQr(url: string, width: number) {
  const qrurl = QRcode.toDataURL(url, {
    color: { dark: "#000000", light: "#ffffff" },
    width,
  });
  return qrurl;
}
