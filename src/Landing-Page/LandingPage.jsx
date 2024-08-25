import React from "react";
import Hero from "./Hero-Section/Hero";
import ServiceCard from "./Service-modules/Service-card";


export default function LandingPage(){
    return(
        <React.Fragment>
            <Hero/>
            <ServiceCard/>
        </React.Fragment>
    );
}