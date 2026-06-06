const FORM_ENDPOINT =
  "https://script.google.com/macros/s/AKfycby-rjWohjequClHoZSRidJ2Sf9GAwAPE0gsR227RcApK3tCnsz-Cm9yyMbz1obV5dsQJg/exec";

export const FORM_RECIPIENT_EMAIL = "Cathy-1234@outlook.com";

export async function submitWebsiteForm(payload) {
  await fetch(FORM_ENDPOINT, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
    },
    body: JSON.stringify({
      ...payload,
      to: FORM_RECIPIENT_EMAIL,
      recipientEmail: FORM_RECIPIENT_EMAIL,
      page: window.location.href,
      submittedAt: new Date().toISOString(),
    }),
  });
}
