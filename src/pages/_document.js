import Script from "next/script";

import { Html, Head, Main, NextScript } from "next/document";

const siteUrl = "https://gtm-demo-two.vercel.app/proxytown";

export default function Document() {
  return (
    <Html>
      <Head>
        <script
          data-partytown-config
          dangerouslySetInnerHTML={{
            __html: `partytown = {
              lib: '/_next/static/~partytown/',
              forward: ['dataLayer.push'],
              resolveUrl: (url) => {
                if (url.hostname === 'player.kompassify.com') {
                  const proxyUrl = new URL('${siteUrl}/kompassify')
                  return proxyUrl
                } else if (url.hostname === 'player.kompassify.app') {
                  const proxyUrl = new URL('${siteUrl}/kompassify-app')
                  return proxyUrl
                } else if (url.hostname === 'cdn.krxd.net') {
                  const proxyUrl = new URL('${siteUrl}/krxd')
                  return proxyUrl
                } else if (url.hostname === 'talk.hyvor.com') {
                  const proxyUrl = new URL('${siteUrl}/hyvor')
                  return proxyUrl
                } else if (url.hostname === 'ct.pinterest.com') {
                  const proxyUrl = new URL('${siteUrl}/pinterest')
                  return proxyUrl
                } else if (url.hostname === 'cdn.pn.vg' && url.pathname.includes('ilabspush')) {
                  const proxyUrl = new URL('${siteUrl}/pushnews-ilabspush')
                  return proxyUrl
                } else if (url.hostname === 'cdn.pn.vg' && url.pathname.includes('sites')) {
                  const proxyUrl = new URL('${siteUrl}/pushnews-sites')
                  return proxyUrl
                } else if (url.hostname === 'j.wovn.io') {
                  const proxyUrl = new URL('${siteUrl}/jovn')
                  return proxyUrl
                } else if (url.hostname === 'cdn.provesrc.com') {
                  const proxyUrl = new URL('${siteUrl}/provesrc')
                  return proxyUrl
                } else if (url.hostname === 'az19942.vo.msecnd.net') {
                  const proxyUrl = new URL('${siteUrl}/raptor')
                  return proxyUrl
                }

                return url
              }
            };`,
          }}
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script
          id="gtm"
          strategy="worker"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-NGLHBGB');`,
          }}
        />
        <noscript>
          &lt;iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-NGLHBGB"
          height="0" width="0"
          style="display:none;visibility:hidden"&gt;&lt;/iframe&gt;&lt;/noscrip
        </noscript>
      </body>
    </Html>
  );
}
