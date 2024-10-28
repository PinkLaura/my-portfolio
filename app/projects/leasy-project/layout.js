import LeasyBanner from "@/components/leasy-banner";

export default function LeasyProjectLayout({ children }) {
    return (

        <>
            <LeasyBanner />
            

            {children}

            <div className="bg-indigo-50 py-6">
                <LeasyBanner/>
            </div>
        </>
    );
}