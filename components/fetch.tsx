import { NEXT_PUBLIC_URL } from "./url";

export const get = async (url: string) => {
  const response = await fetch(NEXT_PUBLIC_URL +url);
  const data = await response.json();
  return data;
}

export const post = async (url: string, data: any) => {
  const response = await fetch(NEXT_PUBLIC_URL + url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    const json = await response.json();
    return json;
}