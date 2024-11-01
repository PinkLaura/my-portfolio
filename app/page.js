'use client'

import Image from "next/image";
import Link from 'next/link';
import { useEffect, useRef } from 'react'
import lottie from 'lottie-web';
import TabsComponent from "@/components/tabs";


export default function Home() {

  useEffect(() => {
    //movimento testo ondina
    const textPath = document.querySelector("#text-path");

    const h = document.documentElement,
      b = document.body,
      st = 'scrollTop',
      sh = 'scrollHeight';

    document.addEventListener("scroll", e => {
      let percent = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
      textPath.setAttribute("startOffset", (-percent * 5))
    }
    );
  }, [])


  return (

    <>
      <img src="./img/home/home-decoration-header-gradient-blur-2.svg" className="absolute -right-5 -top-12 blur-[140px]" />

      {/* Sezione header */}
      <section className="mt-32 md:mt-40">


        {/* container header */}
        <div className="container max-w-4xl flex flex-col gap-8 px-6 relative mb-16">

          {/* gradient rosa */}
          <img src="./img/home/home-decoration-header-gradient-blur.svg"
            className="absolute -left-72 -bottom-20 blur-[140px] z-10" />
          {/* icone decorative */}
          <Image src="./img/home/home-decoration-header-only-icons.svg" width={140} height={240} alt="icone decorative con immagini relative al design" className="absolute -left-32 -top-20 z-10" />

          {/* scritte */}
          <h1 className="text-5xl font-serif font-semibold text-title">
            Design your new adventure with me
          </h1>
          <div className="max-w-2xl text-paragraph">
            <p className="text-2xl">
              Hi! I’m <span className="text-primary font-serif font-medium">Laura</span>, a 🎨 <span
                className="font-serif ">designer</span> with a 💻 <span className="font-mono">computer science </span>
              background, passionate about using logic and empathy in my work.
            </p>
            <p className="text-2xl mt-2">
              I strive to create lovely designs that solve problems and bring clarity from complexity.
            </p>
          </div>

          {/* pulsanti vari */}
          <div className="flex md:gap-2 gap-6 md:flex-row flex-col w-max relative z-20">

            {/* pulsante rosa */}
            <button
              className="rounded-full py-3 px-6 text-white bg-primary_dark hover:bg-primary drop-shadow-pink hover:drop-shadow-pink_strong"
              href="#">
              Download resume
            </button>

            {/* pulsanti icone e immagine */}
            <div className="relative flex flex-row gap-2 ">

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


              {/* Freccina */}

              <img src="./img/home/want-to-know-more.svg" className="absolute max-w-40 md:-right-[11rem] -right-[7rem]" />
            </div>
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
          <img src="./img/home/home-decoration-header-gradient-blur.svg"
            className="absolute left-56 -bottom-1 blur-[200px] scale-75" />

          <h2 className="font-serif text-title text-3xl text-center">How I work</h2>
          <div className="flex flex-col md:flex-row gap-6 items-stretch">

            {/* box 1 */}
            <div
              className="bg-white drop-shadow-2 p-6 dashed-border-m text-center rounded-xl flex flex-col items-center w-full">
              <img src="./img/home/how-i-work_data-driven.svg" className="mb-2 w-14" />
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
              <img src="./img/home/how-i-work_empathy.svg" className="mb-2 w-14" />
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
              <img src="./img/home/how-i-work_add-spice.svg" className="mb-2 w-14" />
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
              <img src="./img/home/home-decoration-projects-gradient-blur-leasy.svg"
                className="absolute -right-24 -bottom-1 blur-[200px]" />

              <Link href="./projects/leasy-project/chapter-5" className="block drop-shadow-1 rounded-3xl dashed-border-l-white overflow-hidden">
                <img src="./img/home/project-cover-leasy.png" alt="leasy-project-cover"
                  className="hover:scale-110 transition-all hidden md:block" />
                <img src="./img/home/project-cover-leasy-vertical.png"
                  className="hover:scale-110 transition-all block md:hidden" />
              </Link>

              <div
                className="col-span-2 bg-gray-100 p-6 rounded-2xl md:w-2/5 w-11/12 absolute bottom-0 right-0 drop-shadow-[0_0_12px_rgba(142,145,241,1)] dashed-border-m">

                <h3 className="text-indigo-800 font-serif text-2xl font-semibold mb-1">Leasy</h3>
                <p className="text-paragraph">Construction of a property management platform, from ideation to
                  UI</p>
                <div className="flex-row align-right">
                  <Link href="./projects/leasy-project/chapter-5"
                    className="text-gray-400 stroke-gray-400 text-xs flex items-center justify-end hover:text-indigo-800 hover:stroke-indigo-800">
                    See project
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                      xmlns="http://www.w3.org/2000/svg" >
                      <path d="M6.75 4.5L11.25 9L6.75 13.5" strokeLinecap="round"
                        strokeLinejoin="round" />
                    </svg>

                  </Link>
                </div>

              </div>

            </div>

            <div className="flex flex-col md:flex-row gap-12 md:gap-16">
              <div className="flex flex-col gap-12 relative">

                {/* gradient giallo  */}
                <img src="./img/home/home-decoration-projects-gradient-blur-paypal.svg"
                  className="absolute -left-24 top-24 blur-[200px]" />


                {/* Progetto Paypal */}

                <div className="relative pb-8 pr-8">
                  <Link href="./projects/paypal" className="block drop-shadow-1 rounded-3xl dashed-border-l-white overflow-hidden">
                    <img src="./img/home/project-cover-paypal.png" className="hover:scale-110 transition-all" />
                  </Link>

                  <div
                    className="col-span-2 bg-gray-100 p-6 rounded-2xl md:w-3/4 w-11/12  absolute bottom-0 right-0 drop-shadow-[0_0_12px_rgba(208,183,103,1)] dashed-border-m">

                    <h3 className="text-yellow-700 font-serif text-2xl font-semibold mb-1">PayPal</h3>
                    <p className="text-paragraph">UX analysis of strengh and weakness of the Paypal app</p>
                    <div className="flex-row align-right">
                      <Link href="./projects/paypal"
                        className="text-gray-400 stroke-gray-400 text-xs flex items-center justify-end hover:text-yellow-700 hover:stroke-yellow-700">
                        See project
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.75 4.5L11.25 9L6.75 13.5" strokeLinecap="round"
                            strokeLinejoin="round" />
                        </svg>

                      </Link>
                    </div>

                  </div>
                </div>

                {/* Progetto Skyscanner */}

                <div className="relative pb-8 pr-8">
                  <Link href="./projects/skyscanner" className="block drop-shadow-1 rounded-3xl dashed-border-l-white overflow-hidden">
                    <img src="./img/home/project-cover-skyscanner.png"
                      className="hover:scale-110 transition-all" />
                  </Link>

                  <div
                    className="col-span-2 bg-gray-100 p-6 rounded-2xl md:w-3/4 w-11/12  absolute bottom-0 right-0 drop-shadow-[0_0_12px_rgba(96,156,236,1)] dashed-border-m">

                    <h3 className="text-sky-800 font-serif text-2xl font-semibold mb-1">Skyscanner</h3>
                    <p className="text-paragraph">UX analysis and redesign of some screens of the flights search
                      function.</p>
                    <div className="flex-row align-right">
                      <Link href="./projects/skyscanner" className="text-gray-400 stroke-gray-400 text-xs flex items-center justify-end hover:text-sky-800 hover:stroke-sky-800">
                        See project
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.75 4.5L11.25 9L6.75 13.5" strokeLinecap="round"
                            strokeLinejoin="round" />
                        </svg>

                      </Link>
                    </div>

                  </div>
                </div>

              </div>

              <div className="flex flex-col gap-12 relative">

                {/* gradient rosa */}
                <img src="./img/home/home-decoration-projects-gradient-blur-archive.svg"
                  className="absolute -right-48 -bottom-10 blur-[200px] z-10" />

                {/* Progetto Retake */}

                <div className="relative pb-8 pr-8">
                  <Link href="./projects/retake" className="block drop-shadow-1 rounded-3xl dashed-border-l-white overflow-hidden">
                    <img src="./img/home/project-cover-retake.png" className="hover:scale-110 transition-all" />
                  </Link>

                  <div
                    className="col-span-2 bg-gray-100 p-6 rounded-2xl md:w-3/4 w-11/12 absolute bottom-0 right-0 drop-shadow-[0_0_12px_rgba(232,193,125,1)] dashed-border-m">

                    <h3 className="text-amber-700 font-serif text-2xl font-semibold mb-1">Retake</h3>
                    <p className="text-paragraph">UX and UI for an AI photo generator app</p>
                    <div className="flex-row align-right">
                      <Link href="./projects/retake"
                        className="text-gray-400 stroke-gray-400 text-xs flex items-center justify-end hover:text-amber-700 hover:stroke-amber-700">
                        See project
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.75 4.5L11.25 9L6.75 13.5" strokeLinecap="round"
                            strokeLinejoin="round" />
                        </svg>

                      </Link>
                    </div>

                  </div>
                </div>


                {/* Progetto Archive */}

                <div className="relative pb-8 pr-8">
                  <Link href="https://pinklaura.github.io/portfolio/projects/all-projects.html" target="blank" className="block drop-shadow-1 rounded-3xl dashed-border-l-white overflow-hidden">
                    <img src="./img/home/project-cover-archive.png" className="hover:scale-110 transition-all" />
                  </Link>

                  <div
                    className="col-span-2 bg-gray-100 p-6 rounded-2xl md:w-3/4 w-11/12 absolute bottom-0 right-0 drop-shadow-[0_0_12px_rgba(229,105,146,1)] dashed-border-m">

                    <h3 className="text-pink-700 font-serif text-2xl font-semibold mb-1">Archive</h3>
                    <p className="text-paragraph">A list of all my projects and drafts, since university.</p>
                    <div className="flex-row align-right">
                      <Link href="https://pinklaura.github.io/portfolio/projects/all-projects.html" target="blank"
                        className="text-gray-400 stroke-gray-400 text-xs flex items-center justify-end hover:text-pink-700 hover:stroke-pink-700">
                        See project
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.75 4.5L11.25 9L6.75 13.5" strokeLinecap="round"
                            strokeLinejoin="round" />
                        </svg>

                      </Link>
                    </div>

                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section >

      {/* ondina di apertura */}
      < svg width="100%" viewBox="0 0 1280 82" xmlns="http://www.w3.org/2000/svg" className="relative z-20" >
        <path className="fill-pink-50"
          d="M335.75 20.2446C189.241 19.1404 50.8712 42.7898 0 54.7525V82H1281V0C1251.43 0 1094.05 32.5141 882.297 42.6364C670.546 52.7587 518.886 21.6249 335.75 20.2446Z"
          fill="bg-pink-50" />
      </svg >


      {/* Section About me */}
      < section id="about-me" className="bg-gradient-to-b from-pink-50 from-25% to-white relative z-40" >

        {/* Container introduzione */}
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
            className="flex md:flex-row flex-col-reverse gap-6 p-6 text-paragraph bg-white rounded-3xl drop-shadow-2 md:mr-12 mt-36 md:mt-0">
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
            <img src="./img/home/photo-laura.png"
              className="drop-shadow-1 rounded-3xl dashed-border-m-white absolute -top-32 md:top-auto md:bottom-8 md:-right-12 w-[216px] hover:scale-x-[-1] transition-all duration-700" />
          </div>

        </div>

        {/* Container curiosità e contatti*/}
        <div className="container p-6 max-w-4xl flex flex-col gap-8 text-background/80 ">

          <div className="w-full md:justify-between flex md:flex-row flex-col gap-6 items-end">

            {/* Contatti */}
            <div className="bg-[url('https://pinklaura.github.io/my-portfolio/img/home/contacts-bg.png')] bg-cover rounded-xl drop-shadow-1 dashed-border-l-white md:w-5/12 w-full p-6 md:-rotate-[6deg] relative md:top-4">
              <h3 className="font-serif font-medium text-lg mb-3" >Contacts</h3>

              <div className="flex flex-row gap-2 items-center text-base mb-2">
                <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.25 7.45422L9 10.0792L12.75 7.45422" stroke="white" stroke-width="0.75" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M1.5 13.4542V5.95422C1.5 5.1258 2.17157 4.45422 3 4.45422H15C15.8284 4.45422 16.5 5.1258 16.5 5.95422V13.4542C16.5 14.2827 15.8284 14.9542 15 14.9542H3C2.17157 14.9542 1.5 14.2827 1.5 13.4542Z" stroke="white" stroke-width="0.75" />
                </svg>
                <a href="mailto:laura_nesossi@protonmail.com">laura_nesossi@protonmail.com</a>
              </div>

              <div className="flex flex-row gap-2 items-center text-base mb-2">
                <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.75 6.70459V12.7046C15.75 14.7756 14.071 16.4546 12 16.4546H6C3.92893 16.4546 2.25 14.7756 2.25 12.7046V6.70459C2.25 4.63352 3.92893 2.95459 6 2.95459H12C14.071 2.95459 15.75 4.63352 15.75 6.70459Z" stroke="white" stroke-width="0.75" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M5.25 13.4546V10.8296V8.20459" stroke="white" stroke-width="0.75" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8.25 13.4546V11.0171M8.25 11.0171V8.20459M8.25 11.0171C8.25 8.20459 12.75 8.20459 12.75 11.0171V13.4546" stroke="white" stroke-width="0.75" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M5.25 5.96219L5.2575 5.95386" stroke="white" stroke-width="0.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

                <a href="https://www.linkedin.com/in/laura-nesossi/">laura-nesossi</a>
              </div>

              <div className="flex flex-row gap-2 items-center text-base">
                <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.5886 11.7309L10.5 12.3294C8.41372 11.2823 7.12499 10.0794 6.37499 8.20441L6.95246 5.10683L5.86088 2.20441H3.04769C2.20203 2.20441 1.5361 2.90324 1.6624 3.73942C1.97771 5.82691 2.90739 9.61178 5.62499 12.3294C8.47889 15.1833 12.5893 16.4217 14.8515 16.9139C15.7251 17.1041 16.5 16.4225 16.5 15.5285V12.8403L13.5886 11.7309Z" stroke="white" stroke-width="0.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

                <a href="tel:+393317232837">+39 331 7232837</a>
              </div>

            </div>

            <h3 className="text-2xl text-title font-serif font-semibold text-right">Want to know more? <br />
              Here are some fun facts... </h3>

          </div>

          <div className="flex md:flex-row md:items-end flex-col gap-6 justify-between">

            {/* creativity from anywhere */}
            <div className="pt-4 pr-8 md:w-5/12 relative">
              <div className="p-6 pr-16 bg-white rounded-xl drop-shadow-2 border dashed-border-l">
                <h3 className="font-serif font-medium text-lg mb-2 text-title"> Creativity from anywhere</h3>
                <p className="text-paragraph text-sm">
                  I love to change the scenery: from my patio at home to a beach abroad, it always brings new energy and ideas to my design process.
                </p>
              </div>

              <img src="https://pinklaura.github.io/my-portfolio/img/home/image-travels.png"
                className="absolute bottom-4 right-0 md:h-3/4 h-36 rotate-3 drop-shadow-1 rounded-[8px] dashed-border-s-white" />
            </div>

            {/* Things I love tabs */}
            <TabsComponent items={interests} />

          </div>

          <div className="flex md:flex-row flex-col gap-6 w-full">
            {/* creativity from anywhere */}
            <div className="pl-8 md:w-7/12 relative min-w">

              <img src="https://pinklaura.github.io/my-portfolio/img/home/image-pink.png"
                className="z-30 absolute md:bottom-2 bottom-6 left-0 md:h-4/5 h-36 md:-rotate-3 -rotate-2 drop-shadow-1 rounded-[8px] dashed-border-s-white" />

              <div className="p-6 pl-16 bg-pink-50 rounded-xl drop-shadow-2 border dashed-border-l">
                <h3 className="font-serif font-medium text-lg mb-2 text-title"> Why PinkLaura?</h3>
                <p className="text-paragraph text-sm">
                  I've loved this colors since I was a kid: for me, anything pink is just more beautiful. I have so much pink stuff that it’s become part of my personality.
                  <br />But don’t worry - I design in every color of the rainbow!
                </p>
              </div>

            </div>

            {/* creativity from anywhere */}
            <div className="pr-8 md:w-5/12 relative">
              <div className="p-6 pr-16 bg-white rounded-xl drop-shadow-2 border dashed-border-l">
                <h3 className="font-serif font-medium text-lg mb-2 text-title"> Obsessed with my cat</h3>
                <p className="text-paragraph text-sm">
                  Are you trying to strike up a conversation? <br />Ask me about Celia, my miniature tiger!
                </p>
              </div>

              <img src="https://pinklaura.github.io/my-portfolio/img/home/image-celia.png"
                className="absolute top-1 right-0 h-36 rotate-3 drop-shadow-1 rounded-[8px] dashed-border-s-white" />
            </div>
          </div>

        </div>







        {/* Container recensioni*/}
        < div className="container p-6 max-w-4xl flex flex-col gap-8 " >

          <h3 className="text-2xl text-title font-serif font-semibold">Someone said that... </h3>
          <div className="flex flex-col md:flex-row gap-6">

            {/* Recensione 1 */}
            <div className="bg-white drop-shadow-1 p-6 dashed-border-m rounded-xl flex flex-col w-full gap-1">
              <h4 className="font-serif text-gray-400 text-sm">
                Harun Heybet
              </h4>
              <h4 className="font-serif text-primary_dark text-base font-medium">
                CTO & Dev Lead
              </h4>
              <p className="text-gray-500 text-sm">
                Laura has always been beyond expectations.
                <br />She knows what leads to a good product and does her research properly before diving into design.
                <br />Her method <b>clears up many questions</b> from reviewers' minds and gives trust in her work.
              </p>
              <a href="https://www.linkedin.com/in/laura-nesossi/details/recommendations/" className="mt-1 text-primary_dark/50 text-sm hover:text-primary">
                See more
              </a>
            </div>

            {/* Recensione 2 */}
            <div className="bg-white drop-shadow-1 p-6 dashed-border-m rounded-xl flex flex-col w-full gap-1">
              <h4 className="font-serif text-gray-400 text-sm">
                Federico Gallina
              </h4>
              <h4 className="font-serif text-primary_dark text-base font-medium">
                CEO & Product Manager
              </h4>
              <p className="text-gray-500 text-sm">
                Laura consistently <b>exceeded expectations</b> in her role.
                <br />Though her professional experience spans just three years, she displayed the <b>maturity, skill, and confidence of a seasoned designer</b>.
                I have no doubt that she will be a valuable asset to any team she joins.
              </p>
              <a href="https://www.linkedin.com/in/laura-nesossi/details/recommendations/" className="mt-1 text-primary_dark/50 text-sm hover:text-primary">
                See more
              </a>
            </div>

            {/* Recensione 3 */}
            <div className="bg-white drop-shadow-1 p-6 dashed-border-m rounded-xl flex flex-col w-full gap-1">
              <h4 className="font-serif text-gray-400 text-sm">
                Davide Vitale
              </h4>
              <h4 className="font-serif text-primary_dark text-base font-medium">
                COO & Co-founder
              </h4>
              <p className="text-gray-500 text-sm">
                Laura excels in her role as our designer.
                <br />Her CS background allows her to seamlessly blend design principles with technical understanding.
                <br />She consistently deliveres smart, <b>user-focused solutions that align perfectly with our technical requirements</b>.
              </p>
              <a href="https://www.linkedin.com/in/laura-nesossi/details/recommendations/" className="mt-1 text-primary_dark/50 text-sm hover:text-primary">
                See more
              </a>
            </div>
          </div>
        </div >

      </section >

      {/* ondina di chiusura */}

      < svg width="100%" viewBox="0 0 1280 83" xmlns="http://www.w3.org/2000/svg"
        className="relative -top-[1px] z-50 fill-white" >
        <path
          d="M945.25 62.4597C1091.76 63.564 1230.13 39.9146 1281 27.9518V0.704346H0V82.7043C29.5688 82.7043 186.952 50.1902 398.703 40.0679C610.454 29.9456 762.114 61.0794 945.25 62.4597Z" />
      </svg >


      <section className="bg-white relative z-20">
        {/* gradient rosa */}
        <img src="./img/home/home-decoration-header-gradient-blur.svg"
          className="absolute left-72 -top-60  blur-[180px] z-10" />
        {/* gradient rosa */}
        <img src="./img/home/home-decoration-header-gradient-blur.svg"
          className="absolute -right-32 -top-40 scale-50 blur-[140px] z-10" />


        {/* contattami */}
        < div className="container p-6 max-w-4xl flex md:w-auto w-full flex-col gap-8" >

          <div className="flex md:flex-row flex-col md:px-4 items-center bg-white rounded-lg dashed-border-m drop-shadow-2 z-20 my-16">
            <img className="" src="https://pinklaura.github.io/my-portfolio/img/home/airplane-decoration.svg" />

            <div className="p-8 justify-between flex md:flex-row md:gap-8 gap-4 flex-col w-full items-center">
              <div className="flex flex-col gap-1">
                <h2 className="text-xl font-serif text-title">
                  Want to chat?
                </h2>
                <p>
                  Whether you’re looking for a designer or just want to chat, feel free to reach out—I’d love to hear from you!
                </p>
              </div>

              {/* pulsante rosa */}
              <button
                className="flex w-full md:w-max  justify-center h-min rounded-full py-3 px-6 text-white bg-primary_dark hover:bg-primary drop-shadow-pink hover:drop-shadow-pink_strong"
                href="mailto:laura_nesossi@protonmail.com">
                Contact me
              </button>
            </div>
          </div>
        </div>

      </section>

    </>

  );
}


const interests = [
  {
    title: "events",
    content: (
      <div className="min-h-28 bg-indigo-50 rounded-[12px] border border-indigo-200 p-2 pt-4" >
        I love planning unique events for friends: from murder mystery dinners to medieval costume parties and escape rooms - there's always something lined up!
      </div >
    ),
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-indigo-400">
        <path d="M3.00049 21.0001L13.0005 11.0001M18.0005 6.00006L15.5005 8.50006" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.5 2L10.4453 4.55468L13 5.5L10.4453 6.44532L9.5 9L8.55468 6.44532L6 5.5L8.55468 4.55468L9.5 2Z" strokeLinejoin="round" />
        <path d="M19 10L19.5402 11.4598L21 12L19.5402 12.5402L19 14L18.4598 12.5402L17 12L18.4598 11.4598L19 10Z" strokeLinejoin="round" />
      </svg>
    ),
    color: "bg-indigo-50"
  },
  {
    title: "chocolate",
    content: (
      <div className="min-h-28 bg-yellow-50 rounded-[12px] border border-yellow-200 p-2 pt-4" >
        I'm completely hooked on chocolate—it’s my fuel for creativity and my go-to for just about everything!
      </div >
    ),
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.7998 6.5C16.7998 6.5 15.2998 6 15.2998 3L5.7998 3L5.7998 21H19.7998V6.5Z" stroke="#A16207" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19.7998 15H5.7998" stroke="#A16207" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.7998 9H19.7998" stroke="#A16207" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.7998 21V3" stroke="#A16207" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

    )
  },

  {
    title: "travels",
    content: (
      <div className="min-h-28 bg-pink-50 rounded-[12px] border border-pink-200 p-2 pt-4" >
        I love exploring new places and try to see something new every year— plus, I have a lot of fun putting together the perfect itinerary!
      </div >
    ),
    icon: (
      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.1001 4.5V9.16745C11.1001 9.37433 10.9935 9.56661 10.8181 9.67625L3.3821 14.3237C3.20667 14.4334 3.1001 14.6257 3.1001 14.8325V15.7315C3.1001 16.1219 3.46693 16.4083 3.84562 16.3136L10.3546 14.6864C10.7333 14.5917 11.1001 14.8781 11.1001 15.2685V18.2277C11.1001 18.4008 11.0254 18.5654 10.8952 18.6793L8.73491 20.5695C8.2766 20.9706 8.63818 21.7204 9.23734 21.6114L12.4928 21.0195C12.5637 21.0066 12.6365 21.0066 12.7074 21.0195L15.9629 21.6114C16.562 21.7204 16.9236 20.9706 16.4653 20.5695L14.305 18.6793C14.1748 18.5654 14.1001 18.4008 14.1001 18.2277V15.2685C14.1001 14.8781 14.4669 14.5917 14.8456 14.6864L21.3546 16.3136C21.7333 16.4083 22.1001 16.1219 22.1001 15.7315V14.8325C22.1001 14.6257 21.9935 14.4334 21.8181 14.3237L14.3821 9.67625C14.2067 9.56661 14.1001 9.37433 14.1001 9.16745V4.5C14.1001 3.67157 13.4285 3 12.6001 3C11.7717 3 11.1001 3.67157 11.1001 4.5Z" stroke="#EC4899" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

    )
  },

  {
    title: "nature",
    content: (
      <div className="min-h-28 bg-lime-50 rounded-[12px] border border-lime-200 p-2 pt-4" >
        As a former girl scout, nature is a huge source of joy for me. I adore camping and backpacking!
      </div >
    ),
    icon: (
      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.3999 2L7.3999 6.64286C7.3999 6.64286 10.4423 7 12.3999 7C14.3575 7 17.3999 6.64286 17.3999 6.64286L12.3999 2Z" stroke="#84CC16" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.8999 7L5.3999 10.9394C5.3999 10.9394 8.0249 12 12.3999 12C16.7749 12 19.3999 10.9394 19.3999 10.9394L15.8999 7" stroke="#84CC16" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.8999 11.5L3.3999 15.5231C3.3999 15.5231 6.0999 18 12.3999 18C18.6999 18 21.3999 15.5231 21.3999 15.5231L17.8999 11.5" stroke="#84CC16" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.3999 22V19" stroke="#84CC16" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

    )
  },

  {
    title: "books",
    content: (
      <div className="min-h-28 bg-cyan-50 rounded-[12px] border border-cyan-200 p-2 pt-4" >
        I’m a bookworm at heart, especially into fantasy and dystopian novels. I love getting lost in epic stories!
      </div >
    ),
    icon: (
      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.2002 19V5C4.2002 3.89543 5.09563 3 6.2002 3H19.6002C19.9316 3 20.2002 3.26863 20.2002 3.6V16.7143" stroke="#06B6D4" strokeLinecap="round" />
        <path d="M6.2002 17H20.2002" stroke="#06B6D4" strokeLinecap="round" />
        <path d="M6.2002 21H20.2002" stroke="#06B6D4" strokeLinecap="round" />
        <path d="M6.2002 21C5.09563 21 4.2002 20.1046 4.2002 19C4.2002 17.8954 5.09563 17 6.2002 17" stroke="#06B6D4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.2002 7H15.2002" stroke="#06B6D4" strokeLinecap="round" />
      </svg>

    )
  },

  {
    title: "chatting",
    content: (
      <div className="min-h-28 bg-amber-50 rounded-[12px] border border-amber-200 p-2 pt-4" >
        I have a knack for chatting! Whether it's sharing stories or diving into deep conversations, I just can’t help but keep the conversation going.
      </div >
    ),
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 12.5C17.2761 12.5 17.5 12.2761 17.5 12C17.5 11.7239 17.2761 11.5 17 11.5C16.7239 11.5 16.5 11.7239 16.5 12C16.5 12.2761 16.7239 12.5 17 12.5Z" fill="#F59E0B" stroke="#F59E0B" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 12.5C12.2761 12.5 12.5 12.2761 12.5 12C12.5 11.7239 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.7239 11.5 12C11.5 12.2761 11.7239 12.5 12 12.5Z" fill="#F59E0B" stroke="#F59E0B" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 12.5C7.27614 12.5 7.5 12.2761 7.5 12C7.5 11.7239 7.27614 11.5 7 11.5C6.72386 11.5 6.5 11.7239 6.5 12C6.5 12.2761 6.72386 12.5 7 12.5Z" fill="#F59E0B" stroke="#F59E0B" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.8214 2.48697 15.5291 3.33782 17L2.5 21.5L7 20.6622C8.47087 21.513 10.1786 22 12 22Z" stroke="#F59E0B" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

    )
  }
]

