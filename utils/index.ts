export async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, init);
  return res.json();
}

const padTo2Digits = (num: number) => num.toString().padStart(2, "0");

const formatDate = (date: string) => {
  const parsedDate = new Date(date);
  return [
    padTo2Digits(parsedDate.getDate()),
    padTo2Digits(parsedDate.getMonth() + 1),
    parsedDate.getFullYear(),
  ].join("/");
};

export const calculateTimeAgo = (date: string) => {
  const time = new Date(date);
  const now = new Date();
  const seconds = Math.round((now.getTime() - time.getTime()) / 1000);
  const minutes = Math.round(seconds / 60);
  const hours = Math.round(minutes / 60);
  const days = Math.round(hours / 24);
  const months = Math.round(days / 30);
  const years = Math.round(months / 12);

  if (minutes < 60) {
    return `${minutes} minutes ago`;
  } else if (hours < 24) {
    return `${hours} hours ago`;
  } else if (days < 7) {
    return `${days} days ago`;
  } else {
    return formatDate(date);
  }
};
