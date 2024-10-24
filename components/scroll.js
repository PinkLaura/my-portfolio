'use client'

import React, { useEffect } from "react";

export default function Scroll() {
    const textPath = document.querySelector("#text-path");

    const h = document.documentElement,
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';

    useEffect(function mount() {
        function onScroll() {
            let percent = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
            textPath.setAttribute("startOffset", (-percent * 5))
        }

        window.addEventListener("scroll", onScroll);

        return function unMount() {
            window.removeEventListener("scroll", onScroll);
        };
    });

    return null;
}
