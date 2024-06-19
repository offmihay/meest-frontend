const BASE_URL = "https://meest-back-e18db4f449d7.herokuapp.com";
// const BASE_URL = "http://10.0.0.14:3000";

export async function fetchJson(url, options) {
  const response = await fetch(`${BASE_URL}/${url}`, options);
  if (response.status !== 200) {
    throw new Error("Error response from server");
  }
  return await response.json();
}

export async function postJson(url, payload) {
  return fetchJson(url, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
