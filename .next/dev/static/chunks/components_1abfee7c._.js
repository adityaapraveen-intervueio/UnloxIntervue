(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/scrolling-banner.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollingBanner",
    ()=>ScrollingBanner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function ScrollingBanner() {
    _s();
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollingBanner.useEffect": ()=>{
            const scrollContainer = scrollRef.current;
            if (!scrollContainer) return;
            let animationId;
            let scrollPosition = 0;
            const scroll = {
                "ScrollingBanner.useEffect.scroll": ()=>{
                    scrollPosition += 1;
                    if (scrollPosition >= scrollContainer.scrollWidth / 2) {
                        scrollPosition = 0;
                    }
                    scrollContainer.scrollLeft = scrollPosition;
                    animationId = requestAnimationFrame(scroll);
                }
            }["ScrollingBanner.useEffect.scroll"];
            animationId = requestAnimationFrame(scroll);
            return ({
                "ScrollingBanner.useEffect": ()=>cancelAnimationFrame(animationId)
            })["ScrollingBanner.useEffect"];
        }
    }["ScrollingBanner.useEffect"], []);
    const text = "TEXT SCROLLING GOES HERE";
    const items = Array(10).fill(text);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-[#1a1a2e] py-3 overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: scrollRef,
            className: "flex whitespace-nowrap overflow-hidden",
            style: {
                scrollBehavior: "auto"
            },
            children: [
                items.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex items-center text-white text-sm font-medium",
                        children: [
                            item,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mx-4 w-2 h-2 bg-white rounded-sm"
                            }, void 0, false, {
                                fileName: "[project]/components/scrolling-banner.tsx",
                                lineNumber: 38,
                                columnNumber: 13
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/components/scrolling-banner.tsx",
                        lineNumber: 36,
                        columnNumber: 11
                    }, this)),
                items.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex items-center text-white text-sm font-medium",
                        children: [
                            item,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mx-4 w-2 h-2 bg-white rounded-sm"
                            }, void 0, false, {
                                fileName: "[project]/components/scrolling-banner.tsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, this)
                        ]
                    }, `dup-${index}`, true, {
                        fileName: "[project]/components/scrolling-banner.tsx",
                        lineNumber: 42,
                        columnNumber: 11
                    }, this))
            ]
        }, void 0, true, {
            fileName: "[project]/components/scrolling-banner.tsx",
            lineNumber: 34,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/scrolling-banner.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_s(ScrollingBanner, "P14GFulhWAl/Oec4Pk4QeBwKyr0=");
_c = ScrollingBanner;
var _c;
__turbopack_context__.k.register(_c, "ScrollingBanner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/logo-banner.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LogoBanner",
    ()=>LogoBanner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const logos = [
    {
        src: "https://cdn.prod.website-files.com/608e9cc36cbcc089f0998643/66fa4cb57cbb9e3d2d470e08_image%2080.png",
        alt: "Logo 1"
    },
    {
        src: "https://cdn.prod.website-files.com/608e9cc36cbcc089f0998643/66fa4d132ffcafcbe48cac95_image%2081.png",
        alt: "Logo 2"
    },
    {
        src: "https://cdn.prod.website-files.com/608e9cc36cbcc089f0998643/66e16e5594c84f21ccbc5bcf_Siemens-logo%201.svg",
        alt: "Siemens"
    },
    {
        src: "https://cdn.prod.website-files.com/608e9cc36cbcc089f0998643/66fa4fff9e6470e9caa4e159_image%20(3).png",
        alt: "Logo 3"
    },
    {
        src: "https://cdn.prod.website-files.com/608e9cc36cbcc089f0998643/673ac9654e601b552029de93_image%2083.png",
        alt: "Logo 4"
    },
    {
        src: "https://cdn.prod.website-files.com/608e9cc36cbcc089f0998643/66fa4ea7569bf012ae877e15_images%20(6)%201.png",
        alt: "Logo 5",
        width: 112
    },
    {
        src: "https://cdn.prod.website-files.com/608e9cc36cbcc089f0998643/66e16e29690ab92c606429b3_General_Mills_logo.svg%201.svg",
        alt: "General Mills"
    },
    {
        src: "https://cdn.prod.website-files.com/608e9cc36cbcc089f0998643/66e16e30fbc455f4376f9f02_M2P.svg",
        alt: "M2P"
    },
    {
        src: "https://cdn.prod.website-files.com/608e9cc36cbcc089f0998643/67c56c4b4324f210c2d30ff4_NSE-vector.webp",
        alt: "NSE"
    },
    {
        src: "https://cdn.prod.website-files.com/608e9cc36cbcc089f0998643/67c56d475cf0a3641c6d7b57_kreditbee.webp",
        alt: "KreditBee"
    },
    {
        src: "https://cdn.prod.website-files.com/608e9cc36cbcc089f0998643/67c56dd2a947a58eff028c0e_randomtrees.webp",
        alt: "Random Trees"
    },
    {
        src: "https://cdn.prod.website-files.com/608e9cc36cbcc089f0998643/67c56e1a86c286861170825f_recro.webp",
        alt: "Recro"
    }
];
function LogoBanner() {
    _s();
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LogoBanner.useEffect": ()=>{
            const el = scrollRef.current;
            if (!el) return;
            let animationId;
            let scrollPos = 0;
            const tick = {
                "LogoBanner.useEffect.tick": ()=>{
                    scrollPos += 1;
                    if (scrollPos >= el.scrollWidth / 2) {
                        scrollPos = 0;
                    }
                    el.scrollLeft = scrollPos;
                    animationId = requestAnimationFrame(tick);
                }
            }["LogoBanner.useEffect.tick"];
            animationId = requestAnimationFrame(tick);
            return ({
                "LogoBanner.useEffect": ()=>cancelAnimationFrame(animationId)
            })["LogoBanner.useEffect"];
        }
    }["LogoBanner.useEffect"], []);
    const renderLogos = (dupKey = "")=>logos.map((logo, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: logo.src,
                    alt: logo.alt,
                    className: "h-8 w-auto object-contain bg-white rounded-full px-3 py-2 shadow-sm",
                    style: logo.width ? {
                        width: `${logo.width}px`,
                        height: "auto"
                    } : undefined
                }, void 0, false, {
                    fileName: "[project]/components/logo-banner.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this)
            }, `${dupKey}${idx}`, false, {
                fileName: "[project]/components/logo-banner.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-[#FF6B5B] py-4 overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-6 text-white mb-3",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm text-white/80",
                        children: "Visionaries grow with Intervue"
                    }, void 0, false, {
                        fileName: "[project]/components/logo-banner.tsx",
                        lineNumber: 59,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/logo-banner.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: scrollRef,
                    className: "flex whitespace-nowrap overflow-hidden",
                    style: {
                        scrollBehavior: "auto"
                    },
                    children: [
                        renderLogos(),
                        renderLogos("dup-")
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/logo-banner.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/logo-banner.tsx",
            lineNumber: 57,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/logo-banner.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
_s(LogoBanner, "P14GFulhWAl/Oec4Pk4QeBwKyr0=");
_c = LogoBanner;
var _c;
__turbopack_context__.k.register(_c, "LogoBanner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_1abfee7c._.js.map