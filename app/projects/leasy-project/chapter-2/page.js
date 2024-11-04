import Image from "next/image";
import LeasyHeaderSection from "@/components/leasy-header-section";
import LeasyParagraph from "@/components/leasy-paragraph";
import GrayIconNote from "@/components/gray-icon-note";


export default function LeasyChapter3() {
    return (

        <>
            <LeasyHeaderSection
                icon={
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_393_69677)">
                            <path d="M30.5508 4.15741L30.5517 4.15671C31.3223 3.5635 32.3917 3.62094 33.0992 4.29774C33.8141 4.98157 33.9511 6.09882 33.419 6.94111L24.1563 21.5932C24.1561 21.5935 24.1559 21.5938 24.1557 21.5941C23.4598 22.6869 22.3806 23.4346 21.1718 23.7046L15.0957 18.1102C15.1956 16.7039 15.885 15.4111 16.9897 14.5638L16.9898 14.5637L30.5508 4.15741ZM7.78053 27.042L7.78035 27.0403C7.76271 26.8689 7.75267 26.6925 7.75041 26.5148C8.58302 22.6851 10.282 21.1376 11.917 20.7431C13.6226 20.3316 15.5913 21.0846 17.0776 22.5232C18.5625 23.9604 19.3894 25.9118 19.0273 27.6704C18.679 29.3624 17.1609 31.1744 13.3148 32.2499H5.16659C4.58254 32.2499 4.08325 31.7638 4.08325 31.1249C4.08325 30.486 4.58254 29.9999 5.16659 29.9999H5.44159C6.24444 29.9999 6.87727 29.555 7.26809 28.9996C7.65533 28.4494 7.8504 27.7367 7.78053 27.042Z" strokeWidth="1.5" />
                        </g>
                        <defs>
                            <clipPath id="clip0_393_69677">
                                <rect width="33" height="30" fill="white" transform="translate(1.5 3)" />
                            </clipPath>
                        </defs>
                    </svg>


                }
                title={"Creating a Brand"}
                number={'2'}
                paragraphs={
                    <>
                        <p className="mb-2">
                            As we embarked on the journey to create our rent management platform, <b>establishing a strong brand identity became a crucial step</b> in connecting with our target audience and building a visual foundation before developing the product and marketing assets.
                        </p>
                        <p className="mb-2">
                            By carefully crafting our brand's visual elements, tone of voice, and overall messaging, we aimed to create a memorable and engaging experience for both property managers and landlords.                         </p>
                        <p>
                            This process involved <b>extensive research, workshops, and collaboration</b> to ensure that our brand not only resonates with our values and our users but also stands out in a competitive market.
                        </p>
                    </>
                }
            />

            <section>
                <div className="container max-w-6xl px-6 md:my-32 flex flex-col md:gap-24 gap-12 relative">

                    {/* Conducting workshops */}
                    <div className="flex flex-col md:flex-row md:justify-between gap-6">

                        <div className="md:w-5/12">
                            <LeasyParagraph
                                title={"Conducting workshop"}
                                subtitle={"the reasons behind the effort"}
                                text={
                                    <>
                                        <p className="mb-2">
                                            I started with two workshops to help the founders define their vision and <b>align everyone on what the brand should convey</b>.
                                        </p>
                                        <p className="mb-2">
                                            We discussed the company’s purpose and vision, and together we defined a list of core values along with our interpretations of each.
                                        </p>
                                    </>
                                }
                            />
                        </div>

                        <img src="https://pinklaura.github.io/my-portfolio/img/projects/leasy/chapter-2/workshop.png"
                            className="md:w-6/12 drop-shadow-2 dashed-border-m rounded-xl" />

                    </div>

                    {/* Values */}
                    <div className="flex flex-col gap-4 items-center">
                        <div className="text-l font-medium text-leasy font-serif">
                            Internal Values
                        </div>

                        <div className="flex md:flex-row flex-col gap-6">
                            <div className="w-full flex flex-col text-center p-4 gap-2 text-paragraph border border-dashed border-gray-200 bg-gradient-to-t from-gray-50 to-white rounded-xl">
                                <h4 className="text-lg font-semibold">🧩 Involvement</h4>
                                <p className="text-sm">
                                    Everyone is actively involved and feels accountable for successes and failures. We are not worried of being proactive and exceed expectations when it’s needed.
                                </p>
                            </div>

                            <div className="w-full flex flex-col text-center p-4 gap-2 text-paragraph border border-dashed border-gray-200 bg-gradient-to-t from-gray-50 to-white rounded-xl">
                                <h4 className="text-lg font-semibold">🌈 People First</h4>
                                <p className="text-sm">
                                    A great company is made up of happy people. We do our best as a company to meet everyone’s needs and differences, ensuring satisfied employees and fostering a positive culture.
                                </p>
                            </div>

                            <div className="w-full flex flex-col text-center p-4 gap-2 text-paragraph border border-dashed border-gray-200 bg-gradient-to-t from-gray-50 to-white rounded-xl">
                                <h4 className="text-lg font-semibold">🏹 Pragmatism</h4>
                                <p className="text-sm">
                                    Maximize efficiency and efficacy.<br />
                                    We strive to do our best but understanding circumstances and context, and we believe in an effective prioritization.
                                </p>
                            </div>

                            <div className="w-full flex flex-col text-center p-4 gap-2 text-paragraph border border-dashed border-gray-200 bg-gradient-to-t from-gray-50 to-white rounded-xl">
                                <h4 className="text-lg font-semibold">🫶🏼 Teamwork</h4>
                                <p className="text-sm">
                                    Results are achieved by teams, not individuals. We cultivate a collaborative environment where every contribution is valued, allowing diverse talents to support each other's growth.
                                </p>
                            </div>
                        </div>

                        <div className="text-l font-medium text-leasy font-serif mt-4">
                            External Values
                        </div>

                        <div className="flex md:flex-row flex-col gap-6">
                            <div className="w-full md:max-w-72 flex flex-col text-center p-4 gap-2 text-paragraph border border-dashed border-gray-200 bg-gradient-to-t from-gray-50 to-white rounded-xl">
                                <h4 className="text-lg font-semibold">🔍 User at the Center</h4>
                                <p className="text-sm">
                                    Our product is crafted on the real needs of our users.<br />
                                    We are obsessed with continuous feedback and strive to respond quickly to our customers’ changing exigency and market demands.                                </p>
                            </div>

                            <div className="w-full md:max-w-72  flex flex-col text-center p-4 gap-2 text-paragraph border border-dashed border-gray-200 bg-gradient-to-t from-gray-50 to-white rounded-xl">
                                <h4 className="text-lg font-semibold">🌻 Integrity</h4>
                                <p className="text-sm">
                                    We embrace the fundamental principle of being good people.<br />
                                    We prioritize honesty, integrity, and transparency, both in our products and internally within the company.
                                </p>
                            </div>

                            <div className="w-full md:max-w-72 flex flex-col text-center p-4 gap-2 text-paragraph border border-dashed border-gray-200 bg-gradient-to-t from-gray-50 to-white rounded-xl">
                                <h4 className="text-lg font-semibold">🚀 Innovation</h4>
                                <p className="text-sm">
                                    Only because everything has always been done a certain way, doesn’t mean it’s the best way.<br />
                                    We are ready to challenge traditions if we believe new technologies or approaches can bring value to the real estate market.
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* Brand persona */}
                    <div className="flex flex-col md:flex-row md:justify-between gap-6">

                        <div className="md:w-5/12">
                            <LeasyParagraph
                                title={"The birth of a brand persona"}
                                subtitle={"Personality and tone of voice"}
                                text={
                                    <>
                                        <p className="mb-2">
                                            Starting from the values, I conducted another workshop to define the personality of our new brand.
                                        </p>
                                        <p className="mb-2">
                                            We used the 5 Aaker dimensions to establish the <b>core traits of the personality</b>, and from there, we developed <b>the tone of voice</b>.
                                        </p>
                                    </>
                                }
                            />

                            <div className="relative bg-indigo-100 p-6 pr-14 rounded-xl dashed-border-m drop-shadow-2 text-paragraph mt-12">

                                <div className="absolute -top-2 -right-2 p-3 bg-white drop-shadow-2 -rotate-[15deg] stroke-leasy rounded-[8px] overflow-hidden">
                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.69702 14.697C6.04017 14.697 4.69702 16.0401 4.69702 17.697C4.69702 19.3539 6.04017 20.697 7.69702 20.697C8.04766 20.697 8.38424 20.6368 8.69702 20.5263" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M4.9609 16.3016C3.62128 15.6552 2.69702 14.284 2.69702 12.697C2.69702 11.4853 3.23575 10.3995 4.08676 9.66595" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M4.11755 9.58516C3.85192 9.18805 3.69702 8.71059 3.69702 8.19696C3.69702 6.81625 4.81631 5.69696 6.19702 5.69696C6.75993 5.69696 7.27939 5.883 7.69726 6.19696" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M7.93471 6.26229C7.78226 5.93911 7.69702 5.57799 7.69702 5.19696C7.69702 3.81625 8.81631 2.69696 10.197 2.69696C11.5777 2.69696 12.697 3.81625 12.697 5.19696V20.697" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M8.69702 20.697C8.69702 21.8016 9.59245 22.697 10.697 22.697C11.8016 22.697 12.697 21.8016 12.697 20.697" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M12.697 7.69696C12.697 9.35381 14.0401 10.697 15.697 10.697" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M21.3071 9.66595C22.1581 10.3995 22.6969 11.4853 22.6969 12.697C22.6969 13.4001 22.5155 14.0608 22.1969 14.6349" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M21.2765 9.58516C21.5421 9.18805 21.697 8.71059 21.697 8.19696C21.697 6.81625 20.5777 5.69696 19.197 5.69696C18.6341 5.69696 18.1146 5.883 17.6968 6.19696" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M12.697 5.19696C12.697 3.81625 13.8163 2.69696 15.197 2.69696C16.5777 2.69696 17.697 3.81625 17.697 5.19696C17.697 5.57799 17.6118 5.93911 17.4593 6.26229" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M14.697 22.697C13.5924 22.697 12.697 21.8016 12.697 20.697" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M19.3637 16.697L17.697 19.697H21.697L20.0303 22.697" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>

                                </div>

                                The main challenge with the new brand was to find a <b> trade off</b> between the <b>innovative, digital side of a startup</b>, and the necessity to appear <b>solid and reliable</b> to our - usually old-fashioned - clients.
                            </div>
                        </div>


                        <img src="https://pinklaura.github.io/my-portfolio/img/projects/leasy/chapter-2/personality.svg"
                            className="md:w-6/12" />
                    </div>

                    {/* Moodboard */}
                    <div className="flex flex-col md:flex-row gap-8 md:gap-20 md:items-center">

                        <img src="https://pinklaura.github.io/my-portfolio/img/projects/leasy/chapter-2/moodboard.png"
                            className="md:w-5/12 rounded-xl drop-shadow-1" />


                        <div className="md:w-5/12">
                            <LeasyParagraph
                                title={"The mood of Leasy"}
                                subtitle={"Finding the right vibes"}
                                text={
                                    <>
                                        <p className="mb-2">
                                            After a brainstorming session, I created a mood board to define the aesthetic of the new brand.
                                        </p>
                                    </>
                                }
                            />

                            <div className="flex flex-row md:gap-12 gap-4 mt-8 md:mt-10">
                                <GrayIconNote
                                    icon={
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21 3.6V20.4C21 20.7314 20.7314 21 20.4 21H3.6C3.26863 21 3 20.7314 3 20.4V3.6C3 3.26863 3.26863 3 3.6 3H20.4C20.7314 3 21 3.26863 21 3.6Z" stroke="#3B82F6" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    }
                                    title={"Blue color, Serif font"}
                                    text={"Simbolyze reliability, stability and trust"}
                                />
                                <GrayIconNote
                                    icon={
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.4563 2.66508C11.6717 2.20339 12.3283 2.20339 12.5437 2.66508L15.4077 8.80228C15.4673 8.92999 15.57 9.03265 15.6977 9.09226L21.8349 11.9563C22.2966 12.1717 22.2966 12.8283 21.8349 13.0437L15.6977 15.9077C15.57 15.9673 15.4673 16.07 15.4077 16.1977L12.5437 22.3349C12.3283 22.7966 11.6717 22.7966 11.4563 22.3349L8.5923 16.1977C8.53269 16.07 8.43003 15.9673 8.30232 15.9077L2.16512 13.0437C1.70343 12.8283 1.70343 12.1717 2.16512 11.9563L8.30232 9.09226C8.43003 9.03265 8.53269 8.92999 8.5923 8.80228L11.4563 2.66508Z" stroke="#8B5CF6" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>

                                    }
                                    title={"Gradients, Blur, Purple"}
                                    text={"Digital, up-to-date, modern app"}
                                />
                            </div>

                        </div>

                    </div>

                    {/* Final choices */}
                    <div className="flex flex-col gap-8">

                        <LeasyParagraph
                            title={"The mood of Leasy"}
                            subtitle={"Finding the right vibes"}
                            text={
                                <>
                                    <p className="mb-2 md:w-10/12">
                                        On the website, social media, and communications, we will use a gradient paired with a blue color. <i>Castle Begale</i> is a serif font that conveys stability with a touch of modernity; it will be used for main titles. For longer texts, we will use <i>Urbanist</i>, a modern sans-serif font.
                                    </p>
                                    <p className="md:w-10/12">
                                        <i>Urbanist</i> will also be the primary font within the app, using an indigo color without the gradient to avoid overwhelming the user.
                                    </p>
                                </>
                            }
                        />

                        <div className="flex md:flex-row flex-col p-8 gap-8 md:justify-between">
                            <img src="https://pinklaura.github.io/my-portfolio/img/projects/leasy/chapter-2/colors.svg"
                                className="md:w-7/12" />
                            <img src="https://pinklaura.github.io/my-portfolio/img/projects/leasy/chapter-2/typography.svg"
                                className="md:w-3/12" />
                        </div>
                    </div>


                    {/* Assets */}
                    <div className="flex flex-col gap-12">

                        <LeasyParagraph
                            title={"Applying the style"}
                            subtitle={"Graphic assets"}
                            text={
                                <>
                                    <p className="mb-2 md:w-10/12">
                                        To bring our brand to life, I focused on developing various graphic assets that align with our established style. This involved creating social media graphics, investor presentations, and website visuals that consistently reflect our brand's aesthetic.                                     </p>
                                    <p className="md:w-10/12">
                                        Each asset was designed to ensure a cohesive look and feel, reinforcing our brand identity across different platforms.                                    </p>
                                </>
                            }
                        />

                        <img src="https://pinklaura.github.io/my-portfolio/img/projects/leasy/chapter-2/visuals.png"
                        className="drop-shadow-2"/>
                    </div>
                </div>



            </section >
        </>
    );
}