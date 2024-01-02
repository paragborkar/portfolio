"use client";
import { experiencesData } from '@/lib/data';
import React from 'react';
import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
  return (
    <section id='experience' >
         <h2  className='text-3xl font-medium capitalize text-center mb-[5vh]'>Experience</h2>
         <VerticalTimeline lineColor='' >
                {
                    experiencesData.map((item, index) =>(
                        <React.Fragment>
                             <VerticalTimelineElement key={index}
                             contentStyle={{
                                background: "rgba(189, 195, 199)",
                                boxShadow: "none",
                                border: "1px solid rgba(0, 0, 0, 0.05)",
                                textAlign: "left",
                                padding: "1.3rem 2rem",
                              }}
                              contentArrowStyle={{
                                borderRight:
                                  "0.4rem solid rgba(0, 0, 0, 0.5)",
                              }}
                              date={item.date}
                              icon={item.icon}
                              iconStyle={{
                                background:
                                "rgba(255, 255, 255)",
                                fontSize: "1.5rem",
                              }}
                             >
                                <h3 className="font-semibold capitalize" >{item.title}</h3>
                                <p className="font-normal !mt-0" >{item.location}</p>
                                <p className="!mt-1 !font-normal" >{item.description}</p>
                             </VerticalTimelineElement>
                        </React.Fragment>
                       
                    ))
                }
         </VerticalTimeline>
    </section>
  )
}

export default Experience
