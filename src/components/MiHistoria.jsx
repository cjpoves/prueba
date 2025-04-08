
import { useState } from "react"
import { DeveloperAnimation } from "./DeveloperAnimation"
import { KidAnimated } from "./KidAnimated"
import "./MiHistoria.css"
import { UniversityAnimation } from "./UniversityAnimation"
import { WorkerStudentAnimation } from "./WorkerStudentAnimation"


export const MiHistoria = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const historias = [
    {
      descripcion: <h4>Desde pequeño nunca tuve un camino claro a seguir, mientras todos los niños querían ser astronautas, futbolistas o médicos, yo buscaba que me motivaba y que quería ser de mayor</h4>,
      component: KidAnimated,
    },
    {
        descripcion: <h4>Con 17 años y sin un rumbo claro, decidí estudiar derecho, ya que era la tradición en mi familia y un futuro asegurado. Pero todos esos años me sentía perdido y que no me apasionaba, lo cual me desmotivaba constantemente hasta que terminé terminando la carrera</h4>,
        component: UniversityAnimation,
      },
      {
        descripcion: <h4>Recién graduado, decidí hacer un cambio total para buscar la felicidad y arriesgarme. Empecé a estudiar programación mientras trabajaba, compaginando y esforzándome en ambos.</h4>,
        component: WorkerStudentAnimation,
      },
      {
        descripcion: <h4>Actualmente continuó aprendiendo y mejorando cada día. Muchos días sentí la incertidumbre y el miedo ante este camino, pero definitivamente, fue la mejor opción para perseguir mi felicidad y un trabajo que me apasione</h4>,
        component: DeveloperAnimation,
      },
    
  ];



  const prevHistoria = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

    
      const nextHistoria = () => {
        if (currentIndex < historias.length - 1) {
          setCurrentIndex(currentIndex + 1);
        }
      };

      const ActualComponent = historias[currentIndex].component;
    return (
<>
<div id="MiHistoria" className="MiHistoriaContenedor">
    <h1 className="centerText">Mi Historia</h1>

    <h3 className="centerText">Esta no es la típica historia de un apasionado a la programación desde los 3 años, sino mi verdadera historia que me ha llevado hasta aquí</h3>


    <div className="carouselHistoria">
        <button onClick={prevHistoria} className={`arrowHistoria left ${currentIndex === 0 ? "disabled" : ""}`}
            disabled={currentIndex === 0}>‹</button>



        

          <div className="carousel-trackHistoria">
          {historias.map((historia, index) => {
            const Component = historia.component;
            const isActive = index === currentIndex;
            return (
              <div
                key={index}
                className={`historia-icon ${isActive ? "active" : "hidden"}`}
              >
                <Component />

                <div className="descripcionContenedor">
                {isActive && historia.descripcion}
                </div>
                
              </div>
            );
          })}
        </div>


        <button onClick={nextHistoria} className={`arrowHistoria right ${currentIndex === historias.length - 1 ? "disabled" : ""}`}
            disabled={currentIndex === historias.length - 1}>›</button>
      </div>



    



</div>

</>
    )


}


