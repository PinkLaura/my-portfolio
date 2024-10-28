import LeasyBanner from "@/components/leasy-banner";

export default function LeasyProjectLayout({ children }) {
    return (

        <div className="mt-24">


            <LeasyBanner />


            {children}

            <div className="bg-indigo-50 py-6 mt-12">
                <LeasyBanner />
            </div>
        </div>
    );
}