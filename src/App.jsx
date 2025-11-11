// import { useState } from "react";
// import { BrowserRouter as Router } from "react-router-dom";
// import AppRoutes from "./routes";
// import CookieBanner from "./Components/CookieBanner";
// import CookieSettings from "./Components/CookieSettings";
// import { Toaster } from "react-hot-toast";
// import ScrollToHash from "./Components/ScrollToHash";


// function App() {
//   const [isCookieModalOpen, setCookieModalOpen] = useState(false);

//   const openCookieSettings = () => setCookieModalOpen(true);
//   const closeCookieSettings = () => setCookieModalOpen(false);

//   return (
//     <Router>
//       <Toaster position="top-right" reverseOrder={false} />
//       <AppRoutes />
//       <ScrollToHash />
//       <CookieBanner onOpenSettings={openCookieSettings} />
//       {isCookieModalOpen && <CookieSettings onClose={closeCookieSettings} />}
//     </Router>
//   );
// }

// export default App;


import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";
import CookieBanner from "./Components/CookieBanner";
import CookieSettings from "./Components/CookieSettings";
import { Toaster } from "react-hot-toast";
import ScrollToHash from "./Components/ScrollToHash";
import { Helmet } from "react-helmet-async"; // ✅ Import Helmet

function App() {
  const [isCookieModalOpen, setCookieModalOpen] = useState(false);

  const openCookieSettings = () => setCookieModalOpen(true);
  const closeCookieSettings = () => setCookieModalOpen(false);

  return (
    <Router>
      {/* ✅ All Google Tags, GTM, and GA4 */}
      <Helmet>
        {/* Google Ads Conversion Tag */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-693754692"></script>
        <script>{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-693754692');
        `}</script>

        {/* Google Tag Manager */}
        <script>{`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-TKDMK5K');
        `}</script>

        {/* Google Analytics (GA4) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-2CGWY41RKG"></script>
        <script>{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-2CGWY41RKG');
        `}</script>
      </Helmet>

      {/* ✅ Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-TKDMK5K"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
          title="GTM"
        ></iframe>
      </noscript>

      {/* ✅ Your App Content */}
      <Toaster position="top-right" reverseOrder={false} />
      <AppRoutes />
      <ScrollToHash />
      <CookieBanner onOpenSettings={openCookieSettings} />
      {isCookieModalOpen && <CookieSettings onClose={closeCookieSettings} />}
    </Router>
  );
}

export default App;
