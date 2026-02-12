export async function onRequest(context) {
  const url = new URL(context.request.url);
  const origin = url.origin;

  function serve(path) {
    return context.env.ASSETS.fetch(
      new Request(origin + path, context.request)
    );
  }

  if (url.pathname.startsWith("/channels/")) {
    return serve("/app.html");
  }

  if (url.pathname.startsWith("/invite/")) {
    return serve("/invite.html");
  }

  if (url.pathname.startsWith("/template/")) {
    return serve("/template.html");
  }

  return context.next();
}
