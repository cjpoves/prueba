
import { DeveloperAnimation } from "./DeveloperAnimation"
import { KidAnimated } from "./KidAnimated"
import "./MiHistoria.css"
import { UniversityAnimation } from "./UniversityAnimation"
import { WorkerStudentAnimation } from "./WorkerStudentAnimation"


export const MiHistoria = () => {

    return (
<>
<div className="MiHistoriaContenedor">
    <h1 className="centerText">Mi Historia</h1>

    <div className="historiaContenedor">
        <h4 className="textoHistoria" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora odit saepe at dicta fugit commodi quidem! Pariatur accusamus eveniet earum! Consectetur, perspiciatis fugit? Magni molestiae aliquam alias dolorem in exercitationem.</h4>
        <KidAnimated/>
    </div>

    <div className="historiaContenedor" >

        <h4 className="textoHistoria" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora odit saepe at dicta fugit commodi quidem! Pariatur accusamus eveniet earum! Consectetur, perspiciatis fugit? Magni molestiae aliquam alias dolorem in exercitationem.</h4>
        <UniversityAnimation/>

    </div>
    <div className="historiaContenedor" >
        <h4 className="textoHistoria" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora odit saepe at dicta fugit commodi quidem! Pariatur accusamus eveniet earum! Consectetur, perspiciatis fugit? Magni molestiae aliquam alias dolorem in exercitationem.</h4>
        <WorkerStudentAnimation/>

    </div>

    <div className="historiaContenedor" >
        <h4 className="textoHistoria" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora odit saepe at dicta fugit commodi quidem! Pariatur accusamus eveniet earum! Consectetur, perspiciatis fugit? Magni molestiae aliquam alias dolorem in exercitationem.</h4>
        <DeveloperAnimation/>

    </div>


    <h1>Separacion</h1>

</div>

</>
    )


}