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

                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.5 26.25L9 4.5H19.5C28.5 4.5 28.5 18 19.5 18H13.05L11.25 26.25H4.5Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M10.2002 31.5L14.7002 9.75H25.2001C34.2001 9.75 34.2001 23.25 25.2001 23.25H18.7501L16.9501 31.5H10.2002Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
        src: "https://pinklaura.github.io/my-portfolio/img/projects/skyscanner/skyscanner-cover.png",
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