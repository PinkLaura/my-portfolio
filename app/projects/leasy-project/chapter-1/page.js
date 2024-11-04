import Image from "next/image";
import LeasyHeaderSection from "@/components/leasy-header-section";
import LeasyParagraph from "@/components/leasy-paragraph";

export default function LeasyChapter3() {
    return (

        <>
            <LeasyHeaderSection
                icon={
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.499 25.5005L31.499 31.5005" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <path d="M4.49902 16.499C4.49902 23.1265 9.8716 28.499 16.499 28.499C19.8185 28.499 22.8232 27.1513 24.9956 24.973C27.1606 22.8023 28.499 19.807 28.499 16.499C28.499 9.8716 23.1265 4.49902 16.499 4.49902C9.8716 4.49902 4.49902 9.8716 4.49902 16.499Z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </svg>


                }
                title={"Product Discovery"}
                number={'1'}
                paragraphs={
                    <>
                        <p className="mb-2">
                            When the company initially decided to pivot, I was asked to facilitate the decision-making process regarding the new product.
                        </p>
                        <p>
                            While the COO focused on understanding product-market fit and the business aspects, I helped <b>identify gaps in the rental digital environment</b>.
                        </p>
                    </>
                }
            />

            <section>
                <div className="container max-w-6xl px-6 md:my-32 flex flex-col md:gap-24 gap-12 relative">

                    {/* Conducting workshops */}
                    <div className="flex flex-col md:flex-row md:justify-between gap-6">

                        <div className="md:w-7/12">
                            <LeasyParagraph
                                title={"From FidoRent to... what?"}
                                subtitle={"brainstorming and analysis"}
                                text={
                                    <>
                                        <p className="mb-2">
                                            As a first step, we identified the strengths we already had—from technology and knowledge to user experience, digitalization, and domain expertise in the real estate and rental market.                                         </p>
                                        <p className="mb-2">
                                            We needed to <b>leverage this expertise</b> to bring value to our users.                                        </p>
                                    </>
                                }
                            />
                        </div>

                        <img src="https://pinklaura.github.io/my-portfolio/img/projects/leasy/chapter-1/knowledge.svg"
                            className="md:w-4/12" />

                    </div>

                    {/* Conducting workshops pt2 */}
                    <div className="flex flex-col md:flex-row md:justify-between gap-6">

                        <img src="https://pinklaura.github.io/my-portfolio/img/projects/leasy/chapter-1/tenant-drivers.png"
                            className="md:w-5/12 " />

                        <div className="md:w-6/12">
                            <LeasyParagraph
                                text={
                                    <>
                                        <p className="mb-2">
                                            Initially, we focused on the tenant side of the rental market.
                                        </p>
                                        <p className="mb-2">
                                            After identifying a few potential solutions through brainstorming, we analyzed their value for both users and our business.
                                        </p>
                                        <p>
                                            However, after gathering data, <b>we realized that the real opportunity lay with landlords and property managers</b>.
                                        </p>
                                    </>
                                }
                            />

                            <div className="relative bg-indigo-100 p-6 pr-14 rounded-xl dashed-border-m drop-shadow-2 text-paragraph mt-12">

                                <div className="absolute -top-2 -right-2 p-3 bg-white drop-shadow-2 -rotate-[15deg] stroke-leasy rounded-[8px] overflow-hidden">
                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.69702 15.6969C13.5717 15.6969 15.697 13.6459 15.697 8.6969C15.697 13.6459 17.8074 15.6969 22.697 15.6969C17.8074 15.6969 15.697 17.8073 15.697 22.6969C15.697 17.8073 13.5717 15.6969 8.69702 15.6969Z" strokeLinejoin="round" />
                                        <path d="M2.69702 7.1969C5.83078 7.1969 7.19702 5.87843 7.19702 2.6969C7.19702 5.87843 8.55371 7.1969 11.697 7.1969C8.55371 7.1969 7.19702 8.55359 7.19702 11.6969C7.19702 8.55359 5.83078 7.1969 2.69702 7.1969Z" strokeLinejoin="round" />
                                    </svg>


                                </div>

                                We decided to provide a solution to <b>simplify the life of big landlords and property managers</b>.
                            </div>
                        </div>

                    </div>

                    {/* Flow */}
                    <div className="flex flex-col md:flex-row md:justify-between items-center gap-6">

                        <div className="md:w-6/12">
                            <LeasyParagraph
                                title={"What does a property manager do?"}
                                subtitle={"research and journey mapping"}
                                text={
                                    <>
                                        <p className="mb-2">
                                            My personal knowledge of the property manager's role was limited, so I conducted research to gain a deeper understanding of the field.
                                        </p>
                                        <p className="mb-2">
                                            I studied market reports and data, and we conducted a survey to explore how Italian property managers perceive their roles and the activities they perform.
                                        </p>
                                        <p>
                                            After the research, I created a <b>map of all the activities a property manager undertakes</b> to identify the most promising <b>opportunities for automation and digitalization</b>
                                        </p>
                                    </>
                                }
                            />
                        </div>

                        <img src="https://pinklaura.github.io/my-portfolio/img/projects/leasy/chapter-1/process.svg"
                            className="md:w-5/12 drop-shadow-2 " />

                    </div>

                    <img src="https://pinklaura.github.io/my-portfolio/img/projects/leasy/chapter-1/features-map.svg" />

                    {/* screen */}
                    <div className="flex flex-col gap-8">

                        <div className="md:w-10/12">
                            <LeasyParagraph
                                title={"What there is out there?"}
                                subtitle={"Competitors analysis"}
                                text={
                                    <>
                                        <p className="mb-2">
                                            Last but not least, I <b>researched and compared the most significant competitors</b>: Italian companies to identify market gaps and American platforms—representing a more advanced market—for inspiration.                                         </p>
                                        <p>
                                            To better understand the software actually used by property managers, I conducted a deep dive into <b>Facebook groups</b> and discussions regarding software and property management issues.                                        </p>
                                    </>
                                }
                            />
                        </div>

                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="w-full flex flex-col gap-4 text-center">
                                <img src="https://pinklaura.github.io/my-portfolio/img/projects/leasy/chapter-1/facebook.png"
                                    className="w-full" />
                                <p className="text-base text-gray-400 italic">
                                    Screenshots from Facebook groups
                                </p>
                            </div>

                            <div className="w-full flex flex-col gap-4 text-center">
                                <img src="https://pinklaura.github.io/my-portfolio/img/projects/leasy/chapter-1/competitors.png"
                                    className="w-full" />
                                <p className="text-base text-gray-400 italic">
                                    Competitors analysis
                                </p>
                            </div>

                        </div>

                    </div>

                    {/* Final decision */}
                    <div className="flex flex-col md:flex-row md:justify-between items-center gap-6">

                        <div className="md:w-6/12">
                            <LeasyParagraph
                                title={"Final decision"}
                                subtitle={"MVP scope defining"}
                                text={
                                    <>
                                        <p>
                                            We decided to build a rent management platform to assist property managers and landlords with both financial and administrative tasks.
                                        </p>
                                    </>
                                }
                            />
                        </div>


                        <div className="relative bg-indigo-100 p-6 pr-14 rounded-xl dashed-border-m drop-shadow-2 text-paragraph md:w-5/12">

                            <div className="absolute -top-2 -right-2 p-3 bg-white drop-shadow-2 -rotate-[15deg] stroke-leasy rounded-[8px] overflow-hidden">
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.69702 15.6969C13.5717 15.6969 15.697 13.6459 15.697 8.6969C15.697 13.6459 17.8074 15.6969 22.697 15.6969C17.8074 15.6969 15.697 17.8073 15.697 22.6969C15.697 17.8073 13.5717 15.6969 8.69702 15.6969Z" strokeLinejoin="round" />
                                    <path d="M2.69702 7.1969C5.83078 7.1969 7.19702 5.87843 7.19702 2.6969C7.19702 5.87843 8.55371 7.1969 11.697 7.1969C8.55371 7.1969 7.19702 8.55359 7.19702 11.6969C7.19702 8.55359 5.83078 7.1969 2.69702 7.1969Z" strokeLinejoin="round" />
                                </svg>


                            </div>

                            For the MVP, we decided to concentrate on a single feature that could deliver value in multiple ways for both tenants and landlords: <b>automated rent collection with reminders</b>.
                        </div>

                    </div>


                </div>
            </section>
        </>
    );
}