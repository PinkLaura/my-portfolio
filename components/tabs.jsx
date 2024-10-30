'use client'

import { useState, useEffect, useRef } from "react";

const TabsComponent = ({ items }) => {

    const [selectedTab, setSelectedTab] = useState(0)
    const firstBtnRef = useRef()

    useEffect(() => {
        firstBtnRef.current.focus();
    }, [])

    return (
        <div className="bg-white rounded-xl drop-shadow-2 flex flex-col gap-3 text-paragraph  p-4 md:w-7/12">
            <h3 className="font-serif font-medium text-lg mb-3 text-title" >Things I love</h3>

            <div className="flex flex-col gap-3">

                {/* Riga icone */}
                <div className="flex flex-row justify-between">

                    {items.map((item, index) => (
                        <button
                            ref={index === 0 ? firstBtnRef : null}
                            key={index}
                            onClick={() => setSelectedTab(index)}
                            className={`relative bg-white p-2 rounded-[8px] drop-shadow-2 hover:drop-shadow-1  stroke-indigo-400 transition-all 
                                
                            ${selectedTab === index ? 'scale-[1.7] top-2 mx-4 border border-gray-200' : ""} ` + (index % 2 ? 'rotate-[7deg]' : '-rotate-[7deg]')}>
                            {item.icon}
                        </button>
                    ))}

                </div>

                {/* container tab */}
                
                    {items.map((item, index) => (
                        <div className={`${selectedTab === index ? "" : "hidden"}`} >

                            {item.content}
                        </div>
                    ))}

                


            </div>
        </div>
    )
}

export default TabsComponent