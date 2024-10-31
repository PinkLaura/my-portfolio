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
                            managers and landlords</b> with a lot of property. It allows to <b>track payments</b> and automatically remind tenants to pay.</p>
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
                maxW={"10"}
            />

            <section>
                <div className="container max-w-6xl px-6 md:my-32 flex flex-col md:gap-24 gap-12 relative">

                    {/* dashabord */}
                    <div className="flex flex-col md:flex-row md:gap-24 gap-4 md:justify-between">
                        {/* testi */}
                        <div className="flex flex-col gap-3 md:w-3/12">
                            <h3 className="text-2xl text-title font-semibold font-serif">Dashboard</h3>
                            <p className="text-paragraph">
                                The home page is a dashboard that provides all the main informations in a single view.
                            </p>
                        </div>
                        {/* immagine */}
                        <div className="md:w-8/12">
                            <video className="rounded-2xl drop-shadow-2 dashed-border-l-white bg-gray-50" loop={true} autoPlay="autoplay" muted>
                                <source src="https://pinklaura.github.io/my-portfolio/img/projects/leasy/chapter-5/video-dashboard.mp4" type="video/mp4" />
                                Il tuo browser non supporta questo video :/
                            </video>
                        </div>
                    </div>

                    {/* payments */}
                    <div className="flex flex-col md:flex-row md:gap-24 gap-4 md:justify-between">
                        {/* testi */}
                        <div className="flex flex-col gap-3 md:w-3/12">
                            <h3 className="text-2xl text-title font-semibold font-serif">Payments</h3>
                            <p className="text-paragraph mb-2">
                                The main feature of the app is the automatic collection of rent with automatic reminders and
                                reconciliation.
                            </p>
                            <p className="text-paragraph">
                                The “payments” page highlight late payers and allows to see what reminders has been sent.
                            </p>
                        </div>
                        {/* immagine */}
                        <div className="md:w-8/12">
                            <video className="rounded-2xl drop-shadow-2 dashed-border-l-white bg-gray-50" loop={true} autoPlay="autoplay" muted>
                                <source src="https://pinklaura.github.io/my-portfolio/img/projects/leasy/chapter-5/video-payments.mp4" type="video/mp4" />
                                Il tuo browser non supporta questo video :/
                            </video>
                        </div>
                    </div>


                    {/* tenant app */}
                    <div className="flex flex-col md:flex-row md:gap-24 gap-4 md:justify-between">
                        {/* testi */}
                        <div className="flex flex-col gap-3 md:w-3/12">
                            <h3 className="text-2xl text-title font-semibold font-serif">Tenant App</h3>
                            <p className="text-paragraph mb-2">
                                The tenant app allow the tenant to see their payments and access receipts.
                            </p>
                            <p className="text-paragraph">
                                It also provides a chat to facilitate communications between tenants and landlords.
                            </p>
                        </div>
                        {/* immagine */}
                        <img width={963} height={540}
                            className="md:w-8/12 rounded-2xl drop-shadow-2 dashed-border-l-white" src="https://pinklaura.github.io/my-portfolio/img/projects/leasy/chapter-5/tenant-app.png" alt="screenshot di Leasy" />
                    </div>

                    {/* property page */}
                    <div className="flex flex-col md:flex-row md:gap-24 gap-4 md:justify-between">
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
                            className="md:w-8/12 rounded-2xl drop-shadow-2 dashed-border-l-white" src="https://pinklaura.github.io/my-portfolio/img/projects/leasy/chapter-5/property-page.png" alt="screenshot di Leasy" />
                    </div>

                    {/* FEATURE DEEP DIVE INTRO */}
                    <div className="flex flex-col gap-4 ">
                        {/* testi */}
                        <div className="flex flex-col gap-3">
                            <h2 className="text-4xl text-title font-medium font-serif">Features deep dive</h2>
                            <h4 className="text-m text-leasy font-serif font-medium uppercase" >Tenant applications, screening and Contract registration</h4>

                            <p className="text-paragraph mb-2">
                                Not every feature was simple to design—some required <b>in-depth technical and contextual understanding</b>.
                            </p>
                            <p className="text-paragraph mb-2">
                                In this case, we developed a complex flow that guides users from collecting tenant applications for an available rental property to registering the final contract with the revenue agency.
                            </p>
                        </div>
                    </div>

                    {/* Understanding the needs */}
                    <div className="flex flex-col md:flex-row md:gap-24 gap-4 md:justify-between">
                        {/* testi */}
                        <div className="flex flex-col gap-3 md:w-6/12">
                            <h3 className="text-2xl text-title font-semibold font-serif">Understanding the needs</h3>
                            <p className="text-paragraph mb-2">
                                To kick off, I studied the context to identify constraints and potential solutions, preparing a list of targeted questions for the product manager.
                            </p>
                            <p className="text-paragraph mb-2">
                                We then held a collaborative meeting to define the structure of the feature and address key pain points.
                            </p>
                            <p className="text-paragraph">
                                This session resulted in a list of requirements and a rough outline of the feature, setting a clear foundation for the design process.
                            </p>
                        </div>
                        {/* immagine */}
                        <img
                            className="md:w-5/12" src="https://pinklaura.github.io/my-portfolio/img/projects/leasy/chapter-5/board.png" alt="screenshot di Leasy" />
                    </div>

                    {/* Designing the flow */}
                    <div className="flex flex-col gap-4">
                        {/* testi */}
                        <div className="flex flex-col gap-3">
                            <h3 className="text-2xl text-title font-semibold font-serif">Designing the flow</h3>
                            <p className="text-paragraph mb-2">
                                For the more technical aspect—contract registration with the Italian revenue agency—I needed to gather and organize all relevant information to determine exactly what we needed to ask the user.
                            </p>
                            <p className="text-paragraph mb-2">
                                Contract registration in Italy is notoriously complex, even for experts, with information that’s often scattered and mixed with niche, non-applicable details.
                            </p>
                            <p className="text-paragraph">
                                My goal was to simplify and restructure this process, making the information accessible and understandable for non-technical users, while also providing essential context.
                            </p>
                        </div>

                        {/* immagine */}
                        <img
                            className="mt-8" src="https://pinklaura.github.io/my-portfolio/img/projects/leasy/chapter-5/flow.svg" alt="screenshot di Leasy" />
                    </div>

                    {/* applications - tenant */}
                    <div className="flex flex-col md:flex-row md:gap-24 gap-4 md:justify-between">
                        {/* testi */}
                        <div className="flex flex-col gap-3 md:w-4/12">
                            <h4 className="text-m text-leasy font-serif font-medium uppercase" >Results</h4>
                            <h3 className="text-2xl text-title font-semibold font-serif">Applications - Tenant App</h3>
                            <p className="text-paragraph">
                                Tenants receive an invitation to register on the app, where they can fill out their application, review the details, and check for status updates.
                            </p>
                        </div>

                        {/* immagine */}
                        <img
                            className="md:w-7/12 rounded-2xl drop-shadow-2 dashed-border-l-white" src="https://pinklaura.github.io/my-portfolio/img/projects/leasy/chapter-5/application-tenant-side.png" alt="screenshot di Leasy" />
                    </div>

                    {/* applications - pm */}
                    <div className="flex flex-col md:flex-row md:gap-24 gap-4 md:justify-between">
                        {/* testi */}
                        <div className="flex flex-col gap-3 md:w-4/12">
                            <h4 className="text-m text-leasy font-serif font-medium uppercase" >Results</h4>
                            <h3 className="text-2xl text-title font-semibold font-serif">Applications - Property Manager Platform</h3>
                            <p className="text-paragraph mb-2">
                                The property manager accesses a dashboard to review and evaluate all tenant applications.
                            </p>
                            <p className="text-paragraph">
                                They can view each tenant’s details, send status updates directly, and, once ready, use the collected information to generate the contract to register.
                            </p>
                        </div>

                        {/* immagine */}
                        <div className="md:w-8/12">
                            <video className="rounded-2xl drop-shadow-2 dashed-border-l-white bg-gray-50" loop={true} autoPlay="autoplay" muted>
                                <source src="https://pinklaura.github.io/my-portfolio/img/projects/leasy/chapter-5/video-applications.mp4" type="video/mp4" />
                                Il tuo browser non supporta questo video :/
                            </video>
                        </div>
                    </div>


                    {/* applications - pm */}
                    <div className="flex flex-col md:flex-row md:gap-24 gap-4 md:justify-between">
                        {/* testi */}
                        <div className="flex flex-col gap-3 md:w-4/12">
                            <h4 className="text-m text-leasy font-serif font-medium uppercase" >Results</h4>
                            <h3 className="text-2xl text-title font-semibold font-serif">Contract registration and monetization</h3>
                            <p className="text-paragraph mb-2">
                                At the end, contract registration is streamlined into a simple, user-friendly form  with explanations included to guide users through each question.
                            </p>
                            <p className="text-paragraph mb-2">
                                Since this was also one of our first paid features, I focused on the monetization aspect.
                            </p>
                            <p className="text-paragraph">
                                To draw attention, I added a colorful banner on every contract page and designed a pricing page that encourages users to consider the premium plan.
                            </p>
                        </div>

                        {/* immagine */}
                        <img
                            className="md:w-7/12 rounded-2xl drop-shadow-2 dashed-border-l-white" src="https://pinklaura.github.io/my-portfolio/img/projects/leasy/chapter-5/contract-registration.png" alt="screenshot di Leasy" />
                    </div>


                </div>
            </section>
        </>
    );
}