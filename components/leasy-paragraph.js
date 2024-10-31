export default function LeasyParagraph({colWidth, title, subtitle, text}) {
    return(
        <div className={"flex flex-col gap-3"}>
        <h3 className="text-xl text-title font-serif font-semibold" > {title} </h3>
        <h4 className="text-m text-leasy font-serif font-medium uppercase" > {subtitle} </h4>
        <div className="text-paragraph text-l" > {text} </div>
        </div>
    );
}