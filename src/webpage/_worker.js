export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // --- Fermi SPA rewrites ---
    if (url.pathname.startsWith("/channels/")) {
      return env.ASSETS.fetch(new Request("/app.html", request));
    }

    if (url.pathname.startsWith("/invite/")) {
      return env.ASSETS.fetch(new Request("/invite.html", request));
    }

    if (url.pathname.startsWith("/template/")) {
      return env.ASSETS.fetch(new Request("/template.html", request));
    }

    // --- Default static asset handling ---
    return env.ASSETS.fetch(request);
  }
};
