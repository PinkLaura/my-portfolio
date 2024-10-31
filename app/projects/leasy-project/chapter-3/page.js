import Image from "next/image";
import LeasyHeaderSection from "@/components/leasy-header-section";
import LeasyParagraph from "@/components/leasy-paragraph";


export default function LeasyChapter3() {
    return (

        <>
            <LeasyHeaderSection
                icon={
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.0756 15.9102L4.46901 26.5168C3.29744 27.6883 3.29744 29.5879 4.46901 30.7594C5.64057 31.9311 7.54007 31.9311 8.71164 30.7594L19.3182 20.1529" strokeWidth="1.5" strokeLinejoin="round" />
                        <path d="M25.7892 20.699L31.6066 26.5164C32.7783 27.6879 32.7783 29.5875 31.6066 30.759C30.4351 31.9307 28.5355 31.9307 27.364 30.759L18.0513 21.4464" strokeWidth="1.5" strokeLinejoin="round" />
                        <path d="M10.0993 8.85566L6.91733 9.91632L3.73535 4.61303L5.85667 2.4917L11.16 5.67368L10.0993 8.85566ZM10.0993 8.85566L14.3447 13.101" strokeWidth="1.5" strokeLinejoin="round" />
                        <path d="M15.0758 15.91C13.8101 12.6804 14.0576 8.44297 16.6669 5.83371C19.2761 3.22443 24.0914 2.65173 26.7431 4.24272L22.1821 8.80372L21.7582 13.4703L26.4247 13.0464L30.9857 8.48535C32.5768 11.137 32.0041 15.9524 29.3948 18.5617C26.7854 21.1709 22.5481 21.4184 19.3186 20.1526" strokeWidth="1.5" strokeLinejoin="round" />
                    </svg>
                }
                title={"Starting with an MVP"}
                number={'3'}
                paragraphs={
                    <div className="flex md:flex-row flex-col justify-between">
                        <div className="md:w-6/12">
                            <p className="mb-2">
                                What are the core features of a property management platform? How should the logic work? How can we deliver maximum value with minimal effort?
                            </p>
                            <p>
                                After defining our mission, we focused on answering these and other key questions to bring a product to life that could be tested in the market.
                            </p>
                        </div>

                        <div className="bg-indigo-100 p-6 pr-14 rounded-xl dashed-border-m drop-shadow-2 md:w-5/12 text-paragraph mt-8 md:mt-0">

                            <div className="absolute -top-2 -right-2 p-3 bg-white drop-shadow-2 -rotate-[15deg] stroke-leasy rounded-[8px] overflow-hidden">
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.39386 5.3938H21.3939" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M5.39386 7.3938V3.3938L3.89386 4.8938" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M5.89386 14.3938H3.89386L5.79857 11.4309C5.86078 11.3341 5.89601 11.2206 5.87095 11.1083C5.81321 10.8495 5.60986 10.3938 4.89386 10.3938C3.89387 10.3938 3.89386 11.2827 3.89386 11.2827V11.5049" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.39386 19.3938H4.89386C5.44614 19.3938 5.89386 19.8415 5.89386 20.3938C5.89386 20.9461 5.44614 21.3938 4.89386 21.3938H3.89386" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M3.89386 17.3938H5.89386L4.39386 19.3938" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M9.39386 12.3938H21.3939" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M9.39386 19.3938H21.3939" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                            </div>

                            The initial features of the platform will include:
                            <ul className="list-disc">
                                <li className="ml-6">
                                    <b>Creation of a database</b> for properties, bank accounts, and leases
                                </li>
                                <li className="ml-6">
                                    <b>Automated rent collection</b> with reminders and tagging for landlords, along with a credit card payment option for tenants
                                </li>
                                <li className="ml-6">
                                    Basic <b>KPI indicators</b> and graphs
                                </li>
                            </ul>
                        </div>


                    </div>


                }
                maxW={""}
            />

            < section >
                <div className="container max-w-6xl px-6 md:my-32 flex flex-col md:gap-24 gap-12 relative">

                    <div className="flex flex-col gap-8">
                        <div className="flex md:flex-row flex-col gap-6 md:justify-between">

                            {/* Paragrafo di spiegazione */}
                            <div className="md:w-6/12">
                                <LeasyParagraph
                                    title={"Starting the project"}
                                    subtitle={"From requirements to wireframes"}
                                    text={
                                        <>
                                            <p> First, I defined the key entities to display and provided an ER diagram to the development team. </p>
                                            <p> To save development time, I made an effort to reuse common structures like table views and page layouts to present the information consistently.</p>
                                        </>}
                                />
                            </div>

                            {/* Immagine */}
                            <img className="md:w-5/12" src="https://pinklaura.github.io/my-portfolio/img/projects/leasy/chapter-3/er-diagram.svg" />
                        </div>

                        <img src="https://pinklaura.github.io/my-portfolio/img/projects/leasy/chapter-3/wireframes.svg" />

                    </div>

                    {/* Wireframe examples */}
                    <div className="text-center">
                        <h3 className="text-title font-serif text-2xl font-semibold">
                            Not everything works
                        </h3>
                        <p className="text-paragraph text-lg mt-2 mb-8">
                            Here there are some wireframes that I discarded to simplify the development.
                        </p>

                        <div className=" flex flex-col md:flex-row gap-8 text-gray-500">
                            <div className="w-full flex flex-col gap-4 items-center">
                                <img className="bg-gray-100" src="https://pinklaura.github.io/my-portfolio/img/projects/leasy/chapter-3/properties-list.svg" />
                                <p className="italic">
                                    Side sheet to show active leases and payments from property list view
                                </p>
                            </div>
                            <div className="w-full flex flex-col gap-4 items-center ">
                                <img className="bg-gray-100" src="https://pinklaura.github.io/my-portfolio/img/projects/leasy/chapter-3/properties-list.svg" />
                                <p className="italic">
                                    A collapsable to better show the difference between units and properties
                                </p>
                            </div>
                            <div className="w-full flex flex-col gap-4 items-center">
                                <img className="bg-gray-100" src="https://pinklaura.github.io/my-portfolio/img/projects/leasy/chapter-3/property.svg" />
                                <p className="italic">
                                    A complex calendar view to visualize the occupancy of a property
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* Visuals */}
                    <div className="text-center">
                        <h3 className="text-title font-serif text-2xl font-semibold mb-8">
                            Visual
                        </h3>
                        <img className="bg-gray-100 rounded-2xl dashed-border-l-white drop-shadow-1"
                            src="https://pinklaura.github.io/my-portfolio/img/projects/leasy/chapter-3/cover.png" />
                    </div>


                    {/* Some difficult choices */}
                    <div className="md:w-11/12 flex flex-col gap-12">
                        <div className="md:w-9/12">
                            <LeasyParagraph
                                title={"Some difficult choices"}
                                subtitle={"And why we took them"}
                                text={
                                    <>
                                        <p className="mb-2">
                                            For the MVP, we had very little time, as we needed something to present to investors and potential clients.
                                        </p>
                                        <p>
                                            This meant simplifying both from a development and UX perspective: we didn’t have time to test more 'creative' UX solutions, so we opted for classic patterns with the intention of exploring other options later.
                                        </p>
                                    </>
                                }
                            />
                        </div>

                        {/* Lista*/}
                        <div className="flex md:flex-row flex-col gap-12 md:items-center">
                            <img src="https://pinklaura.github.io/my-portfolio/img/projects/leasy/chapter-3/buttons.png"
                                className="md:w-4/12 rounded-xl drop-shadow-2" />
                            <div className="md:w-7/12 text-base">
                                <h4 className="text-title font-medium font-serif mb-1">
                                    A lot of buttons
                                </h4>
                                <p className="mb-1 text-paragraph">
                                    In the first release, there were many buttons for actions like changing the status of payments within a row.
                                </p>
                                <p className="text-paragraph">
                                    We didn’t want to confuse our (not very young) target audience, so we began with this well-established pattern before exploring more intuitive, user-friendly affordances.
                                </p>
                            </div>
                        </div>

                        <div className="flex md:flex-row flex-col gap-12 md:items-center">
                            <img src="https://pinklaura.github.io/my-portfolio/img/projects/leasy/chapter-3/list.png"
                                className="md:w-4/12 rounded-xl drop-shadow-2" />
                            <div className="md:w-7/12 text-base">
                                <h4 className="text-title font-medium font-serif mb-1">
                                    A list of units
                                </h4>
                                <p className="mb-1 text-paragraph">
                                    A property can be a single apartment or consist of different units that can be rented separately. As a result, leases are tied to individual units rather than the entire property.
                                </p>
                                <p className="text-paragraph">
                                    To simplify the display, we chose to show only the units in the list, even though they are always created starting from the property level.
                                </p>
                            </div>
                        </div>


                        <div className="flex md:flex-row flex-col gap-12 md:items-center">
                            <img src="https://pinklaura.github.io/my-portfolio/img/projects/leasy/chapter-3/informations.png"
                                className="md:w-4/12 rounded-xl drop-shadow-2" />
                            <div className="md:w-7/12 text-base">
                                <h4 className="text-title font-medium font-serif mb-1">
                                    No complex informations
                                </h4>
                                <p className="mb-1 text-paragraph">
                                    To simplify development, we decided that each page would serve as a display page for a single instance and would not show information related to other instances to avoid requiring joint queries to the database.
                                </p>
                                <p className="text-paragraph">
                                    The only complex information included was a filtered view of the lease table specific to that particular property.
                                </p>
                            </div>
                        </div>


                    </div>

                </div>

            </section>
        </>
    );
}