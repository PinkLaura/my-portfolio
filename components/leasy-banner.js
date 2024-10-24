export default function LeasyBanner() {
    return (
        
        <section className="container max-w-6xl	px-6 my-10" >
            <div className=" bg-white rounded-3xl p-6 flex flex-row gap-3 drop-shadow-1 relative z-20">
                <div className="flex flex-col gap-1 w-[40%] px-3 py-6">
                    <h4 className="text-2xl text-title font-serif mb-2"> Ehy, Leasy is not just this! </h4>
                    <div className="text-base text-paragraph">
                        <p className="mb-2">
                            I worked on Leasy for one year, taking responsibility for a wide range of areas.
                        </p>
                        <p>
                            You can explore the different chapters for a deep dive into selected key topics.
                        </p>
                    </div>
                </div>

                <div className="flex flex-row gap-3 w-full">
                    {/* box 1 */}
                    <a className="group rounded-2xl border border-dashed w-full
                    p-3 flex flex-col gap-3 justify-center items-center font-medium font-serif
                    bg-gradient-to-t from-sky-50 to-white hover:from-sky-100 hover:to-sky-200
                    border-sky-500 text-sky-500 stroke-sky-500 
                    hover:border-sky-600 hover:text-sky-600 hover:stroke-sky-600 ">

                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"
                            className="group-hover:scale-125 transition-all">
                            <path d="M17.7493 17.5002L21.7493 21.5002" strokeWidth="1.5" strokeLinecap="round"
                                strokeLinejoin="round" />
                            <path
                                d="M3.74927 11.4993C3.74927 15.9176 7.33099 19.4993 11.7493 19.4993C13.9623 19.4993 15.9654 18.6008 17.4137 17.1486C18.857 15.7015 19.7493 13.7046 19.7493 11.4993C19.7493 7.08099 16.1676 3.49927 11.7493 3.49927C7.33099 3.49927 3.74927 7.08099 3.74927 11.4993Z"
                                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                        Discovery

                    </a>

                    {/* box 2 */}
                    <a className="group rounded-2xl border border-dashed w-full
                        p-3 flex flex-col gap-3 justify-center items-center font-medium font-serif
                        bg-gradient-to-t from-blue-50 to-white hover:from-blue-100 hover:to-sky-200
                        border-blue-500 text-blue-500 stroke-blue-500 
                        hover:border-blue-600 hover:text-blue-600 hover:stroke-blue-600">

                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"
                            className="group-hover:scale-125 transition-all">
                            <path
                                d="M20.7694 3.47002L20.7703 3.46932C21.1857 3.14955 21.7604 3.17965 22.1433 3.5459C22.5335 3.91914 22.6095 4.53238 22.3181 4.99378C22.318 4.99384 22.318 4.9939 22.318 4.99396L16.1433 14.7613C16.1431 14.7617 16.1428 14.7621 16.1426 14.7625C15.7381 15.3972 15.125 15.8411 14.4351 16.0282L10.5739 12.4731C10.664 11.6519 11.0808 10.9045 11.7286 10.4076L11.7288 10.4075L20.7694 3.47002ZM5.68577 18.5031L5.68559 18.5014C5.67554 18.4038 5.66943 18.3032 5.66738 18.2016C6.21303 15.7219 7.29531 14.803 8.25328 14.5719C9.28096 14.3239 10.5097 14.7741 11.4612 15.6952C12.4113 16.6148 12.9088 17.8338 12.69 18.8966C12.4846 19.8941 11.5806 21.0464 9.09204 21.75H3.69439C3.44836 21.75 3.22217 21.5432 3.22217 21.25C3.22217 20.9568 3.44836 20.75 3.69439 20.75H3.87772C4.51252 20.75 5.00404 20.3974 5.29984 19.9771C5.59208 19.5618 5.73844 19.0269 5.68577 18.5031Z"
                                strokeWidth="1.5" />
                        </svg>



                        Branding

                    </a>

                    {/* box 3 */}
                    <a
                        className="group rounded-2xl border border-dashed w-full
                p-3 flex flex-col gap-3 justify-center items-center font-medium font-serif
                bg-gradient-to-t from-indigo-50 to-white hover:from-indigo-100 hover:to-indigo-200
                border-indigo-500 text-indigo-500 stroke-indigo-500 hover:border-indigo-600 hover:text-indigo-600 hover:stroke-indigo-600">

                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"
                            className="group-hover:scale-125 transition-all">
                            <path
                                d="M10.8004 11.1067L3.72934 18.1778C2.94829 18.9588 2.94829 20.2252 3.72934 21.0062C4.51038 21.7873 5.77671 21.7873 6.55776 21.0062L13.6288 13.9352"
                                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path
                                d="M17.9428 14.2993L21.8211 18.1776C22.6022 18.9586 22.6022 20.225 21.8211 21.006C21.0401 21.7871 19.7737 21.7871 18.9927 21.006L12.7842 14.7976"
                                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path
                                d="M7.48263 6.40377L5.36131 7.11088L3.23999 3.57535L4.6542 2.16113L8.18974 4.28245L7.48263 6.40377ZM7.48263 6.40377L10.3129 9.234"
                                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path
                                d="M10.8003 11.1066C9.9565 8.95363 10.1215 6.12865 11.861 4.38914C13.6005 2.64962 16.8107 2.26782 18.5785 3.32848L15.5378 6.36915L15.2552 9.48019L18.3662 9.19758L21.4069 6.1569C22.4676 7.92467 22.0858 11.1349 20.3463 12.8744C18.6067 14.6139 15.7818 14.7789 13.6288 13.935"
                                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                        MVP

                    </a>

                    {/* box 4 */}
                    <a
                        className="group rounded-2xl border border-dashed w-full
                    p-3 flex flex-col gap-3 justify-center items-center font-medium font-serif
                    bg-gradient-to-t from-violet-50 to-white hover:from-violet-100 hover:to-violet-200
                    border-violet-500 text-violet-500 stroke-violet-500 hover:border-violet-600 hover:text-violet-600 hover:stroke-violet-600">

                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"
                            className="group-hover:scale-125 transition-all">
                            <path d="M4.25 14.5V18.9C4.25 19.2314 4.51863 19.5 4.85 19.5H10.25" strokeWidth="1.5"
                                strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M19.25 14.5V18.9C19.25 19.2314 18.9814 19.5 18.65 19.5H14.25" strokeWidth="1.5"
                                strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M14.25 5.5H18.65C18.9814 5.5 19.25 5.76863 19.25 6.1V10.5" strokeWidth="1.5"
                                strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4.25 10.5V6.1C4.25 5.76863 4.51863 5.5 4.85 5.5H10.25" strokeWidth="1.5"
                                strokeLinecap="round" strokeLinejoin="round" />
                            <path
                                d="M14.25 19.5V20.5C14.25 21.6046 13.3546 22.5 12.25 22.5C11.1454 22.5 10.25 21.6046 10.25 20.5V19.5"
                                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path
                                d="M4.25 10.5H5.25C6.35457 10.5 7.25 11.3954 7.25 12.5C7.25 13.6046 6.35457 14.5 5.25 14.5H4.25"
                                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path
                                d="M19.25 10.5H20.25C21.3546 10.5 22.25 11.3954 22.25 12.5C22.25 13.6046 21.3546 14.5 20.25 14.5H19.25"
                                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M14.25 5.5V4.5C14.25 3.39543 13.3546 2.5 12.25 2.5C11.1454 2.5 10.25 3.39543 10.25 4.5V5.5"
                                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>



                        Design System

                    </a>

                    {/* box 5 */}
                    <a
                        className="group rounded-2xl border border-dashed w-full
                        p-3 flex flex-col gap-3 justify-center items-center font-medium font-serif
                        bg-gradient-to-t from-purple-50 to-white hover:from-purple-100 hover:to-purple-200
                        border-purple-500 text-purple-500 stroke-purple-500 hover:border-purple-600 hover:text-purple-600 hover:stroke-purple-600">

                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"
                            className="group-hover:scale-125 transition-all">
                            <path
                                d="M14.5 21.5H4.5C3.39543 21.5 2.5 20.6046 2.5 19.5V5.5C2.5 4.39543 3.39543 3.5 4.5 3.5H20.5C21.6046 3.5 22.5 4.39543 22.5 5.5V15.5"
                                strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M2.5 7.5H22.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M5.5 5.50989L5.51 5.49878" strokeWidth="1.5" strokeLinecap="round"
                                strokeLinejoin="round" />
                            <path d="M8.5 5.50989L8.51 5.49878" strokeWidth="1.5" strokeLinecap="round"
                                strokeLinejoin="round" />
                            <path d="M11.5 5.50989L11.51 5.49878" strokeWidth="1.5" strokeLinecap="round"
                                strokeLinejoin="round" />
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M22.5822 18.8651C23.076 19.1689 23.0457 19.9082 22.5371 19.9658L19.9705 20.2568L18.8193 22.5691C18.5911 23.0273 17.886 22.8029 17.7695 22.235L16.5142 16.119C16.4157 15.639 16.8471 15.337 17.2644 15.5937L22.5822 18.8651Z"
                                strokeWidth="1.5" />
                        </svg>


                        Final Product

                    </a>
                </div>
            </div>
        </section>
    );
}