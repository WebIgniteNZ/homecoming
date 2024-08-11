import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import Image from "next/image";
// import Script from "next/script";
import Header from "../components/UI/Header/Header";
import "./globals.css";
export const metadata = {
  title: "Home Coming 24'",
  description: "Get Ready for Home Coming 24'. 14-15 September. Republic of Fiji",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="gradient-bg min-h-dvh">
        <Header />
        <Image
          className="pointer-events-none w-1/2 lg:w-[20vw] top-0 right-0 -scale-y-100 absolute  object-contain "
          sizes="20vw"
          width={525}
          height={431}
          quality={75}
          src={"/assets/lights-min.png"}
          alt="lights"
        />
        <Image
          className="pointer-events-none w-1/2 lg:w-[20vw] top-0 left-0 -scale-x-100 -scale-y-100 absolute  object-contain "
          sizes="20vw"
          width={525}
          height={431}
          quality={75}
          src={"/assets/lights-min.png"}
          alt="lights"
        />

        {children}
        {/* <Script
          id="chat-bot"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.__ow = window.__ow || {};
  window.__ow.organizationId = "3234d019-e155-44df-9040-af3c2fc4a768";
  window.__ow.integration_name = "manual_settings";
  window.__ow.product_name = "openwidget";
  ;(function(n,t,c){function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},get:function(){if(!e._h)throw new Error("[OpenWidget] You can't use getters before load.");return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",n.src="https://cdn.openwidget.com/openwidget.js",t.head.appendChild(n)}};!n.__ow.asyncInit&&e.init(),n.OpenWidget=n.OpenWidget||e}(window,document,[].slice))`,
          }}
        /> */}
        {/* <Script src="//code.tidio.co/e3ghtmovj485butbr8eqwmyweqazelrc.js" async /> */}
        {/* <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}');
fbq('track', 'PageView');
`,
          }}
        />*/}
        <GoogleAnalytics gaId="G-Q1BNNE35GD" />
        <Analytics />
      </body>
    </html>
  );
}
