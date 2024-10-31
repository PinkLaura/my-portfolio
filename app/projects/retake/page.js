
export default function retakeProject() {
    return (

        <div className="mt-16 mb-8">

            <div className="container max-w-6xl px-6 my-10 flex flex-col gap-8 relative">

                {/* gradiente decorativo */}
                <img src="https://pinklaura.github.io/my-portfolio/img/projects/retake/Decorative-gradient-retake.svg"
                    className="blur-[140px] absolute -top-24 -left-24 z-10" />

                {/* icona */}
                <div className="w-min p-[18px] rounded-[18px] drop-shadow-[0_0_9px_rgba(0,0,0,0.25)] bg-white stroke-amber-500 relative z-20 
            hover:rotate-12 hover:scale-110 transition-all">

                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22.5C19.3121 22.5 22.5 19.4235 22.5 12C22.5 19.4235 25.6656 22.5 33 22.5C25.6656 22.5 22.5 25.6656 22.5 33C22.5 25.6656 19.3121 22.5 12 22.5Z" strokeWidth="1.5" strokeLinejoin="round" />
                        <path d="M3 9.75C7.70064 9.75 9.75 7.77229 9.75 3C9.75 7.77229 11.785 9.75 16.5 9.75C11.785 9.75 9.75 11.785 9.75 16.5C9.75 11.785 7.70064 9.75 3 9.75Z" strokeWidth="1.5" strokeLinejoin="round" />
                    </svg>

                </div>

                {/* titoli */}
                <h1 className="text-title text-6xl font-serif font-medium">Retake App</h1>
                <h2 className="text-amber-600 text-lg font-medium font-serif uppercase">Ai photo generator</h2>


                {/* paragrafo */}
                <div className="text-paragraph relative z-20 md:w-10/12">
                    <p className="mb-2">
                        Bending Spoons developed an exciting new technology that uses AI to <b>generate realistic photos of users</b> in diverse contexts, starting from just a few selfies.
                    </p>
                    <p >
                        My task was to create an app that maximizes the user experience and value of this innovative technology.
                    </p>
                </div>

                <img className="dashed-border-l-white rounded-xl drop-shadow-2"
                    src="https://pinklaura.github.io/my-portfolio/img/projects/retake/cover.png" />


            </div>

            {/* container con tutto */}
            <div className="container max-w-6xl px-6 my-10 flex flex-col md:gap-28 gap-8 relative">

                {/* wireframes */}

                <div className="flex flex-col gap-8">

                    <div className="flex flex-col gap-3 md:w-8/12">
                        <h3 className="text-xl text-title font-serif font-semibold" > From requirements to wireframes </h3>
                        <p className="text-paragraph text-l" > To understand the requirements of the technology and the aims of the app, I did some quick chats with developers and product manager. After gathering all the necessary informations I designed some wireframes to structure the flow of the app. </p>
                    </div>

                    <img className="drop-shadow-2"
                        src="https://pinklaura.github.io/my-portfolio/img/projects/retake/wireframes.svg" />

                </div>

                <div className="flex flex-col md:flex-row md:justify-between gap-8">

                    <div className="flex flex-col gap-3 md:w-5/12">
                        <h3 className="text-xl text-title font-serif font-semibold" > Finding inspiration </h3>
                        <h4 className="text-m text-amber-500 font-serif font-medium uppercase" > Moodboard </h4>
                        <p className="text-paragraph text-l" >
                            To define the product’s visual style, I created a moodboard inspired by two concepts.
                        </p>
                        <p className="text-paragraph text-l" >
                            The first was the <b>warm tones of a sunset</b> — shades of yellow and red often linked to amateur photography, adding a nostalgic, approachable feel.
                        </p>
                        <p className="text-paragraph text-l" >
                            The second was the <b>sleek aesthetic of facial recognition technology</b>, representing innovation and cutting-edge precision.
                        </p>
                        <p className="text-paragraph text-l" >
                            Together, these influences shaped a visual style that feels both accessible and high-tech, perfectly suited to an app that brings AI-powered creativity to personal photos.
                        </p>
                    </div>

                    <img className="dashed-border-m rounded-xl drop-shadow-2 bg-gray-50 p-4 md:w-6/12"
                        src="https://pinklaura.github.io/my-portfolio/img/projects/retake/moodboard.png" />

                </div>


                <div className="flex flex-col md:flex-row md:justify-between gap-8">

                    <div className="flex flex-col gap-3 md:w-5/12">
                        <h3 className="text-xl text-title font-serif font-semibold" > Finding inspiration </h3>
                        <h4 className="text-m text-amber-500 font-serif font-medium uppercase" > Moodboard </h4>
                        <p className="text-paragraph text-l" >
                            From the moodboard, <b>I derived a primary color and an accent gradient</b>, then crafted variations for higher text contrast and gradient-based backgrounds.
                        </p>
                        <p className="text-paragraph text-l" >
                            The palette also includes neutral tones to support text clarity and visual hierarchy, creating a balanced and versatile color scheme.
                        </p>
                    </div>

                    <img className="dashed-border-m rounded-xl drop-shadow-2 bg-gray-50 p-4 md:w-6/12"
                        src="https://pinklaura.github.io/my-portfolio/img/projects/retake/palette.svg" />

                </div>

                <div className="flex flex-col gap-8">

                    <div className="flex flex-col gap-3 md:w-8/12">
                        <h3 className="text-xl text-title font-serif font-semibold" > Towards the product </h3>
                        <h4 className="text-m text-amber-500 font-serif font-medium uppercase" > Design system and illustrations </h4>
                        <p className="text-paragraph text-l" >
                            To build the app, I applied <b>atomic design principles</b>, beginning with small components and gradually assembling them into the full interface.
                        </p>
                        <p className="text-paragraph text-l" >
                            I also created flexible component variants to ensure other designers could reuse and adapt them.
                        </p>
                        <p className="text-paragraph text-l" >
                            Additionally, I designed <b>custom illustrations</b> for use on empty screens and as decorative elements, adding a personalized touch to the user experience.
                        </p>
                    </div>

                    <img 
                        src="https://pinklaura.github.io/my-portfolio/img/projects/retake/design-system.svg" />

                </div>

                <div className="flex flex-col gap-8">

                    <div className="flex flex-col gap-3 md:w-8/12">
                        <h3 className="text-xl text-title font-serif font-semibold" > Final product </h3>

                    </div>

                    <img className="dashed-border-l-white rounded-xl drop-shadow-2"
                        src="https://pinklaura.github.io/my-portfolio/img/projects/retake/mockup.png" />

                </div>

            </div>






        </div>
    );
}