const yearMonthDate = (ISOdate:string | Date) => {
  const date = new Date(ISOdate);
  const monthName = date.toLocaleString("default", { month: "short" });
  return (
    monthName + ", " + date.getDate() + " " + date.getFullYear()
  );
};

const DateFormatter = {
  yearMonthDate,
};

export const resolveIPFS = (url?: string) => {
  if (!url || !url.includes('ipfs://')) {
    return url;
  }
  return url.replace('ipfs://', 'https://gateway.ipfs.io/ipfs/');
};

export {
  DateFormatter
}