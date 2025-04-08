import "./NavBar.css"

export const NavBar = () => {

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      };


    return (
        <>
        <nav className="barraNavgeacion">
        <button onClick={() => scrollToSection("TecnologiasYProyectos")} className="btnTecnologias">Tecnologías y Proyectos</button>
        <button onClick={() => scrollToSection("MiHistoria")} className="btnMiHistoria">Mi Historia</button>
        <button onClick={() => scrollToSection("Experiencia")} className="btnExperiencia">Experiencia</button>
        <button onClick={() => scrollToSection("Contacto")} className="btnHabilidades">Contacto</button>


        </nav>
        </>

    )
}