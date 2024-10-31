import Carousel from "@/components/image-slider";

export default function skyscannerProject() {
    return (

        <div className="mt-16 mb-8">

            <div className="container max-w-6xl px-6 my-10 flex flex-col gap-8 relative">

                {/* gradiente decorativo */}
                <img src="https://pinklaura.github.io/my-portfolio/img/projects/skyscanner/gradient-skyscanner.svg"
                    className="blur-[140px] absolute -top-24 -left-24 z-10" />

                {/* icona */}
                <div className="w-min p-[18px] rounded-[18px] drop-shadow-[0_0_9px_rgba(0,0,0,0.25)] bg-white stroke-sky-500 relative z-20 
            hover:rotate-12 hover:scale-110 transition-all">

                    <svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_1092_22570)">
                            <path d="M7.49947 9.34151L11.6482 14.9811C11.8321 15.231 11.8742 15.5581 11.7597 15.8465L6.90596 28.0715C6.7915 28.3599 6.83366 28.687 7.01748 28.9369L7.81657 30.0231C8.16358 30.4948 8.86138 30.5148 9.23477 30.0638L15.653 22.3121C16.0264 21.8611 16.7242 21.8811 17.0712 22.3528L19.7015 25.9283C19.8554 26.1375 19.9114 26.4027 19.8554 26.6561L18.9253 30.8602C18.728 31.7522 19.8314 32.3368 20.4585 31.6725L23.8658 28.0636C23.94 27.985 24.028 27.9203 24.1251 27.8729L28.5848 25.6944C29.4055 25.2936 29.176 24.0662 28.2657 23.9889L23.9753 23.6252C23.7168 23.6034 23.4802 23.4709 23.3263 23.2617L20.696 19.6862C20.349 19.2145 20.5376 18.5424 21.0794 18.3202L30.3904 14.5007C30.9321 14.2785 31.1207 13.6064 30.7737 13.1347L29.9746 12.0485C29.7908 11.7986 29.4911 11.661 29.1817 11.6844L16.066 12.6786C15.7566 12.702 15.4569 12.5644 15.273 12.3145L11.1243 6.67492C10.3879 5.67395 8.97952 5.45947 7.97858 6.19581C6.97765 6.93214 6.76311 8.34054 7.49947 9.34151Z"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
                    <p>
                        I started by creating a user flow map to capture all potential paths, providing a comprehensive overview of the "search flight" feature. From there, I focused on the main flow, analyzing each step to identify potential issues. This process revealed several UX problems, along with inconsistencies in the visual design that detracted from clarity and ease of use.
                    </p>
                    <p>
                        To address these issues, I redesigned the entire flow with a cohesive visual style, focusing on the screens that were visually misaligned and addressing the usability issues I identified. The updated flow now offers a more cohesive and intuitive user experience.
                    </p>
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