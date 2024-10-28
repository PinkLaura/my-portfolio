export default function LeasyHeaderSection({icon, title, number, paragraphs, maxW}) {

    /*if (maxW === "7") {
        maxW = "text-paragraph relative z-20 max-w-7/12";
    }
    else {
        maxW = "text-paragraph relative z-20"
    };*/
        

    return (


        <div className="mt-16 mb-8">

            <div className="container max-w-6xl px-6 my-10 flex flex-col gap-8 relative">

                {/* gradiente decorativo */}
                <img src="/img/projects/leasy/Decorative-gradient-leasy.png"
                    className="blur-[140px] absolute -top-24 -left-24 z-10 scale-110" />

                {/* icona */}
                <div className="w-min p-[18px] rounded-[18px] drop-shadow-[0_0_9px_rgba(0,0,0,0.25)] bg-white stroke-leasy relative z-20 
                hover:rotate-12 hover:scale-110 transition-all">
                    
                    {icon}


                </div>

                {/* titoli */}
                <div className={maxW}>
                    <h1 className="text-title text-6xl font-serif font-medium">{title}</h1>
                    <h2 className="text-leasy text-lg font-medium font-serif uppercase">Leasy - Chapter {number}</h2>
                </div>


                {/* paragrafo */}
                <div className="text-paragraph relative z-20 ">
                    {paragraphs}
                </div>
            </div>
        </div>

    );
}