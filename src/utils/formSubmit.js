const FORM_ENDPOINT =
  "https://script.google.com/macros/s/AKfycby-rjWohjequClHoZSRidJ2Sf9GAwAPE0gsR227RcApK3tCnsz-Cm9yyMbz1obV5dsQJg/exec";

export async function submitWebsiteForm(payload) {
  await fetch(FORM_ENDPOINT, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
    },
    body: JSON.stringify({
      ...payload,
      page: window.location.href,
      submittedAt: new Date().toISOString(),
    }),
  });
}
