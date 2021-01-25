import React, { useRef } from "react"
import gsap from "gsap"
import "./index.css"
import useIntersectionObserver from "core/infrastructure/use-intersection-observer"
import Header from "../../../../core/ui/header/header"
import config from "data/site/config"

const Presentation = () => {
  const sectionPresentationTitle = useRef(null)
  const sectionPresentationSubTitle = useRef(null)

  useIntersectionObserver({
    refs: [sectionPresentationTitle],
    callback: () => {
      gsap.fromTo(
        sectionPresentationTitle.current,
        { y: 200, opacity: 0 },
        { duration: 0.6, y: 0, opacity: 1, ease: "power2.easeIn" }
      )
      gsap.fromTo(
        sectionPresentationSubTitle.current,
        { y: 200, opacity: 0 },
        { duration: 0.5, y: 0, opacity: 1, ease: "power2.easeIn" }
      )
    },
  })

  return (
    <section className="section-index relative">
      <div className="overflow-hidden relative">
        <br />
        <h1
          ref={sectionPresentationTitle}
          className="section-index__title opacity-0 max-w-xl"
        >
          <span className="wave mr-4 text-4xl">👋🏻</span> Hola, Soy Natalia
          Gamarra.
        </h1>
      </div>
      <div className="overflow-hidden relative">
        <p
          ref={sectionPresentationSubTitle}
          className="section-index__subtitle lg:text-lg mb-1 font-light opacity-0 max-w-lg"
        >
          {config.description}
        </p>
      </div>
      <div className="overflow-hidden relative">
        <br />
        Tengo más de cinco años trabajando en el tratamiento de grandes
        volúmenes de datos. Migré a España a estudiar un máster en Big Data
        Management, Technologies and Analytics en la{" "}
        <a href="https://www.talent.upc.edu/" target="_blank">
          <u>UPC</u>
        </a>{" "}
        y actualmente trabajo como colaboradora de Analytics & AI en{" "}
        <a href="https://www.ithinkupc.com/es" target="_blank">
          <u>iThinkUPC</u>
        </a>
        .
        <br />
        <br />
        <i>Escribo para compartir mis experiencias & conocimientos.</i>
      </div>
    </section>
  )
}

export default Presentation
