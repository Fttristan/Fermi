// This function intentionally does nothing.
// It allows Cloudflare Pages to detect the /functions directory
// without overriding _routes.json routing.

export async function onRequest(context) {
  return context.next();
}
