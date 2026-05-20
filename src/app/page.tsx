import React from "react";
import { About } from "@/components/About";
import { CaseStudy } from "@/components/CaseStudy";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { portfolio } from "@/data/portfolio";

export default function Home() {
  return (
    <>
      <Header
        contact={portfolio.contact}
        name={portfolio.person.name}
        navigation={portfolio.navigation}
      />
      <main id="home" className="mx-auto max-w-6xl px-5 py-10 sm:px-6 lg:py-16">
        <Hero hero={portfolio.hero} />
        <About about={portfolio.about} />
        <Skills skills={portfolio.skills} />
        <Projects projects={portfolio.projects} />
        <CaseStudy caseStudy={portfolio.featuredCaseStudy} />
        <Education education={portfolio.education} />
        <Contact contact={portfolio.contact} />
      </main>
      <Footer name={portfolio.person.name} />
    </>
  );
}
