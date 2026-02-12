export async function onRequest(context) {
  const url = new URL(context.request.url);

  // Internal rewrite helper
  function rewrite(toPath) {
    const newUrl = new URL(context.request.url);
    newUrl.pathname = toPath;

    const rewrittenRequest = new Request(newUrl, {
      method: context.request.method,
      headers: context.request.headers,
      body: context.request.body,
      redirect: "manual" // IMPORTANT
    });

    return context.env.ASSETS.fetch(rewrittenRequest);
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
