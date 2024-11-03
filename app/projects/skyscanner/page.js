import Carousel from "@/components/image-slider";

export default function skyscannerProject() {
    return (

        <div className="mt-16 mb-8">

            {/* gradiente decorativo */}
            <img src="https://pinklaura.github.io/my-portfolio/img/projects/skyscanner/gradient-skyscanner.svg"
                className="blur-[140px] absolute -top-24 -left-24 z-10" />


            <div className="container max-w-6xl px-6 my-10 flex flex-col gap-8 relative">

                {/* icona */}
                <div className="w-min p-[18px] rounded-[18px] drop-shadow-[0_0_9px_rgba(0,0,0,0.25)] bg-white stroke-sky-500 relative z-20 
            hover:rotate-12 hover:scale-110 transition-all">

                    <svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_1092_22570)">
                            <path d="M7.49947 9.34151L11.6482 14.9811C11.8321 15.231 11.8742 15.5581 11.7597 15.8465L6.90596 28.0715C6.7915 28.3599 6.83366 28.687 7.01748 28.9369L7.81657 30.0231C8.16358 30.4948 8.86138 30.5148 9.23477 30.0638L15.653 22.3121C16.0264 21.8611 16.7242 21.8811 17.0712 22.3528L19.7015 25.9283C19.8554 26.1375 19.9114 26.4027 19.8554 26.6561L18.9253 30.8602C18.728 31.7522 19.8314 32.3368 20.4585 31.6725L23.8658 28.0636C23.94 27.985 24.028 27.9203 24.1251 27.8729L28.5848 25.6944C29.4055 25.2936 29.176 24.0662 28.2657 23.9889L23.9753 23.6252C23.7168 23.6034 23.4802 23.4709 23.3263 23.2617L20.696 19.6862C20.349 19.2145 20.5376 18.5424 21.0794 18.3202L30.3904 14.5007C30.9321 14.2785 31.1207 13.6064 30.7737 13.1347L29.9746 12.0485C29.7908 11.7986 29.4911 11.661 29.1817 11.6844L16.066 12.6786C15.7566 12.702 15.4569 12.5644 15.273 12.3145L11.1243 6.67492C10.3879 5.67395 8.97952 5.45947 7.97858 6.19581C6.97765 6.93214 6.76311 8.34054 7.49947 9.34151Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1092_22570">
                                <rect width="36" height="36" fill="white" transform="translate(0.25)" />
                            </clipPath>
                        </defs>
                    </svg>




                </div>

                {/* titoli */}
                <h1 className="text-title text-6xl font-serif font-medium">Skyscanner flights feature redesign</h1>
                <h2 className="text-sky-600 text-lg font-medium font-serif uppercase">User flow map and redesign</h2>


                {/* paragrafo */}
                <div className="text-paragraph relative z-20 md:w-10/12">
                    <p>For this two-day task, I was asked to analyze the "search flight" flow in the Skyscanner app, identify UX issues and provide design solutions.

                    </p>

                    <h3 className="font-serif font-medium text-lg mt-4 mb-1 text-title"> Approach</h3>
                    <p className="mb-2">
                        I started by creating a user flow map to capture all potential paths, providing a comprehensive overview of the "search flight" feature. From there, I focused on the main flow, analyzing each step to identify potential issues. This process revealed several UX problems, along with inconsistencies in the visual design that detracted from clarity and ease of use.
                    </p>
                    <p className="mb-2">
                        To address these issues, I redesigned the entire flow with a cohesive visual style, focusing on the screens that were visually misaligned and addressing the usability issues I identified. The updated flow now offers a more cohesive and intuitive user experience.
                    </p>

                    <div className="flex flex-row gap-4 mt-6">

                        <div className="group relative z-30 flex">
                            <a

                                className=" w-max rounded-full p-3 bg-white hover:bg-background drop-shadow-2 hover:drop-shadow-1 stroke-paragraph hover:stroke-sky-600"
                                href="https://www.figma.com/file/Iccwhj1nBOE7O2PhRR67hZ/Skyscanner-Analysis?type=whiteboard&node-id=20-603&t=mKcSUO7IzZU7IE8e-4" target="blank">

                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.36461 19.7879L11.6678 13.2962C11.8573 13.1278 12.1427 13.1278 12.3322 13.2962L19.6354 19.7879C20.0155 20.1258 19.707 20.7495 19.2078 20.6524L12.0954 19.2695C12.0324 19.2572 11.9676 19.2572 11.9046 19.2695L4.79223 20.6524C4.29293 20.7495 3.98444 20.1258 4.36461 19.7879Z" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M19 6.5H16C16 6.5 12 6.5 12 10.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M15.5 9L19 6.5L15.5 4" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                            </a>


                            <div data-tooltip="tooltip"
                                class="hidden tooltip group-hover:block absolute z-40 bottom-full mb-2 left-1/2 -translate-x-1/4 w-max  whitespace-normal break-words rounded-lg bg-paragraph py-1.5 px-3 font-sans text-sm text-white ">
                                Open flow map
                            </div>
                        </div>


                        <div className="group relative z-30 flex">
                            <a
                                data-tooltip-target="tooltip" data-ripple-light="true"
                                className="rounded-full p-3 bg-white hover:bg-background drop-shadow-2 hover:drop-shadow-1 stroke-paragraph hover:stroke-sky-600"
                                href="https://www.figma.com/proto/rJxbAlaFoK2Ck4U8SXC2jO/Skyscanner-Analysis?page-id=35%3A3122&type=design&node-id=35-3638&viewport=565%2C381%2C0.07&scaling=scale-down&starting-point-node-id=35%3A3638" target="blank">

                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 6C6 5.20435 6.31607 4.44129 6.87868 3.87868C7.44129 3.31607 8.20435 3 9 3H12V9H9C8.20435 9 7.44129 8.68393 6.87868 8.12132C6.31607 7.55871 6 6.79565 6 6Z" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 3H15C15.394 3 15.7841 3.0776 16.1481 3.22836C16.512 3.37913 16.8427 3.6001 17.1213 3.87868C17.3999 4.15726 17.6209 4.48797 17.7716 4.85195C17.9224 5.21593 18 5.60603 18 6C18 6.39397 17.9224 6.78407 17.7716 7.14805C17.6209 7.51203 17.3999 7.84274 17.1213 8.12132C16.8427 8.3999 16.512 8.62087 16.1481 8.77164C15.7841 8.9224 15.394 9 15 9H12V3Z" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 12C12 11.606 12.0776 11.2159 12.2284 10.8519C12.3791 10.488 12.6001 10.1573 12.8787 9.87868C13.1573 9.6001 13.488 9.37913 13.8519 9.22836C14.2159 9.0776 14.606 9 15 9C15.394 9 15.7841 9.0776 16.1481 9.22836C16.512 9.37913 16.8427 9.6001 17.1213 9.87868C17.3999 10.1573 17.6209 10.488 17.7716 10.8519C17.9224 11.2159 18 11.606 18 12C18 12.394 17.9224 12.7841 17.7716 13.1481C17.6209 13.512 17.3999 13.8427 17.1213 14.1213C16.8427 14.3999 16.512 14.6209 16.1481 14.7716C15.7841 14.9224 15.394 15 15 15C14.606 15 14.2159 14.9224 13.8519 14.7716C13.488 14.6209 13.1573 14.3999 12.8787 14.1213C12.6001 13.8427 12.3791 13.512 12.2284 13.1481C12.0776 12.7841 12 12.394 12 12Z" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6 18C6 17.2044 6.31607 16.4413 6.87868 15.8787C7.44129 15.3161 8.20435 15 9 15H12V18C12 18.7956 11.6839 19.5587 11.1213 20.1213C10.5587 20.6839 9.79565 21 9 21C8.20435 21 7.44129 20.6839 6.87868 20.1213C6.31607 19.5587 6 18.7956 6 18Z" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6 12C6 11.2044 6.31607 10.4413 6.87868 9.87868C7.44129 9.31607 8.20435 9 9 9H12V15H9C8.20435 15 7.44129 14.6839 6.87868 14.1213C6.31607 13.5587 6 12.7956 6 12Z" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>


                            </a>


                            <div data-tooltip="tooltip"
                                class="hidden tooltip group-hover:block absolute z-40 bottom-full mb-2 left-1/2 -translate-x-1/4 w-max  whitespace-normal break-words rounded-lg bg-paragraph py-1.5 px-3 font-sans text-sm text-white ">
                                Explore prototipe on Figma
                            </div>
                        </div>




                    </div>
                </div>


                <Carousel images={slides} />
            </div>
        </div>
    );
}


const slides = [


    {
        src: "https://pinklaura.github.io/my-portfolio/img/projects/skyscanner/skyscanner-cover.webp",
        alt: "slide 1"
    },

    {
        src: "https://pinklaura.github.io/my-portfolio/img/projects/skyscanner/slide-02.webp",
        alt: "slide 2"

    },

    {
        src: "https://pinklaura.github.io/my-portfolio/img/projects/skyscanner/slide-03.webp",
        alt: "slide 3"
    },

    {
        src: "https://pinklaura.github.io/my-portfolio/img/projects/skyscanner/slide-04.webp",
        alt: "slide 4"
    },

    {
        src: "https://pinklaura.github.io/my-portfolio/img/projects/skyscanner/slide-05.webp",
        alt: "slide 5"
    },

    {
        src: "https://pinklaura.github.io/my-portfolio/img/projects/skyscanner/slide-06.webp",
        alt: "slide 6"
    },

    {
        src: "https://pinklaura.github.io/my-portfolio/img/projects/skyscanner/slide-07.webp",
        alt: "slide 7"

    },

    {
        src: "https://pinklaura.github.io/my-portfolio/img/projects/skyscanner/slide-08.webp",
        alt: "slide 8"
    },

    {
        src: "https://pinklaura.github.io/my-portfolio/img/projects/skyscanner/slide-09.webp",
        alt: "slide 9"
    },

    {
        src: "https://pinklaura.github.io/my-portfolio/img/projects/skyscanner/slide-10.webp",
        alt: "slide 10"
    },

    {
        src: "https://pinklaura.github.io/my-portfolio/img/projects/skyscanner/slide-11.webp",
        alt: "slide 11"
    },

    {
        src: "https://pinklaura.github.io/my-portfolio/img/projects/skyscanner/slide-12.webp",
        alt: "slide 12"

    },

    {
        src: "https://pinklaura.github.io/my-portfolio/img/projects/skyscanner/slide-13.webp",
        alt: "slide 13"
    },

    {
        src: "https://pinklaura.github.io/my-portfolio/img/projects/skyscanner/slide-14.webp",
        alt: "slide 14"
    },

    {
        src: "https://pinklaura.github.io/my-portfolio/img/projects/skyscanner/slide-15.webp",
        alt: "slide 15"
    },

    {
        src: "https://pinklaura.github.io/my-portfolio/img/projects/skyscanner/slide-16.webp",
        alt: "slide 16"
    },

]