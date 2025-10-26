import{j as r}from"./index-B_JqyiKX.js";import{F as n,a as s,b as l,c as i,d as c}from"./index-DzxOX9wK.js";const h=({links:o={}})=>{const t=[{key:"spotify",icon:n,href:o.spotify,color:"group-hover:text-[#1DB954]",label:"Spotify"},{key:"youtube",icon:s,href:o.youtube,color:"group-hover:text-[#FF0000]",label:"YouTube"},{key:"instagram",icon:l,href:o.instagram,color:"group-hover:text-[#E1306C]",label:"Instagram"},{key:"tiktok",icon:i,href:o.tiktok,color:"group-hover:text-[#000000]",label:"TikTok"},{key:"facebook",icon:c,href:o.facebook,color:"group-hover:text-[#1877F2]",label:"Facebook"}];return r.jsx("div",{className:"flex justify-center items-center gap-6 sm:gap-8 lg:gap-10 py-8 px-4",children:t.map(e=>{if(!e.href)return null;const a=e.icon;return r.jsxs("a",{href:e.href,target:"_blank",rel:"noopener noreferrer","aria-label":e.label,className:`\r
              group relative p-4 rounded-2xl transition-all duration-300 ease-out\r
              bg-white/5 backdrop-blur-sm border border-white/10\r
              hover:bg-white/10 hover:border-white/20 hover:scale-110\r
              focus:outline-none focus:ring-2 focus:ring-white/50 focus:scale-110\r
            `,children:[r.jsx(a,{className:`
                text-3xl sm:text-4xl lg:text-5xl transition-colors duration-300 ease-out
                text-white ${e.color}
                drop-shadow-lg
              `}),r.jsxs("div",{className:`\r
              absolute -bottom-10 left-1/2 transform -translate-x-1/2\r
              bg-black/90 text-white text-xs font-semibold px-3 py-1 rounded-lg\r
              opacity-0 group-hover:opacity-100 group-hover:-bottom-12\r
              transition-all duration-300 ease-out whitespace-nowrap\r
              backdrop-blur-sm border border-white/10\r
              pointer-events-none z-20\r
            `,children:[e.label,r.jsx("div",{className:"absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black/90 rotate-45"})]})]},e.key)})})};export{h as default};
