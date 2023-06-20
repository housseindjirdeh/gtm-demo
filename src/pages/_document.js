import Script from "next/script";

import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `partytown = {
              forward: ["dataLayer.push"]
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
