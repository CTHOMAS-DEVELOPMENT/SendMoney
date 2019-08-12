import * as d3 from "d3";
import React from "react";
export const getSlices =(pie)=>{
    let colours = ['#EAEAEE', '#FFB428' ]
    var arc = d3.arc()
    .innerRadius(25)
    .outerRadius(50);
    return pie.map((slice, index) => {
        let sliceColor = colours[index];
        return <path d={arc(slice)} fill={sliceColor} key={index}/>
    })
}