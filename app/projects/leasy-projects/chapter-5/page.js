import Image from "next/image";

export default function LeasyChapter5() {
    return (
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
                    <video className="md:w-8/12 rounded-2xl drop-shadow-2 dashed-border-l-white" loop={true} autoplay="autoPlay" muted>
                        <source src=".../public/img/projects/leasy/chapter-5/video-dashboard.mp4" type="video/mp4" />
                        Il tuo browser non supporta questo video :/
                    </video>
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
                    <video className="md:w-8/12 rounded-2xl drop-shadow-2 dashed-border-l-white" loop={true} autoplay="autoPlay" muted>
                        <source src="/videos/video-payments.mp4" type="video/mp4" />
                        Il tuo browser non supporta questo video :/
                    </video>
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
                    <Image width={963} height={540}
                    className="md:w-8/12 rounded-2xl drop-shadow-2 dashed-border-l-white" src="/img/projects/leasy/chapter-5/tenant-app.png" alt="screenshot di Leasy" />
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
                    <Image width={860} height={536}
                    className="md:w-8/12 rounded-2xl drop-shadow-2 dashed-border-l-white" src="/img/projects/leasy/chapter-5/property-page.png" alt="screenshot di Leasy" />
                </div>

            </div>
        </section>

    );
}