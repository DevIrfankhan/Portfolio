
import Hero from "./Hero";
import Navbar from "./Navbar";
import Project from "./Project";
import Skills from "./Skills";
import Contact from "./Contact";
import { useRef } from "react";

const Main = () => {
    const HeroRef = useRef(null)
    const ProjectRef = useRef(null)
    const SkillsRef = useRef(null)
    const ContactRef = useRef(null)
    const scrollSection = (ref) => {
        ref.current?.scrollIntoView({
            behavior: "smooth"
        })
    }
    return (
        <>
            <Navbar
                onHeroClick={() => scrollSection(HeroRef)}
                onProjectClick={() => scrollSection(ProjectRef)}
                onSkillsClick={() => scrollSection(SkillsRef)}
                onContactClick={() => scrollSection(ContactRef)}
            />
            <div ref={HeroRef}>

                <Hero />
            </div>
            <div ref={ProjectRef}>

                <Project />
            </div>
            <div ref={SkillsRef}>

                <Skills />

            </div>
            <div ref={ContactRef}>


                <Contact />
            </div>


        </>
    )
}

export default Main
