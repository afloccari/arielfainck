import{j as e}from"./index-B_JqyiKX.js";import{F as i}from"./index-DzxOX9wK.js";const m=({artista:t,album:a,fotoFondo:r,socialLinks:o})=>{const n=o?.spotify||"#";return e.jsxs("section",{className:"relative min-h-[calc(100vh-70px)] md:min-h-[calc(100vh-80px)] flex items-center justify-center bg-cover bg-no-repeat overflow-hidden hero-bg-position",style:{backgroundImage:`url(${r})`},children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black/90 backdrop-blur-[1px] pointer-events-none"}),e.jsxs("div",{className:"relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 w-full max-w-6xl mx-auto",children:[e.jsx("p",{className:"text-sm sm:text-base md:text-lg lg:text-xl uppercase tracking-[0.3em] sm:tracking-[0.4em] opacity-90 mb-2 sm:mb-3 font-light",children:t}),e.jsx("h1",{className:"text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black uppercase tracking-wide mb-6 sm:mb-8 md:mb-12 leading-tight sm:leading-tight",children:a}),e.jsxs("a",{href:n,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center justify-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl active:translate-y-0 active:shadow-lg border border-orange-400/30 min-w-[200px] sm:min-w-[240px] mx-auto group relative overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 z-0"}),e.jsxs("span",{className:"whitespace-nowrap z-10 relative inline-flex items-center gap-2",children:[e.jsx(i,{fontSize:20,className:"mb-0.5"}),"ESCUCHAR EN SPOTIFY"]})]})]}),e.jsx("style",{jsx:!0,children:`
        .hero-bg-position {
          background-position: center 25%;
        }
        
        @media (max-width: 768px) and (orientation: portrait) {
          .hero-bg-position {
            background-position: center 20%;
          }
        }
        
        @media (max-width: 768px) and (orientation: landscape) {
          .hero-bg-position {
            background-position: center 15%;
          }
        }
        
        @media (min-width: 1024px) {
          .hero-bg-position {
            background-position: center 30%;
          }
        }
      `})]})};export{m as default};
