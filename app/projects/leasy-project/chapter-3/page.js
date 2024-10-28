import Image from "next/image";
import LeasyHeaderSection from "@/components/leasy-header-section";


export default function LeasyChapter3() {
    return (

        <>
            <LeasyHeaderSection
                icon={
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.0756 15.9102L4.46901 26.5168C3.29744 27.6883 3.29744 29.5879 4.46901 30.7594C5.64057 31.9311 7.54007 31.9311 8.71164 30.7594L19.3182 20.1529" stroke="#6366F1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M25.7892 20.699L31.6066 26.5164C32.7783 27.6879 32.7783 29.5875 31.6066 30.759C30.4351 31.9307 28.5355 31.9307 27.364 30.759L18.0513 21.4464" stroke="#6366F1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M10.0993 8.85566L6.91733 9.91632L3.73535 4.61303L5.85667 2.4917L11.16 5.67368L10.0993 8.85566ZM10.0993 8.85566L14.3447 13.101" stroke="#6366F1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M15.0758 15.91C13.8101 12.6804 14.0576 8.44297 16.6669 5.83371C19.2761 3.22443 24.0914 2.65173 26.7431 4.24272L22.1821 8.80372L21.7582 13.4703L26.4247 13.0464L30.9857 8.48535C32.5768 11.137 32.0041 15.9524 29.3948 18.5617C26.7854 21.1709 22.5481 21.4184 19.3186 20.1526" stroke="#6366F1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                }
                title={"Starting with an MVP"}
                number={'3'}
                paragraphs={
                    <div className="flex md:flex-row flex-col justify-between">
                        <div class="max-w-6/12">
                            <p className="mb-2">
                                What are the core features of a property management platform? How should the logic work? How can we deliver maximum value with minimal effort?
                            </p>
                            <p>
                                After defining our mission, we focused on answering these and other key questions to bring a product to life that could be tested in the market.
                            </p>
                        </div>

                        <div className="bg-indigo-100 p-6 pr-14 rounded-xl dashed-border-m drop-shadow-2 md:max-w-5/12">
                            The initial features of the platform will include:
                            <ul>
                                <li>
                                    <b>Creation of a database</b> for properties, bank accounts, and leases
                                </li>
                                <li>
                                    <b>Automated rent collection</b> with reminders and tagging for landlords, along with a credit card payment option for tenants
                                </li>
                                <li>
                                    Basic <b>KPI indicators</b> and graphs
                                </li>
                            </ul>
                        </div>


                    </div>
                    
                    
                }
            />

    < section >
    <div className="container max-w-6xl px-6 md:my-32 flex flex-col md:gap-24 gap-12 relative">

    </div>
            </section >
        </>
    );
}