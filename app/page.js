import Image from "next/image";
import Link from 'next/link';
import Scroll from "@/components/scroll";


export default function Home() {

  <Scroll/>
  
  return (

    <>
      <img src="/img/home/home-decoration-header-gradient-blur-2.svg" className="absolute -right-5 -top-12 blur-[140px]" />

      {/* Sezione header */}
      <section className="mt-20 md:mt-40">


        {/* container header */}
        <div className="container max-w-4xl flex flex-col gap-8 px-6 relative mb-16">

          {/* gradient rosa */}
          <img src="/img/home/home-decoration-header-gradient-blur.svg"
            className="absolute -left-72 -bottom-20 blur-[140px] z-10" />
          {/* icone decorative */}
          <img src="/img/home/home-decoration-header-only-icons.svg" className="absolute -left-32 -top-20 z-10" />

          {/* scritte */}
          <h1 className="text-5xl font-serif font-semibold text-title">
            Design your new adventure with me
          </h1>
          <div className="max-w-2xl text-paragraph">
            <p className="text-2xl">
              Hi! I’m <span className="text-primary font-serif font-medium">PinkLaura</span>, a 🎨 <span
                className="font-serif ">designer</span> with a 💻 <span className="font-mono">computer science </span>
              background, passionate about using logic and empathy in my work.
            </p>
            <p className="text-2xl mt-2">
              I strive to create lovely designs that solve problems and bring clarity from complexity.
            </p>
          </div>

          {/* pulsanti vari */}
          <div className="flex gap-2">
            <button
              className="rounded-full py-3 px-6 text-white bg-primary_dark hover:bg-primary drop-shadow-pink hover:drop-shadow-pink_strong"
              href="#">
              Download resume
            </button>
            <button
              className="rounded-full p-3 bg-white hover:bg-background drop-shadow-pink hover:drop-shadow-pink_strong stroke-paragraph hover:stroke-primary_dark"
              href="#">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 8.99976L12 12.4998L17 8.99976" strokeLinecap="round" strokeLinejoin="round" />
                <path
                  d="M2 16.9998V6.99976C2 5.89519 2.89543 4.99976 4 4.99976H20C21.1046 4.99976 22 5.89519 22 6.99976V16.9998C22 18.1044 21.1046 18.9998 20 18.9998H4C2.89543 18.9998 2 18.1044 2 16.9998Z" />
              </svg>

            </button>

            <button
              className="rounded-full p-3 bg-white hover:bg-background drop-shadow-pink hover:drop-shadow-pink_strong stroke-paragraph hover:stroke-primary_dark"
              href="#">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M21 8.00024V16.0002C21 18.7616 18.7614 21.0002 16 21.0002H8C5.23858 21.0002 3 18.7616 3 16.0002V8.00024C3 5.23882 5.23858 3.00024 8 3.00024H16C18.7614 3.00024 21 5.23882 21 8.00024Z"
                  strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7 17.0002V13.5002V10.0002" strokeLinecap="round" strokeLinejoin="round" />
                <path
                  d="M11 17.0002V13.7502M11 13.7502V10.0002M11 13.7502C11 10.0002 17 10.0002 17 13.7502V17.0002"
                  strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7 7.01038L7.01 6.99927" stroke="#4D4D4D" strokeLinecap="round"
                  strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>


        {/* onda di separazione + scritte che si muovono */}
        <svg viewBox="0 0 1280 180" className="relative w-auto z-20 overflow-hidden font-serif md:text-sm text-4xl">


          <path className="blur-[16px] fill-white"
            d="M352 28.8202C198.4 26.3356 53.3333 79.5468 0 106.463V170.77H1280V0L1276.89 0.97566C1203.15 24.1219 1077.53 63.5535 925 79.2017C703 101.977 544 31.9259 352 28.8202Z" />


          <rect y="116" width="1280" height="64" fill="white" className="absolute -bottom-0" />



          <path id="curve"
            fill="transparent"
            d="M0 153.463C100.333 116.547 245.4 73.3356 399 75.8202C591 78.9259 750 148.977 972 126.202C1126.69 110.331 1253.71 69.9977 1327 47" />

          <text x="-25" styles="transform:translate3d(0,0,0);">
            <textPath styles="transform:translate3d(0,0,0); fill:rgba(0, 0, 0, 0.75)" alignmentBaseline="top"
              xlinkHref="#curve" startOffset="0px" id="text-path">
              Problematize ♡ Think ♡︎ Elaborate ♡︎ Research ♡︎ Ideate ♡︎ Design ♡︎ Explore ♡︎ Iterate ♡︎
              Problematize ♡ Think ♡︎ Elaborate ♡︎ Research ♡︎ Ideate ♡︎ Design ♡︎ Explore ♡︎ Iterate ♡︎
              Problematize ♡ Think ♡︎ Elaborate ♡︎ Research ♡︎ Ideate ♡︎ Design ♡︎ Explore ♡︎ Iterate ♡︎
              Problematize ♡ Think ♡︎ Elaborate ♡︎ Research ♡︎ Ideate ♡︎ Design ♡︎ Explore ♡︎ Iterate ♡︎
              Problematize ♡ Think ♡︎ Elaborate ♡︎ Research ♡︎ Ideate ♡︎ Design ♡︎ Explore ♡︎ Iterate ♡︎
              Problematize ♡ Think ♡︎ Elaborate ♡︎ Research ♡︎ Ideate ♡︎ Design ♡︎ Explore ♡︎ Iterate ♡︎
              Problematize ♡ Think ♡︎ Elaborate ♡︎ Research ♡︎ Ideate ♡︎ Design ♡︎ Explore ♡︎ Iterate ♡︎
              Problematize ♡ Think ♡︎ Elaborate ♡︎ Research ♡︎ Ideate ♡︎ Design ♡︎ Explore ♡︎ Iterate ♡︎
              Problematize ♡ Think ♡︎ Elaborate ♡︎ Research ♡︎ Ideate ♡︎ Design ♡︎ Explore ♡︎ Iterate ♡︎
              Problematize ♡ Think ♡︎ Elaborate ♡︎ Research ♡︎ Ideate ♡︎ Design ♡︎ Explore ♡︎ Iterate ♡︎
              Problematize ♡ Think ♡︎ Elaborate ♡︎ Research ♡︎ Ideate ♡︎ Design ♡︎ Explore ♡︎ Iterate ♡︎
              Problematize ♡ Think ♡︎ Elaborate ♡︎ Research ♡︎ Ideate ♡︎ Design ♡︎ Explore ♡︎ Iterate ♡︎
              Problematize ♡ Think ♡︎ Elaborate ♡︎ Research ♡︎ Ideate ♡︎ Design ♡︎ Explore ♡︎ Iterate ♡︎
            </textPath>
          </text>
        </svg>


      </section>

      {/* sezione How I work */}
      <section className="bg-white mb-6 pt-6 md:pt-0 z-20 relative">

        <div className="container px-6 max-w-4xl flex flex-col gap-10 relative">

          {/* gradient rosa */}
          <img src="/img/home/home-decoration-header-gradient-blur.svg"
            className="absolute left-56 -bottom-1 blur-[200px] scale-75" />

          <h2 className="font-serif text-title text-3xl text-center">How I work</h2>
          <div className="flex flex-col md:flex-row gap-6 items-stretch">

            {/* box 1 */}
            <div
              className="bg-white drop-shadow-2 p-6 dashed-border-m text-center rounded-xl flex flex-col items-center w-full">
              <img src="/img/home/how-i-work_data-driven.svg" className="mb-2 w-14" />
              <h3 className="font-serif text-title text-2xl">
                Data driven
              </h3>
              <p className="text-gray-500 text-base">
                I believe in informed decision-making: every choice must be backed up by data and strong
                reasoning.
              </p>
            </div>
            {/* box 2 */}
            <div
              className="bg-white drop-shadow-2 p-6 dashed-border-m text-center rounded-xl flex flex-col items-center w-full">
              <img src="/img/home/how-i-work_empathy.svg" className="mb-2 w-14" />
              <h3 className="font-serif text-title text-2xl">
                Empathy
              </h3>
              <p className="text-gray-500 text-base">
                Putting yourself in the user's shoes is fundamental to understanding what’s really going on.
              </p>
            </div>

            {/* box 3 */}
            <div
              className="bg-white drop-shadow-2 p-6 dashed-border-m text-center rounded-xl flex flex-col items-center w-full">
              <img src="/img/home/how-i-work_add-spice.svg" className="mb-2 w-14" />
              <h3 className="font-serif text-title text-2xl">
                Add spice
              </h3>
              <p className="text-gray-500 text-base">
                A little bit of creativity and an eye for aesthetics bring that extra magic to every
                project.
              </p>
            </div>


          </div>
        </div>
      </section>

      {/* Section Projects */}
      <section id="projects" className="bg-white mt-24">

        <div className="container px-6 max-w-4xl flex flex-col gap-4">

          {/* Title Projects */}
          <div className="flex flex-row items-center gap-8">
            <svg width="100%" height="2" viewBox="0 0 411 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1L411 1" stroke="url(#paint0_linear_404_70711)" />
              <defs>
                <linearGradient id="paint0_linear_404_70711" x1="0" y1="1.5" x2="411" y2="1.5"
                  gradientUnits="userSpaceOnUse">
                  <stop stopColor="white" />
                  <stop offset="0.25" />
                  <stop offset="0.75" stopColor="title" />
                  <stop offset="1" stopColor="white" />
                </linearGradient>
              </defs>
            </svg>
            <h2 className="font-serif text-title text-3xl text-center w-max">Projects</h2>
            <svg width="100%" height="2" viewBox="0 0 411 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1L411 1" stroke="url(#paint0_linear_404_70711)" />
              <defs>
                <linearGradient id="paint0_linear_404_70711" x1="0" y1="1.5" x2="411" y2="1.5"
                  gradientUnits="userSpaceOnUse">
                  <stop stopColor="white" />
                  <stop offset="0.25" />
                  <stop offset="0.75" stopColor="title" />
                  <stop offset="1" stopColor="white" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="flex flex-col md:gap-16 gap-12 my-6">

            {/* Progetto Leasy */}

            <div className="relative pb-8 pr-8">
              {/* gradient rosa */}
              <img src="/img/home/home-decoration-projects-gradient-blur-leasy.svg"
                className="absolute -right-24 -bottom-1 blur-[200px]" />

              <a href="#" className="block drop-shadow-1 rounded-3xl dashed-border-l-white overflow-hidden">
                <img src="/img/home/project-cover-leasy.png"
                  className="hover:scale-110 transition-all hidden md:block" />
                <img src="/img/home/project-cover-leasy-vertical.png"
                  className="hover:scale-110 transition-all block md:hidden" />
              </a>

              <div
                className="col-span-2 bg-gray-100 p-6 rounded-2xl md:w-2/5 w-11/12 absolute bottom-0 right-0 drop-shadow-[0_0_12px_rgba(142,145,241,1)] dashed-border-m">

                <h3 className="text-indigo-800 font-serif text-2xl font-semibold mb-1">Leasy</h3>
                <p className="text-paragraph">Construction of a property management platform, from ideation to
                  UI</p>
                <div className="flex-row align-right">
                  <a href="#"
                    className="text-gray-400 stroke-gray-400 text-xs flex items-center justify-end hover:text-indigo-800 hover:stroke-indigo-800">
                    See project
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.75 4.5L11.25 9L6.75 13.5" strokeLinecap="round"
                        strokeLinejoin="round" />
                    </svg>

                  </a>
                </div>

              </div>

            </div>

            <div className="flex flex-col md:flex-row gap-12 md:gap-16">
              <div className="flex flex-col gap-12 relative">

                {/* gradient giallo  */}
                <img src="/img/home/home-decoration-projects-gradient-blur-paypal.svg"
                  className="absolute -left-24 top-24 blur-[200px]" />


                {/* Progetto Paypal */}

                <div className="relative pb-8 pr-8">
                  <a href="#" className="block drop-shadow-1 rounded-3xl dashed-border-l-white overflow-hidden">
                    <img src="/img/home/project-cover-paypal.png" className="hover:scale-110 transition-all" />
                  </a>

                  <div
                    className="col-span-2 bg-gray-100 p-6 rounded-2xl md:w-3/4 w-11/12  absolute bottom-0 right-0 drop-shadow-[0_0_12px_rgba(208,183,103,1)] dashed-border-m">

                    <h3 className="text-yellow-700 font-serif text-2xl font-semibold mb-1">PayPal</h3>
                    <p className="text-paragraph">UX analysis of strengh and weakness of the Paypal app</p>
                    <div className="flex-row align-right">
                      <a href="#"
                        className="text-gray-400 stroke-gray-400 text-xs flex items-center justify-end hover:text-yellow-700 hover:stroke-yellow-700">
                        See project
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.75 4.5L11.25 9L6.75 13.5" strokeLinecap="round"
                            strokeLinejoin="round" />
                        </svg>

                      </a>
                    </div>

                  </div>
                </div>

                {/* Progetto Skyscanner */}

                <div className="relative pb-8 pr-8">
                  <a href="#" className="block drop-shadow-1 rounded-3xl dashed-border-l-white overflow-hidden">
                    <img src="/img/home/project-cover-skyscanner.png"
                      className="hover:scale-110 transition-all" />
                  </a>

                  <div
                    className="col-span-2 bg-gray-100 p-6 rounded-2xl md:w-3/4 w-11/12  absolute bottom-0 right-0 drop-shadow-[0_0_12px_rgba(96,156,236,1)] dashed-border-m">

                    <h3 className="text-sky-800 font-serif text-2xl font-semibold mb-1">Skyscanner</h3>
                    <p className="text-paragraph">UX analysis and redesign of some screens of the flights search
                      function.</p>
                    <div className="flex-row align-right">
                      <a href="#"
                        className="text-gray-400 stroke-gray-400 text-xs flex items-center justify-end hover:text-sky-800 hover:stroke-sky-800">
                        See project
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.75 4.5L11.25 9L6.75 13.5" strokeLinecap="round"
                            strokeLinejoin="round" />
                        </svg>

                      </a>
                    </div>

                  </div>
                </div>

              </div>

              <div className="flex flex-col gap-12 relative">

                {/* gradient rosa */}
                <img src="/img/home/home-decoration-projects-gradient-blur-archive.svg"
                  className="absolute -right-48 -bottom-10 blur-[200px] z-10" />

                {/* Progetto Retake */}

                <div className="relative pb-8 pr-8">
                  <a href="#" className="block drop-shadow-1 rounded-3xl dashed-border-l-white overflow-hidden">
                    <img src="/img/home/project-cover-retake.png" className="hover:scale-110 transition-all" />
                  </a>

                  <div
                    className="col-span-2 bg-gray-100 p-6 rounded-2xl md:w-3/4 w-11/12 absolute bottom-0 right-0 drop-shadow-[0_0_12px_rgba(232,193,125,1)] dashed-border-m">

                    <h3 className="text-amber-700 font-serif text-2xl font-semibold mb-1">Retake</h3>
                    <p className="text-paragraph">UX and UI for an AI photo generator app</p>
                    <div className="flex-row align-right">
                      <a href="#"
                        className="text-gray-400 stroke-gray-400 text-xs flex items-center justify-end hover:text-amber-700 hover:stroke-amber-700">
                        See project
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.75 4.5L11.25 9L6.75 13.5" strokeLinecap="round"
                            strokeLinejoin="round" />
                        </svg>

                      </a>
                    </div>

                  </div>
                </div>


                {/* Progetto Archive */}

                <div className="relative pb-8 pr-8">
                  <a href="#" className="block drop-shadow-1 rounded-3xl dashed-border-l-white overflow-hidden">
                    <img src="/img/home/project-cover-archive.png" className="hover:scale-110 transition-all" />
                  </a>

                  <div
                    className="col-span-2 bg-gray-100 p-6 rounded-2xl md:w-3/4 w-11/12 absolute bottom-0 right-0 drop-shadow-[0_0_12px_rgba(229,105,146,1)] dashed-border-m">

                    <h3 className="text-pink-700 font-serif text-2xl font-semibold mb-1">Archive</h3>
                    <p className="text-paragraph">A list of all my projects and drafts, since university.</p>
                    <div className="flex-row align-right">
                      <a href="#"
                        className="text-gray-400 stroke-gray-400 text-xs flex items-center justify-end hover:text-pink-700 hover:stroke-pink-700">
                        See project
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.75 4.5L11.25 9L6.75 13.5" strokeLinecap="round"
                            strokeLinejoin="round" />
                        </svg>

                      </a>
                    </div>

                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ondina di apertura */}
      <svg width="100%" viewBox="0 0 1280 82" xmlns="http://www.w3.org/2000/svg" className="relative z-20">
        <path className="fill-pink-50"
          d="M335.75 20.2446C189.241 19.1404 50.8712 42.7898 0 54.7525V82H1281V0C1251.43 0 1094.05 32.5141 882.297 42.6364C670.546 52.7587 518.886 21.6249 335.75 20.2446Z"
          fill="bg-pink-50" />
      </svg>


      {/* Section About me */}
      <section id="about-me" className="bg-gradient-to-b from-pink-50 from-25% to-white relative z-40">

        <div className="container p-6 max-w-4xl flex flex-col md:gap-8 gap-4">
          <h2 className="text-primary_dark text-3xl font-serif font-medium">About me</h2>

          {/* 3 badges */}
          <div className="flex md:flex-row flex-col md:gap-8 gap-4 md:items-center text-title text-lg">
            <div className="flex flex-row gap-1 items-center">
              <svg className="-rotate-[10deg]  hover:rotate-[20deg] transition-all" width="53" height="53"
                viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_641_112963)">
                  <rect x="8.85205" y="8.85221" width="36" height="36" rx="8" fill="white"
                    shapeRendering="crispEdges" />
                  <path
                    d="M19.3521 30.1855V23.5189C19.3521 21.2177 21.2175 19.3522 23.5187 19.3522H30.1854C32.4866 19.3522 34.3521 21.2177 34.3521 23.5189V30.1855C34.3521 32.4867 32.4866 34.3522 30.1854 34.3522H23.5187C21.2175 34.3522 19.3521 32.4867 19.3521 30.1855Z"
                    stroke="#FF008A" strokeWidth="0.833333" strokeLinecap="round" />
                  <path
                    d="M30.6021 28.9355C30.6021 28.9355 29.3521 30.6022 26.8521 30.6022C24.3521 30.6022 23.1021 28.9355 23.1021 28.9355"
                    stroke="#FF008A" strokeWidth="0.833333" strokeLinecap="round"
                    strokeLinejoin="round" />
                  <path
                    d="M23.9357 25.1855C23.7056 25.1855 23.519 24.999 23.519 24.7689C23.519 24.5388 23.7056 24.3522 23.9357 24.3522C24.1658 24.3522 24.3524 24.5388 24.3524 24.7689C24.3524 24.999 24.1658 25.1855 23.9357 25.1855Z"
                    fill="#FF008A" stroke="#FF008A" strokeWidth="0.833333" strokeLinecap="round"
                    strokeLinejoin="round" />
                  <path
                    d="M29.7687 25.1855C29.5386 25.1855 29.3521 24.999 29.3521 24.7689C29.3521 24.5388 29.5386 24.3522 29.7687 24.3522C29.9988 24.3522 30.1854 24.5388 30.1854 24.7689C30.1854 24.999 29.9988 25.1855 29.7687 25.1855Z"
                    fill="#FF008A" stroke="#FF008A" strokeWidth="0.833333" strokeLinecap="round"
                    strokeLinejoin="round" />
                </g>
                <defs>
                  <filter id="filter0_d_641_112963" x="0.852051" y="0.852207" width="52" height="52"
                    filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="4" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix"
                      result="effect1_dropShadow_641_112963" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_641_112963"
                      result="shape" />
                  </filter>
                </defs>
              </svg>
              Laura Nesossi
            </div>


            <div className="flex flex-row gap-1 items-center">
              <svg className="rotate-[5deg] hover:-rotate-[20deg] transition-all" width="53" height="53"
                viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_641_112969)">
                  <rect x="8.20508" y="8.50031" width="36" height="36" rx="8" fill="white"
                    shapeRendering="crispEdges" />
                  <path
                    d="M32.8714 24.8335C32.8714 28.5155 26.2048 34.8335 26.2048 34.8335C26.2048 34.8335 19.5381 28.5155 19.5381 24.8335C19.5381 21.1516 22.5229 18.1669 26.2048 18.1669C29.8867 18.1669 32.8714 21.1516 32.8714 24.8335Z"
                    stroke="#38BDF8" strokeWidth="0.833333" strokeLinecap="round" />
                  <path
                    d="M26.2054 25.667C26.6657 25.667 27.0387 25.2939 27.0387 24.8336C27.0387 24.3734 26.6657 24.0003 26.2054 24.0003C25.7452 24.0003 25.3721 24.3734 25.3721 24.8336C25.3721 25.2939 25.7452 25.667 26.2054 25.667Z"
                    fill="#38BDF8" stroke="#38BDF8" strokeWidth="0.833333" strokeLinecap="round"
                    strokeLinejoin="round" />
                </g>
                <defs>
                  <filter id="filter0_d_641_112969" x="0.205078" y="0.500309" width="52" height="52"
                    filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="4" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix"
                      result="effect1_dropShadow_641_112969" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_641_112969"
                      result="shape" />
                  </filter>
                </defs>
              </svg>
              Milan, Italy
            </div>

            <div className="flex flex-row gap-1 items-center">
              <svg className="-rotate-[5deg] hover:rotate-[20deg] transition-all" width="53" height="53"
                viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_641_112973)">
                  <rect x="8.20557" y="8.50031" width="36" height="36" rx="8" fill="white"
                    shapeRendering="crispEdges" />
                  <path
                    d="M19.5386 30.2503V33.167C19.5386 34.0875 20.2848 34.8336 21.2052 34.8336H31.2052C32.1257 34.8336 32.8719 34.0875 32.8719 33.167V30.2503"
                    stroke="#EAB308" strokeWidth="0.833333" strokeLinecap="round"
                    strokeLinejoin="round" />
                  <path
                    d="M18.7056 28.1669V27.3335C18.7056 26.413 19.4518 25.6669 20.3722 25.6669H32.0389C32.9594 25.6669 33.7056 26.413 33.7056 27.3335V28.1669"
                    stroke="#EAB308" strokeWidth="0.833333" strokeLinecap="round"
                    strokeLinejoin="round" />
                  <path d="M26.2056 23.1669V25.6669" stroke="#EAB308" strokeWidth="0.833333"
                    strokeLinecap="round" strokeLinejoin="round" />
                  <path
                    d="M26.2052 23.1669C27.2572 23.1669 27.8719 22.3601 27.8719 20.9794C27.8719 19.5987 26.2052 18.1669 26.2052 18.1669C26.2052 18.1669 24.5386 19.5987 24.5386 20.9794C24.5386 22.3601 25.1532 23.1669 26.2052 23.1669Z"
                    stroke="#EAB308" strokeWidth="0.833333" strokeLinecap="round"
                    strokeLinejoin="round" />
                  <path
                    d="M23.7056 28.1669C23.7056 29.5476 22.5863 30.6669 21.2056 30.6669C19.8249 30.6669 18.7056 29.5476 18.7056 28.1669"
                    stroke="#EAB308" strokeWidth="0.833333" strokeLinecap="round"
                    strokeLinejoin="round" />
                  <path
                    d="M28.7056 28.1669C28.7056 29.5476 27.5863 30.6669 26.2056 30.6669C24.8248 30.6669 23.7056 29.5476 23.7056 28.1669"
                    stroke="#EAB308" strokeWidth="0.833333" strokeLinecap="round"
                    strokeLinejoin="round" />
                  <path
                    d="M33.7056 28.1669C33.7056 29.5476 32.5863 30.6669 31.2056 30.6669C29.8248 30.6669 28.7056 29.5476 28.7056 28.1669"
                    stroke="#EAB308" strokeWidth="0.833333" strokeLinecap="round"
                    strokeLinejoin="round" />
                </g>
                <defs>
                  <filter id="filter0_d_641_112973" x="0.205566" y="0.500309" width="52" height="52"
                    filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="4" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix"
                      result="effect1_dropShadow_641_112973" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_641_112973"
                      result="shape" />
                  </filter>
                </defs>
              </svg>
              20/12/1997
            </div>
          </div>

          {/* White container */}
          <div
            className="flex md:flex-row flex-col-reverse gap-6 p-6 mr-8 text-paragraph bg-white rounded-3xl drop-shadow-2 md:mr-12 mt-36 md:mt-0">
            <div>
              <p className="mb-2">
                During my bachelor's degree in computer science, I realized that my <b>empathy and ability to
                  connect with others</b> weren't being fully utilized.
              </p>
              <p className="mb-2">
                This sparked a growing interest in the psychology of communication and <b>user experience</b>,
                which
                led me to pursue a master's degree focused on these areas.
              </p>
              <p className="mb-2">
                Over the past three years, I’ve deepened my understanding of user psychology and research
                processes, while also improving my design skills across different company environments.
              </p>
              <p>
                Now, <b>I’m excited to take on new challenges</b> and push myself with innovative projects.
              </p>
            </div>

            {/* Empty container for photo */}

            <div className="relative">
              <div className="block md:w-[152px] md:h-full h-[144px] w-full"></div>
            </div>

            {/* Absolute Photo */}
            <img src="/img/home/photo-laura.png"
              className="drop-shadow-1 rounded-3xl dashed-border-m-white absolute -top-32 md:top-auto md:bottom-8 md:-right-12 w-[216px] hover:scale-x-[-1] transition-all duration-700" />
          </div>

        </div>


        {/* Container recensioni*/}
        <div className="container p-6 max-w-4xl flex flex-col gap-8 ">

          <h3 className="text-2xl text-title font-serif font-semibold">Someone said that... </h3>
          <div className="flex flex-col md:flex-row gap-6">

            {/* Recensione 1 */}
            <div className="bg-white drop-shadow-1 p-6 dashed-border-m rounded-xl flex flex-col w-full gap-1">
              <h4 className="font-serif text-title text-sm">
                Nome qualcuno
              </h4>
              <h4 className="font-serif text-primary_dark text-base font-medium">
                Nome qualcuno
              </h4>
              <p className="text-gray-400 text-sm">
                Laura has always been beyond expectations.
                She knows what leads to a good product and does her research properly before diving into design.
                Her method clears up many questions from reviewers' minds and gives trust in her work.
              </p>
              <a href="#" className="mt-1 text-primary_dark/50 text-sm hover:text-primary">
                See more
              </a>
            </div>

            {/* Recensione 2 */}
            <div className="bg-white drop-shadow-1 p-6 dashed-border-m rounded-xl flex flex-col w-full gap-1">
              <h4 className="font-serif text-title text-sm">
                Nome qualcuno
              </h4>
              <h4 className="font-serif text-primary_dark text-base font-medium">
                Nome qualcuno
              </h4>
              <p className="text-gray-400 text-sm">
                Laura has always been beyond expectations.
                She knows what leads to a good product and does her research properly before diving into design.
                Her method clears up many questions from reviewers' minds and gives trust in her work.
              </p>
              <a href="#" className="mt-1 text-primary_dark/50 text-sm hover:text-primary">
                See more
              </a>
            </div>

            {/* Recensione 3 */}
            <div className="bg-white drop-shadow-1 p-6 dashed-border-m rounded-xl flex flex-col w-full gap-1">
              <h4 className="font-serif text-title text-sm">
                Nome qualcuno
              </h4>
              <h4 className="font-serif text-primary_dark text-base font-medium">
                Nome qualcuno
              </h4>
              <p className="text-gray-400 text-sm">
                Laura has always been beyond expectations.
                She knows what leads to a good product and does her research properly before diving into design.
                Her method clears up many questions from reviewers' minds and gives trust in her work.
              </p>
              <a href="#" className="mt-1 text-primary_dark/50 text-sm hover:text-primary">
                See more
              </a>
            </div>
          </div>
        </div>

      </section>

      {/* ondina di chiusura */}

      <svg width="100%" viewBox="0 0 1280 83" xmlns="http://www.w3.org/2000/svg"
        className="relative -top-[1px] z-50 fill-white">
        <path
          d="M945.25 62.4597C1091.76 63.564 1230.13 39.9146 1281 27.9518V0.704346H0V82.7043C29.5688 82.7043 186.952 50.1902 398.703 40.0679C610.454 29.9456 762.114 61.0794 945.25 62.4597Z" />
      </svg>




      <section className="bg-white relative z-20">
        {/* gradient rosa */}
        <img src="/img/home/home-decoration-header-gradient-blur.svg"
          className="absolute left-72 -top-60  blur-[180px] z-10" />
        {/* gradient rosa */}
        <img src="/img/home/home-decoration-header-gradient-blur.svg"
          className="absolute -right-32 -top-40 scale-50 blur-[140px] z-10" />

      </section>

    </>

  );
}

