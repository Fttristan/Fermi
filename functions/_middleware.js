export async function onRequest(context) {
  const url = new URL(context.request.url);

  if (url.pathname.startsWith("/channels/")) {
    return context.env.ASSETS.fetch(new Request("/app.html", context.request));
  }

  if (url.pathname.startsWith("/invite/")) {
    return context.env.ASSETS.fetch(new Request("/invite.html", context.request));
  }

  if (url.pathname.startsWith("/template/")) {
    return context.env.ASSETS.fetch(new Request("/template.html", context.request));
  }

  return context.next();
}
