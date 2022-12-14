// import { useRef, useEffect } from 'react'
// import * as d3 from 'd3'

// export default function HierarchicalTree() {
//     const ref = useRef()
//     useEffect(() => {
//         const svgElement = d3.select(ref.current)
//         svgElement.append("circle")
//             .attr("cx", 150)
//             .attr("cy", 70)
//             .attr("r", 50)
//     }, [])
//     return (
//         <div>
//             <svg ref={ref} />
//         </div>
//     )
// }

import React, { useRef, useEffect } from "react";
import { select, hierarchy, tree, linkHorizontal } from "d3";
import useResizeObserver from "./useResizeObserver";

function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
}

function TreeChart({ data }) {
    const svgRef = useRef();
    const wrapperRef = useRef();
    const dimensions = useResizeObserver(wrapperRef);

    // we save data to see if it changed
    const previouslyRenderedData = usePrevious(data);

    const [divWidth, divHeight] = [800, 600]

    // will be called initially and on every data change
    useEffect(() => {
        const svg = select(svgRef.current);

        // use dimensions from useResizeObserver,
        // but use getBoundingClientRect on initial render
        // (dimensions are null for the first render)
        const { width, height } = {
            "x": 50,
            "y": 50,
            "width": divWidth,
            "height": divHeight,
            "top": 0,
            "right": 0,
            "bottom": 0,
            "left": 0
        }
        // dimensions || wrapperRef.current.getBoundingClientRect();
        // console.log(dimensions)

        // transform hierarchical data
        const root = hierarchy(data);
        const treeLayout = tree().size([height, width]);

        const linkGenerator = linkHorizontal()
            .x(link => link.y)
            .y(link => link.x);

        // enrich hierarchical data with coordinates
        treeLayout(root);

        console.warn("descendants", root.descendants());
        console.warn("links", root.links());

        // nodes
        svg
            .selectAll(".node")
            .data(root.descendants())
            .join(enter => enter.append("circle").attr("opacity", 0))
            .attr("class", "node")
            .attr("cx", node => node.y)
            .attr("cy", node => node.x)
            .attr("r", 4)
            .transition()
            .duration(500)
            .delay(node => node.depth * 300)
            .attr("opacity", 1);

        // links
        const enteringAndUpdatingLinks = svg
            .selectAll(".link")
            .data(root.links())
            .join("path")
            .attr("class", "link")
            .attr("d", linkGenerator)
            .attr("stroke-dasharray", function () {
                const length = this.getTotalLength();
                return `${length} ${length}`;
            })
            .attr("stroke", "black")
            .attr("fill", "none")
            .attr("opacity", 1);

        if (data !== previouslyRenderedData) {
            enteringAndUpdatingLinks
                .attr("stroke-dashoffset", function () {
                    return this.getTotalLength();
                })
                .transition()
                .duration(500)
                .delay(link => link.source.depth * 500)
                .attr("stroke-dashoffset", 0);
        }

        // labels
        svg
            .selectAll(".label")
            .data(root.descendants())
            .join(enter => enter.append("text").attr("opacity", 0))
            .attr("class", "label")
            .attr("x", node => node.y)
            .attr("y", node => node.x - 12)
            .attr("text-anchor", "middle")
            .attr("font-size", 24)
            .text(node => node.data.name)
            .transition()
            .duration(500)
            .delay(node => node.depth * 300)
            .attr("opacity", 1);
    }, [data, dimensions, previouslyRenderedData]);

    return (
        <div ref={wrapperRef} style={{ display: 'flex', justifyContent: 'center', height: divHeight + 'px', width: divWidth + 'px', border: 'blue solid 2px' }}>
            <svg ref={svgRef}></svg>
        </div>
    );
}

export default TreeChart;