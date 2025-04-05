
import { useState } from "react"
import "./TecnologiasYProyectos.css"

export const TecnologiasYProyectos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
    const tecnologias = [
        {
          name: "React",
          icon: "src/assets/iconos/react-svgrepo-com.svg",
          projects: [
            { title: "Cat-Api", image: "src/assets/Capturas paginas/CatApiImagen.png", url: "https://cat-api-cjpoves.netlify.app/" },
            { title: "ToDo App", image: "src/assets/Capturas paginas/ToDoAppImagen.png", url: "https://to-do-app-react-cjpoves.netlify.app/" },
            { title: "Web Películas", image: "src/assets/Capturas paginas/BuscadorpeliculasImagen.png", url: "https://web-peliculas-react-cjpoves.netlify.app/" },
            { title: "Restaurante", image: "src/assets/Capturas paginas/RestauranteImagen.png", url: "https://restaurante-react-cjpoves.netlify.app/" },
            { title: "Web Finanzas", image: "src/assets/Capturas paginas/WebFinanzasImagen.png", url: "https://web-finanzas-react.netlify.app/" },
            
        
            ],
        },
        {
          name: "Node.js",
          icon: "src/assets/iconos/node-js-svgrepo-com.svg",
          projects: [
            { title: "Web Finanzas", image: "src/assets/Capturas paginas/WebFinanzasImagen.png", url: "https://web-finanzas-react.netlify.app/" },
            ,
          ],
        },
        {
            name: "JavaScript",
            icon: "src/assets/iconos/javascript-svgrepo-com.svg",
            projects: [
              { title: "Web Finanzas", image: "src/assets/Capturas paginas/WebFinanzasImagen.png", url: "https://web-finanzas-react.netlify.app/" },
              ,
            ],
          },
          {
            name: "Firebase",
            icon: "src/assets/iconos/firebase-svgrepo-com.svg",
            projects: [
                { title: "Web Películas", image: "src/assets/Capturas paginas/BuscadorpeliculasImagen.png", url: "https://web-peliculas-react-cjpoves.netlify.app/" },
                { title: "Restaurante", image: "src/assets/Capturas paginas/RestauranteImagen.png", url: "https://restaurante-react-cjpoves.netlify.app/" },
              ,
            ],
          },
        // Añade más tecnologías aquí
      ];
    
      
      
        
      
        const prevTech = () => {
          setCurrentIndex((prev) => (prev === 0 ? tecnologias.length - 1 : prev - 1));
        };
      
        const nextTech = () => {
          setCurrentIndex((prev) => (prev === tecnologias.length - 1 ? 0 : prev + 1));
        };
    

        const currentTech = tecnologias[currentIndex];
    return(
        <>

        <div className="showcase-container">
        <h1 className="centerText"> Tecnologías y proyectos</h1>

      {/* Carrusel */}
      <div className="carousel">
        <button onClick={prevTech} className="arrow left">‹</button>

        <div className="carousel-track">

          {tecnologias.map((tecnologia, index) => {
            const isActive = index === currentIndex;
            const isAdjacent =
              index === (currentIndex + 1) % tecnologias.length ||
              index === (currentIndex - 1 + tecnologias.length) % tecnologias.length;

            return (
              <div
                key={tecnologia.name}
                className={`tech-icon ${isActive ? "active" : isAdjacent ? "adjacent" : "hidden"}`}
              >
                <img src={tecnologia.icon} alt={tecnologia.name} />
              </div>
            );
          })}


        </div>

        <button onClick={nextTech} className="arrow right">›</button>
      </div>

      {/* Proyectos */}
      <div className="projects">
        {currentTech.projects.map((project) => (
          <a
            key={project.title}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <img src={project.image} alt={project.title} />
            <div className="project-title">{project.title}</div>
          </a>
        ))}
      </div>
    </div>
  
        </>
    )
}