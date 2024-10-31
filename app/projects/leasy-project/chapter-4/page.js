import Image from "next/image";
import LeasyHeaderSection from "@/components/leasy-header-section";
import LeasyParagraph from "@/components/leasy-paragraph";
import GrayIconNote from "@/components/gray-icon-note";


export default function LeasyChapter4() {
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
                maxW={"9"}
            />

            <section>
                <div className="container max-w-6xl px-6 md:my-24 flex flex-col md:gap-32 gap-12 relative">
                    <img className="rounded-3xl drop-shadow-2 border-2 border-gray-600/10" width={1080} height={367}
                        src="https://pinklaura.github.io/my-portfolio/img/projects/leasy/chapter-4/from-this-to-this.svg" alt="image from screenshots to wireframe" />


                    {/* visual impact of the DS */}
                    <div className="flex flex-col gap-8">

                        {/* intro */}
                        <div className="md:w-7/12">
                            <LeasyParagraph
                                title={"The visual impact of the new DS"}
                                subtitle={"UX/UI improvements"}
                                text={"I didn’t want to change much, but I wanted to address some of the issues our first research has highlighted, simplyfing the navigation and reduce visual clutter, giving more space to the content."}
                            />
                        </div>


                        <div className="flex md:flex-row flex-col gap-8">
                            {/* first */}
                            <div className="flex flex-col w-full ring-4 ring-inset ring-white/40 drop-shadow-2 bg-white text-paragraph text-l rounded-2xl overflow-hidden">
                                <Image src="/img/projects/leasy/chapter-4/properties-list.png" alt="properties" width={346} height={190} className="w-full hover:scale-110 transition-all" />
                                <div className="p-4">
                                    <h4 className="font-bold">No more buttons everywhere</h4>
                                    <p>More intuitive affordances for less visual pollution and cognitive weight.</p>
                                </div>
                            </div>

                            {/* second */}
                            <div className="flex flex-col w-full ring-4 ring-inset ring-white/40 drop-shadow-2 bg-white text-paragraph text-l rounded-2xl overflow-hidden">
                                <Image src="/img/projects/leasy/chapter-4/navigation.png" alt="navigation" width={346} height={190} className="w-full hover:scale-110 transition-all" />
                                <div className="p-4">
                                    <h4 className="font-bold">A new navigation system</h4>
                                    <p>A nice way to show steps and manage creation of instances.</p>
                                </div>
                            </div>

                            {/* thirs */}
                            <div className="flex flex-col w-full ring-4 ring-inset ring-white/40 drop-shadow-2 bg-white text-paragraph text-l rounded-2xl overflow-hidden">
                                <Image src="/img/projects/leasy/chapter-4/sidebar.png" alt="sidebar" width={346} height={190} className="w-full hover:scale-110 transition-all" />
                                <div className="p-4">
                                    <h4 className="font-bold">A less imposive sidebar</h4>
                                    <p>A lighter and smaller sidebar, to leave the screen space at the content.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ds info */}
                    <div className="flex flex-col gap-8">

                        {/* intro */}
                        <div className="md:w-7/12">
                            <LeasyParagraph
                                title={"Behind the scenes"}
                                subtitle={"how i worked on figma"}
                                text={"I tried to structure the Design System to mirror the structure of the code and use the most of the previous components."}
                            />


                            
                        </div>

                        {/* griglia immagini */}
                        <div className="flex flex-col gap-6 w-full md:px-16">

                            {/* riga 1 */}
                            <div className="flex md:flex-row flex-col gap-6 w-full relative">

                                {/* img 1 */}
                                <div>
                                    <img src="https://pinklaura.github.io/my-portfolio/img/projects/leasy/chapter-4/design-system-1.png" alt="" width={362} height={258}
                                        className="w-auto rounded-[8px] drop-shadow-2" />
                                </div>

                                {/* img 2 */}
                                <div>
                                    <img src="https://pinklaura.github.io/my-portfolio/img/projects/leasy/chapter-4/design-system-2.png" alt="" width={223} height={258}
                                        className="w-auto rounded-[8px] drop-shadow-2" />
                                </div>

                                {/* box 1 */}
                                <div className="md:absolute -left-16 -bottom-10">
                                    <GrayIconNote
                                        icon={<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21 13.1818V17.4758C21 17.6937 20.8819 17.8944 20.6914 18.0003L12.2914 22.6669C12.1102 22.7676 11.8898 22.7676 11.7086 22.6669L3.30863 18.0003C3.11816 17.8944 3.00002 17.6937 3.00002 17.4758L3 13.1818C3 12.9639 3.11814 12.7632 3.30862 12.6573L11.7086 7.99072C11.8898 7.89005 12.1102 7.89005 12.2914 7.99072L20.6914 12.6573C20.8818 12.7632 21 12.9639 21 13.1818Z" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M3.52844 13.1224L11.7086 17.667C11.8898 17.7676 12.1102 17.7676 12.2914 17.667L20.5 13.1066" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M12 22.3289V17.8289" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M12 12.8289V2.82886M12 2.82886L14.5 5.32886M12 2.82886L9.5 5.32886" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        }
                                        title={"Foundations"}
                                        text={"Starting from the code of the library, I created tokens for colors and styles for typography, elevation and spacing"}
                                    />
                                </div>

                                {/* box 2 */}
                                <div className="md:absolute -right-16 bottom-28">
                                    <GrayIconNote
                                        icon={<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4 14.8289V19.2289C4 19.5603 4.26863 19.8289 4.6 19.8289H10" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M19 14.8289V19.2289C19 19.5603 18.7314 19.8289 18.4 19.8289H14" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M14 5.82886H18.4C18.7314 5.82886 19 6.09749 19 6.42886V10.8289" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M4 10.8289V6.42886C4 6.09749 4.26863 5.82886 4.6 5.82886H10" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M14 19.8289V20.8289C14 21.9335 13.1046 22.8289 12 22.8289C10.8954 22.8289 10 21.9335 10 20.8289V19.8289" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M4 10.8289H5C6.10457 10.8289 7 11.7243 7 12.8289C7 13.9335 6.10457 14.8289 5 14.8289H4" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M19 10.8289H20C21.1046 10.8289 22 11.7243 22 12.8289C22 13.9335 21.1046 14.8289 20 14.8289H19" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M14 5.82886V4.82886C14 3.72429 13.1046 2.82886 12 2.82886C10.8954 2.82886 10 3.72429 10 4.82886V5.82886" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>

                                        }
                                        title={"An existent library"}
                                        text={"To simplify the development, we started from shadcn, a UI library for dashboard and graphs"}
                                    />
                                </div>
                            </div>

                            {/* riga 2 */}
                            <div className="flex md:flex-row flex-col gap-6 w-full relative">

                                {/* img 3-4 */}
                                <div >

                                    <img src="https://pinklaura.github.io/my-portfolio/img/projects/leasy/chapter-4/design-system-3-4.png" alt="" width={518} height={600}
                                        className="w-full rounded-[8px] drop-shadow-2" />

                                </div>

                                {/* img 5 */}
                                <div>
                                    <img src="https://pinklaura.github.io/my-portfolio/img/projects/leasy/chapter-4/design-system-5.png" alt="" width={654} height={600}
                                        className="w-full rounded-[8px] drop-shadow-2" />
                                </div>

                                {/* box 3 */}
                                <div className="md:absolute -right-16 top-10">
                                    <GrayIconNote
                                        icon={<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.16406 17.8289C5.45345 16.7801 5.83339 15.7774 6.2959 14.8289M11.5 8.62334C12.2822 8.05666 13.1177 7.55499 14 7.12476" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M4.5 22.8289C3.11929 22.8289 2 21.7096 2 20.3289C2 18.9482 3.11929 17.8289 4.5 17.8289C5.88071 17.8289 7 18.9482 7 20.3289C7 21.7096 5.88071 22.8289 4.5 22.8289Z" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M9.5 12.8289C8.11929 12.8289 7 11.7096 7 10.3289C7 8.94815 8.11929 7.82886 9.5 7.82886C10.8807 7.82886 12 8.94815 12 10.3289C12 11.7096 10.8807 12.8289 9.5 12.8289Z" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M19.5 7.82886C18.1193 7.82886 17 6.70957 17 5.32886C17 3.94815 18.1193 2.82886 19.5 2.82886C20.8807 2.82886 22 3.94815 22 5.32886C22 6.70957 20.8807 7.82886 19.5 7.82886Z" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>

                                        }
                                        title={"Variants"}
                                        text={"Every component has his own variants and properties to adapt to every context"}
                                    />
                                </div>
                            </div>

                            <div className="flex md:flex-row flex-col gap-6 w-full relative">

                                {/* img 6 */}
                                <div >

                                    <img src="https://pinklaura.github.io/my-portfolio/img/projects/leasy/chapter-4/design-system-6.png" alt="" width={518} height={600}
                                        className="w-full rounded-[8px] drop-shadow-2" />

                                </div>

                                {/* img 7 */}
                                <div>
                                    <img src="https://pinklaura.github.io/my-portfolio/img/projects/leasy/chapter-4/design-system-7.png" alt="" width={654} height={600}
                                        className="w-full rounded-[8px] drop-shadow-2" />
                                </div>

                                {/* box 4 */}
                                <div className="md:absolute -left-16 -top-24">
                                    <GrayIconNote
                                        icon={<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7 2.82886H16.5L21 7.32886V19.8289" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M3 21.3289V7.32886C3 6.50043 3.67157 5.82886 4.5 5.82886H14.2515C14.4106 5.82886 14.5632 5.89207 14.6757 6.0046L17.8243 9.15312C17.9368 9.26565 18 9.41826 18 9.57739V21.3289C18 22.1573 17.3284 22.8289 16.5 22.8289H4.5C3.67157 22.8289 3 22.1573 3 21.3289Z" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M14 5.82886V9.22886C14 9.56023 14.2686 9.82886 14.6 9.82886H18" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        }
                                        title={"Documentation"}
                                        text={"Every component has a related document with all the use cases and an explanation of variants."}
                                    />
                                </div>

                                {/* box 5 */}
                                <div className="md:absolute -right-16 top-12">
                                    <GrayIconNote
                                        icon={<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_393_69254)">
                                                <path d="M12 23.8289C12.5523 23.8289 13 23.3812 13 22.8289C13 22.2766 12.5523 21.8289 12 21.8289C11.4477 21.8289 11 22.2766 11 22.8289C11 23.3812 11.4477 23.8289 12 23.8289Z" fill="#7C7C7C" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M3 8.82886C3.55228 8.82886 4 8.38114 4 7.82886C4 7.27658 3.55228 6.82886 3 6.82886C2.44772 6.82886 2 7.27658 2 7.82886C2 8.38114 2.44772 8.82886 3 8.82886Z" fill="#7C7C7C" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M3 18.8289C3.55228 18.8289 4 18.3812 4 17.8289C4 17.2766 3.55228 16.8289 3 16.8289C2.44772 16.8289 2 17.2766 2 17.8289C2 18.3812 2.44772 18.8289 3 18.8289Z" fill="#7C7C7C" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M21 8.1819V17.4759C21 17.6938 20.8819 17.8945 20.6914 18.0004L12.2914 22.667C12.1102 22.7677 11.8898 22.7677 11.7086 22.667L3.30863 18.0004C3.11816 17.8945 3.00002 17.6938 3.00002 17.4759L3 8.1819C3 7.964 3.11814 7.76323 3.30862 7.65741L11.7086 2.99074C11.8898 2.89007 12.1102 2.89007 12.2914 2.99074L20.6914 7.65741C20.8818 7.76323 21 7.964 21 8.1819Z" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M3.52844 8.12249L11.7086 12.6671C11.8898 12.7677 12.1102 12.7677 12.2914 12.6671L20.5 8.10669" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M12 21.8289V12.8289" strokeLinecap="round" strokeLinejoin="round" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_393_69254">
                                                    <rect width="24" height="24" fill="white" transform="translate(0 0.828857)" />
                                                </clipPath>
                                            </defs>
                                        </svg>


                                        }
                                        title={"Design system structure"}
                                        text={"I used different pages and section to organize informations and components"}
                                    />
                                </div>
                            </div>

                            <div className="flex flex-row gap-6 w-full relative">

                                {/* img 8 */}
                                <img src="https://pinklaura.github.io/my-portfolio/img/projects/leasy/chapter-4/design-system-8.png" alt="" width={1200} height={191}
                                    className="w-full rounded-[8px] drop-shadow-2" />

                                {/* box 6 */}
                                <div className="md:absolute -left-16 -bottom-16">
                                    <GrayIconNote
                                        icon={<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 21.8289L4.14286 3.82886H19.8571L23 21.8289H1Z" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M2 17.3289H22" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M3 12.8289H21" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M4 8.32886H20" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M12 3.82886V21.8289" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M8 4.32886L6.5 21.3289" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M16 4.32886L17.5 21.3289" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        }
                                        title={"Re-usable templates"}
                                        text={"To simplify the every day craft, I also designed a few templates for pages, navigation and common uses."}
                                    />
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="flex md:flex-row flex-col gap-12 items-center my-12">
                        <img src="https://pinklaura.github.io/my-portfolio/img/projects/leasy/chapter-4/evolving-ds.svg" width={380} height={240} className="drop-shadow-2" />
                        <div className="h-min">
                            <LeasyParagraph
                                title={"And it doesn’t ends here"}
                                subtitle={"A continuos work"}
                                text={"The design system is an evolving creature, adapting to the necessity of the team and the growth of the product. Every moment it’s needed, I update the system adding new variants or updating old ones, always in concert of the dev team."}
                            />
                        </div>
                    </div>


                </div>

            </section >
        </>
    );
}