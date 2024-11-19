import Carousel from "@/components/image-slider";
import NextProject from "@/components/next-project";


export default function PaypalProject() {
    return (

        <>
            <div className="mt-16 mb-8 relative z-10">

                {/* gradiente decorativo */}
                <img src="https://pinklaura.github.io/my-portfolio/img/projects/paypal/gradient-paypal.svg"
                    className="blur-[140px] absolute -top-24 -left-24 z-10" />

                <div className="container max-w-6xl px-6 my-10 flex flex-col gap-8 relative">

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

                        <div className="flex flex-row gap-4 mt-6">

                            <div className="group relative z-30 flex">
                                <a

                                    className=" w-max rounded-full p-3 bg-white hover:bg-background drop-shadow-2 hover:drop-shadow-1 stroke-paragraph hover:stroke-yellow-600"
                                    href="https://www.figma.com/file/htICbrPfzDQ1B4WpYRE5ll/PayPal-x-Satispay---Research-Notes?node-id=0%3A1&t=OLtAIqPvi22YQe81-1" target="blank">

                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 14H16" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M8 10H10" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M8 18H12" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M10 3H6C4.89543 3 4 3.89543 4 5V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V5C20 3.89543 19.1046 3 18 3H14.5M10 3V1M10 3V5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>

                                </a>


                                <div data-tooltip="tooltip"
                                    class="hidden tooltip group-hover:block absolute z-40 bottom-full mb-2 left-1/2 -translate-x-1/4 w-max  whitespace-normal break-words rounded-lg bg-paragraph py-1.5 px-3 font-sans text-sm text-white ">
                                    Check research notes
                                </div>
                            </div>


                        </div>

                    </div>


                    <Carousel images={slides} />
                </div>
            </div>


            <NextProject
                image={"https://pinklaura.github.io/my-portfolio/img/projects/skyscanner-cover.png"}
                src={"./skyscanner"}
                title={"Skyscanner UX Analysis"}
                text={
                    <>

                        <p>
                            For this two-day task, I was asked to analyze the "search flight" flow in the Skyscanner app, identify UX issues and provide design solutions.                        </p>

                    </>}
            />
        </>
    );
}


const slides = [


    {
        src: "https://pinklaura.github.io/my-portfolio/img/projects/paypal/paypal-cover.webp",
        alt: "slide 1"
    },

    {
        src: "https://pinklaura.github.io/my-portfolio/img/projects/paypal/slide-02.webp",
        alt: "slide 2"

    },

    {
        src: "https://pinklaura.github.io/my-portfolio/img/projects/paypal/slide-03.webp",
        alt: "slide 3"
    },

    {
        src: "https://pinklaura.github.io/my-portfolio/img/projects/paypal/slide-04.webp",
        alt: "slide 4"
    },

    {
        src: "https://pinklaura.github.io/my-portfolio/img/projects/paypal/slide-05.webp",
        alt: "slide 5"
    },

    {
        src: "https://pinklaura.github.io/my-portfolio/img/projects/paypal/slide-06.webp",
        alt: "slide 6"
    }
]