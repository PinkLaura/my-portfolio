import Link from "next/link";

export default function NextProject({ image, title, text, src}) {
    return (
        <section className="w-full bg-gray-50 py-6">
            <div className="container max-w-6xl	px-6 my-10" >


                <div className="bg-white rounded-3xl p-6 flex md:flex-row flex-col gap-3 drop-shadow-1 relative z-20 items-center">

                    <img src={image}
                        className="rounded-xl dashed-border-m-white w-1/4 aspect-4/3" />

                    <div className="flex flex-col gap-1 px-3 w-full">
                        <h4 className="text-sm text-gray-400 uppercase mb-2"> Another project? </h4>
                        <h4 className="text-2xl text-title font-serif mb-2"> {title} </h4>
                        <div className="text-base text-paragraph">
                            {text}
                        </div>

                        <div className="flex-row align-right mt-3">
                            <Link href= {src}
                                className="text-gray-400 stroke-gray-400 text-sm flex items-center justify-end hover:text-title hover:stroke-title">
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
        </section>
    );
}

