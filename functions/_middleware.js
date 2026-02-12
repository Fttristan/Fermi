export async function onRequest(context) {
  const url = new URL(context.request.url);

  // Internal rewrite helper
  function rewrite(toPath) {
    const newUrl = new URL(context.request.url);
    newUrl.pathname = toPath;

    // Clone the original request but with the rewritten URL
    const rewritten = new Request(newUrl.toString(), context.request);

    return context.env.ASSETS.fetch(rewritten);
  }

  if (url.pathname.startsWith("/channels/")) {
    return rewrite("/app.html");
  }

  if (url.pathname.startsWith("/invite/")) {
    return rewrite("/invite.html");
  }

  if (url.pathname.startsWith("/template/")) {
    return rewrite("/template.html");
  }

  return context.next();
}
