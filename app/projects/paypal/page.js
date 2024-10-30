import Carousel from "@/components/image-slider";

export default function PaypalProject() {
    return (

        <div className="mt-16 mb-8">

            <div className="container max-w-6xl px-6 my-10 flex flex-col gap-8 relative">

                {/* gradiente decorativo */}
                <img src="https://pinklaura.github.io/my-portfolio/img/projects/paypal/gradient-paypal.svg"
                    className="blur-[140px] absolute -top-24 -left-24 z-10" />

                {/* icona */}
                <div className="w-min p-[18px] rounded-[18px] drop-shadow-[0_0_9px_rgba(0,0,0,0.25)] bg-white stroke-yellow-500 relative z-20 
            hover:rotate-12 hover:scale-110 transition-all">

                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.5 26.25L9 4.5H19.5C28.5 4.5 28.5 18 19.5 18H13.05L11.25 26.25H4.5Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M10.2002 31.5L14.7002 9.75H25.2001C34.2001 9.75 34.2001 23.25 25.2001 23.25H18.7501L16.9501 31.5H10.2002Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>



                </div>

                {/* titoli */}
                <h1 className="text-title text-6xl font-serif font-medium">PayPal UX Analysis</h1>
                <h2 className="text-yellow-600 text-lg font-medium font-serif uppercase">Heuristic evaluation, user test and redesign</h2>


                {/* paragrafo */}
                <div className="text-paragraph relative z-20 md:w-10/12">
                    <p>In this project, I conducted a 3-day UX analysis of two key user flows in the PayPal app — one well-designed and one with usability challenges. The goal was to present findings and recommendations concisely in a 5-slide deck.</p>

                    <h3 className="font-serif font-medium text-lg mt-4 mb-1 text-title"> Approach</h3>
                    <p>To evaluate the usability of each flow, I conducted a <b>heuristic evaluation</b> followed by quick <b>user testing sessions</b>. This approach allowed me to identify both strengths and weaknesses effectively within a limited timeframe.</p>
                    <p>In the final slides, I contextualized the company’s design choices and proposed an <b>alternative solution</b> to enhance usability, focusing on improved flow clarity and accessibility for a smoother user experience.</p>
                </div>


                <Carousel images={slides} />
            </div>
        </div>
    );
}


const slides = [
    

    {
        image: <img src="https://pinklaura.github.io/my-portfolio/img/projects/paypal/paypal-cover.png" alt="slide 1" />,
        src: "https://pinklaura.github.io/my-portfolio/img/projects/paypal/paypal-cover.png",
        alt: "slide 1"
    },
    
    {
        image: <img src="https://pinklaura.github.io/my-portfolio/img/projects/paypal/slide-02.webp" alt="slide 2" />,
        src: "https://pinklaura.github.io/my-portfolio/img/projects/paypal/slide-02.webp",
        alt: "slide 2"

    },

    {
        image: <img src="https://pinklaura.github.io/my-portfolio/img/projects/paypal/slide-03.webp" alt="slide 3" />,
        src: "https://pinklaura.github.io/my-portfolio/img/projects/paypal/slide-03.webp",
        alt: "slide 3"
    },

    {
        image: <img src="https://pinklaura.github.io/my-portfolio/img/projects/paypal/slide-04.webp" alt="slide 4" />,
        src: "https://pinklaura.github.io/my-portfolio/img/projects/paypal/slide-04.webp",
        alt: "slide 4"
    },

    {
        image: <img src="https://pinklaura.github.io/my-portfolio/img/projects/paypal/slide-05.webp" alt="slide 5" />,
        src: "https://pinklaura.github.io/my-portfolio/img/projects/paypal/slide-05.webp",
        alt: "slide 5"
    },

    {
        image: <img src="https://pinklaura.github.io/my-portfolio/img/projects/paypal/slide-06.webp" alt="slide 6" />,
        src: "https://pinklaura.github.io/my-portfolio/img/projects/paypal/slide-06.webp",
        alt: "slide 6"
    }
]