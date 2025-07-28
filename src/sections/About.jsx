import React, { useRef } from 'react'
import Card from '../components/Card'
import { Globe } from '../components/Globe';
import CopyEmailButton from '../components/CopyEmailButton';
import {FrameWork} from '../components/FrameWork';

const About = () => {


  const  grid2Container = useRef();
  return (
    <section className='c-space section-spacing  overflow-y-scroll no-scrollbar'>
        <h2 className='text-heading'>About me</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-6
        md:auto-rows-[18rem] mt-12">
            {/*grid 1*/}
            <div className='flex items-end grid-default-color grid-1'>
                    <img src="assets/coding-pov.png" alt="coding" 
                    className='absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3]
                     md:left-50 md:inset-y-18 lg:scale-[2.5]' />
                     <div className="z-10">
                        <p className='headtext'>HI im makito</p>
                        <p className='subtext'> Over the last 4 years, I developed my frontend and backend dev
                        skills to deliver dynamic and software and web applications.
                        </p>
                     </div>
                     <div className='inset-x-0 absolute pointer-events-none
                     -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo' />

            </div>

            {/*grid 2*/}
            <div  ref={grid2Container} className="grid-default-color grid-2">
                    <div className="flex items-center justify-center w-full h-full">
                        <p className="flex items-end text-5xl text-gray-500">code is craft</p>
                        <Card containerRef={grid2Container} style={{rotate: "75deg",top:"30%",left:"20%"}} text="SOLID"/>
                        <Card containerRef={grid2Container}  style={{rotate: "-30deg",top:"60%",left:"45%"}} text="Design Pattern"/>
                        <Card  containerRef={grid2Container} style={{rotate: "90deg",buttom:"30%",left:"70%"}} text="Design principle"/>
                        <Card containerRef={grid2Container} style={{rotate: "-45deg",top:"55%",left:"0%"}} text="SEO"/>
                        <Card containerRef={grid2Container}  style={{rotate: "20deg",top:"10%",left:"38%"}} text="Agile"/>
                        <Card containerRef={grid2Container} style={{rotate: "30deg",top:"70%",left:"70%"}} image="assets/logos/react.svg"/>
                        <Card containerRef={grid2Container} style={{rotate: "-45deg",top:"70%",left:"25%"}} image="assets/logos/blazor-pink.png"/>
                        <Card containerRef={grid2Container} style={{rotate: "-45deg",top:"5%",left:"10"}} image="assets/logos/csharp-pink.png"/>
                    </div>
            </div>

             {/*grid 3*/}
             <div className="grid-black-color grid-3">
                  <div className="z-10 w-[50%]" >
                      <p className='headtext'>Time zone</p>
                      <p className='subtext'>Im based in Centurion South Africa and im open to remote work </p>
                  </div>

                  <figure className='absolute left-[30%] top-[10%]'>
                        <Globe />
                  </figure>
            </div>

             {/*grid 4*/}
             <div className="grid-special-color grid-4">
              <div className='flex flex-col items-center justify-center gap-4 size-full'>
                  <p>
                    Do you want to start a project together?
                  </p>
                  <CopyEmailButton />
              </div>
            </div>
             {/*grid 5*/}
             <div className="grid-default-color grid-5">
                    <div className="z-10 w-[50%]">
                              <p className='headtext'>Tech Stack</p>
                              <p className="subtext">I specailize in a variety of languages, frameworks, and tools 
                                that allow me to build robust and scalable applications.
                              </p>
                      </div>

                  <div  className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
                    
                      <FrameWork />
                  </div>
            </div>
        </div>
    </section>
  )
}

export default About