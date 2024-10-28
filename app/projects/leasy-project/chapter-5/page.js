import Image from "next/image";
import LeasyHeaderSection from "@/components/leasy-header-section";


export default function LeasyChapter5() {
    return (

        <>
            <LeasyHeaderSection
                icon={
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M21 31.5H6C4.34314 31.5 3 30.1569 3 28.5V7.5C3 5.84314 4.34314 4.5 6 4.5H30C31.6569 4.5 33 5.84314 33 7.5V22.5"
                            strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M3 10.5H33" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M7.5 7.51496L7.515 7.49829" strokeWidth="1.5" strokeLinecap="round"
                            strokeLinejoin="round" />
                        <path d="M12 7.51496L12.015 7.49829" strokeWidth="1.5" strokeLinecap="round"
                            strokeLinejoin="round" />
                        <path d="M16.5 7.51496L16.515 7.49829" strokeWidth="1.5" strokeLinecap="round"
                            strokeLinejoin="round" />
                        <path fillRule="evenodd" clipRule="evenodd"
                            d="M33.1233 27.5477C33.864 28.0034 33.8186 29.1123 33.0557 29.1987L29.2058 29.6352L27.479 33.1037C27.1367 33.791 26.079 33.4544 25.9043 32.6025L24.0213 23.4285C23.8736 22.7085 24.5207 22.2555 25.1466 22.6406L33.1233 27.5477Z"
                            strokeWidth="1.5" />
                    </svg>
                }
                title={"A property management platform"}
                number={'5'}
                paragraphs={
                    <>
                        <p className="mb-2">Leasy is a <b>financial and administrative</b> platform targeting specifically <b>property
                            managers and landlords</b>
                            with a lot of property. It allows to <b>track payments</b> and automatically remind tenants to pay.</p>
                        <p className="mb-2">
                            After creating the brand, designing an MVP and the design system, we had time to refine our product and
                            add other features.</p>
                        <p>
                            The aim was always to <b>automatize all the time-expensive task</b> that property managers perform doing
                            their
                            business, reducing errors and freeing time for more profitable activities.</p>
                        <p></p>
                    </>
                }
            />

            <section>
                <div className="container max-w-6xl px-6 md:my-32 flex flex-col md:gap-24 gap-12 relative">

                    {/* row */}
                    <div className="flex flex-col md:flex-row md:gap-24 gap-4 md:justify-between">
                        {/* testi */}
                        <div className="flex flex-col gap-3 md:w-3/12">
                            <h3 className="text-2xl text-title font-semibold font-serif">Dashboard</h3>
                            <p className="text-paragraph">
                                The home page is a dashboard that provides all the main informations in a single view.
                            </p>
                        </div>
                        {/* immagine */}
                        <div>
                            <video className="md:w-8/12 rounded-2xl drop-shadow-2 dashed-border-l-white bg-gray-50" loop={true} autoPlay="autoplay" muted>
                                <source src="img/projects/leasy/chapter-5/video-dashboard.mp4" type="video/mp4" />
                                Il tuo browser non supporta questo video :/
                            </video>
                        </div>
                    </div>

                    {/* row */}
                    <div className="flex flex-col md:flex-row md:gap-24 gap-4 md:justify-between">
                        {/* testi */}
                        <div className="flex flex-col gap-3 md:w-3/12">
                            <h3 className="text-2xl text-title font-semibold font-serif">Payments</h3>
                            <p className="text-paragraph mb-2">
                                The main feature of the app is the automatic collection of rent with automatic reminders and
                                reconciliation.
                            </p>
                            <p className="text-paragraph">
                                The “payments” page highlight late payers and allows to see what reminders has been sent. </p>
                        </div>
                        {/* immagine */}
                        <div>
                            <video className="md:w-8/12 rounded-2xl drop-shadow-2 dashed-border-l-white bg-gray-50" loop={true} autoPlay="autoplay" muted>
                                <source src="img/projects/leasy/chapter-5/video-payments.mp4" type="video/mp4" />
                                Il tuo browser non supporta questo video :/
                            </video>
                        </div>
                    </div>


                    {/* row */}
                    <div className="flex flex-col md:flex-row md:gap-24 gap-4">
                        {/* testi */}
                        <div className="flex flex-col gap-3 md:w-3/12">
                            <h3 className="text-2xl text-title font-semibold font-serif">Tenant App</h3>
                            <p className="text-paragraph mb-2">
                                The tenant app allow the tenant to see their payments and access receipts.
                            </p>
                        </div>
                        {/* immagine */}
                        <img width={963} height={540}
                            className="md:w-8/12 rounded-2xl drop-shadow-2 dashed-border-l-white" src="img/projects/leasy/chapter-5/tenant-app.png" alt="screenshot di Leasy" />
                    </div>

                    {/* row */}
                    <div className="flex flex-col md:flex-row md:gap-24 gap-4">
                        {/* testi */}
                        <div className="flex flex-col gap-3 md:w-3/12">
                            <h3 className="text-2xl text-title font-semibold font-serif">Property Page</h3>
                            <p className="text-paragraph mb-2">
                                In the property page the user can check everything related to a property: from the status of the
                                leases to the tracking of the expenses.
                            </p>
                            <p>The last feature we added was the possibility to receive applications from tenants and evaluate
                                their fit. </p>
                        </div>
                        {/* immagine */}
                        <img width={860} height={536}
                            className="md:w-8/12 rounded-2xl drop-shadow-2 dashed-border-l-white" src="img/projects/leasy/chapter-5/property-page.png" alt="screenshot di Leasy" />
                    </div>

                </div>
            </section>
        </>
    );
}