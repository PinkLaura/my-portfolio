import Image from "next/image";
import LeasyHeaderSection from "@/components/leasy-header-section";


export default function LeasyChapter3() {
    return (

        <>
            <LeasyHeaderSection
                icon={
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 21V27.6C6 28.0971 6.40294 28.5 6.9 28.5H15" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M28.5 21V27.6C28.5 28.0971 28.0971 28.5 27.6 28.5H21" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M21 7.5H27.6C28.0971 7.5 28.5 7.90294 28.5 8.4V15" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M6 15V8.4C6 7.90294 6.40294 7.5 6.9 7.5H15" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M21 28.5V30C21 31.6569 19.6569 33 18 33C16.3431 33 15 31.6569 15 30V28.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M6 15H7.5C9.15686 15 10.5 16.3431 10.5 18C10.5 19.6569 9.15686 21 7.5 21H6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M28.5 15H30C31.6569 15 33 16.3431 33 18C33 19.6569 31.6569 21 30 21H28.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M21 7.5V6C21 4.34314 19.6569 3 18 3C16.3431 3 15 4.34314 15 6V7.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                }
                title={"Crafting a Design System"}
                number={'4'}
                paragraphs={
                    <>
                        <p className="mb-2">After the launch of the MVP, I took time to rationalize the components into a design system. The MVP was launched in one month, primarily focused on core functionalities, but it miss coherency and structure.
                        </p>
                        <p>After the first two months of use, I analyzed the feedback and structured a comprehensive design system, improving both the UI/UX of the pages and the Figma file structure. This helped us iterate faster with more coherent design choices.
                        </p>
                    </>
                }
            />

            <section>
                <div className="container max-w-6xl px-6 md:my-32 flex flex-col md:gap-24 gap-12 relative">

                </div>
            </section>
        </>
    );
}