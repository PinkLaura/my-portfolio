
export default function retakeProject() {
    return (

        <div className="mt-16 mb-8">

            <div className="container max-w-6xl px-6 my-10 flex flex-col gap-8 relative">

                {/* gradiente decorativo */}
                <img src="https://pinklaura.github.io/my-portfolio/img/projects/retake/gradient-retake.svg"
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
                    <p>
                        Bending Spoons developed an exciting new technology that uses AI to <b>generate realistic photos of users</b> in diverse contexts, starting from just a few selfies.
                    </p>
                    <p>
                        My task was to create an app that maximizes the user experience and value of this innovative technology.
                    </p>

                </div>


       
            </div>
        </div>
    );
}