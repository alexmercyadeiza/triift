import Script from "next/script";

export default function Analytics() {
    return (
      <>
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-X8CBB6CF18');
        `}
        </Script>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-X8CBB6CF18"
        />
      </>
    );
}