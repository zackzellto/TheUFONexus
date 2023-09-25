// import React, { useEffect } from "react";

// interface AdProps {
//   adSlot: string; // the ad slot ID provided by Google AdSense
//   adFormat: string; // the ad format, like "auto", "rectangle", etc.
//   adStyle?: React.CSSProperties; // optional styles to apply to the ad container
//   adClient: string; // the client ID provided by Google AdSense
// }

// const AdSenseAd: React.FC<AdProps> = ({
//   adSlot,
//   adFormat,
//   adStyle,
//   adClient,
// }) => {
//   useEffect(() => {
//     if (window) {
//       try {
//         // @ts-ignore
//         (window.adsbygoogle = window.adsbygoogle || []).push({});
//       } catch (e) {
//         console.error(e);
//       }
//     }
//   }, []);

//   return (
//     <ins
//       className="adsbygoogle"
//       style={adStyle}
//       data-ad-client={adClient}
//       data-ad-slot={adSlot}
//       data-ad-format={adFormat}
//     />
//   );
// };

// export default AdSenseAd;
