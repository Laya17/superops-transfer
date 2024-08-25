import { useState } from "react";
import style from "./Service-card.module.css";

export default function ServiceCard(){
    const services=[
        {title:"PSA",
        subtitle:"A lean, powerful PSA for world-class service delivery" , 
        list:[{heading:"Service desk",content:"Deliver exceptional levels of services with a stunningly intuitive service desk"},
        {heading:"Automated invoicing",content: "Ditch the grunt work in invoicing with a flexible, automated invoicing setup"},
        {heading:"Smart tracking",content:"Boost profitability  with anytimw,anywhere time-tracking"},
        {heading:"Side conversations", content:"Avoid fragmented conversations.Keep all external conversation in one place"}]},

{title:"RMM",subtitle:"Your ultimate IT control center for complete visibity" , list:[{heading:"Patch management",content:"Deploy patches automatically with granular control to keep assets secure"},
    {heading:"Remote access",content: "Troubleshoot issues remotely with a wide range of useful integrations"},
{heading:"Network monitoring",content:"Automate scans,unmask hidden threats, and gain complete network visibility"},
{heading:"Side conversations", content:"Filter  noise with AI-powered alerts and focus  on issues that matter"}]},

{title:"IT documentation",subtitle:"Save hours spent hunting for disjointed information" , list:[{heading:"Document",content:"Deploy patches automatically with granular control to keep assets secure"},
    {heading:"Organize",content: "Troubleshoot issues remotely with a wide range of useful integrations"},
{heading:"Connect",content:"Automate scans,unmask hidden threats, and gain complete network visibility"},
{heading:"Empower", content:"Filter  noise with AI-powered alerts and focus  on issues that matter"}]},

{title:"Project management",subtitle:"Conquer large -scale projects,one milestone at a time" , list:[{heading:"Real-time visibility",content:"Deploy patches automatically with granular control to keep assets secure"},
    {heading:"Milestones",content: "Troubleshoot issues remotely with a wide range of useful integrations"},
{heading:"Collaboration",content:"Automate scans,unmask hidden threats, and gain complete network visibility"},
{heading:"Time  tracking", content:"Filter  noise with AI-powered alerts and focus  on issues that matter"}]}
    ];

    const [servicestate,setserviceState] =useState(services[0]);

    return(
        <div className={style.ServicesContainer}>
            <div className={style.leftside}>
                <div className={style.titleContainer}>
                    <h1 className={style.title}>Do it all with</h1>
                    <h1 className={style.title}>SuperOps</h1>
                </div>
                <p className={style.subtitle}>One truly unified platform to super power your MSP to growth</p>
                <Services services={services} servicestate={servicestate} setservicestate={setserviceState}/>
            </div>
            <div className={style.rightside}>
                <div>
                    {servicestate.list.map(element=>(
                        <div>
                        <p>{element.heading}</p>
                        <p>{element.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}



export function Services({ services,servicestate, setservicestate }) {
    return (
        <div className={style.ServicesdivisionsContainer}>
            {services.map((element, index) => (
                <div key={index} onClick={() => setservicestate(element)}>
                    <p>{element.title}</p>
                    {element.title===servicestate.title && <p>{element.subtitle}</p>}
                </div>
            ))}
        </div>
    );
}