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
    const text = "Unlock Placement Confidence with mock interviews";
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
]);

//# sourceMappingURL=components_scrolling-banner_tsx_9b48f2e5._.js.map