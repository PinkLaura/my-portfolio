import LeasyBanner from "@/components/leasy-banner";

export default function LeasyProjectLayout({children}){
    return(

        <>
        <LeasyBanner/>

        {children}
        </>
    );
}