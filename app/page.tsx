import Hero from "@/components/hero";
import { ButtonSubscribe } from '@/components/ui/buttonSubscribe'
import LogoFamilias from '@/lib/images/logo-familias.png'
import Image from "next/image";

export default async function Index() {

  return (
    <>
    <div className="container flex flex-col gap-20 p-5 text-[#373F4E]">
      <Hero />
      <main className="flex-1 flex flex-col container">
        <div id="quees">
          <h2 className="text-center text-3xl uppercase font-bold mb-8 text-[#373F4E]">¿Qué es la AFA?</h2>
          
          <div className="text-[18px] pb-12">
            <div className="flex flex-col sm:flex-row items-start">
              <div>
                <p className="pb-6">
                  La AFA es la Asoción de Familias de Alumnos del Centro Educativo Jara y tiene como objetivos principales:
                </p>
                <ul className="list-disc list-inside pb-6">
                  <li>Disponer un marco formal desde el que involucrarnos con el centro y desde el que encauzar todas aquellas aportaciones e iniciativas que puedan mejorar la convivencia de nuestra comunidad educativa y la mejora de las condiciones en las que se desarrolla la educación de nuestros hijos e hijas.</li>
                  <li>Servir de órgano privilegiado de interlocución entre las familias y el colegio para apoyar los esfuerzo de la direcciín por conseguir el concierto de la Comunidad de Madrid.</li>
                </ul>
                <p className="pb-4">La AMPA representa a todos sus socios. El trabajo se hace por Grupos de Trabajo. Éstos grupos están abiertos con grados de implicación flexibles, que siempre necesitan gente nueva. Es necesario asociarse mediante ficha de socio  y pago de cuota mensual.</p>

                <p className="pb-4">La Junta se reúne cada mes y trabaja vía email. Se celebra una Asamblea General Ordinaria al año, en octubre, a las que están invitados todos los asociados para participar en la toma de decisiones tan importantes como la elección de cargos de la Junta Directiva, la postura sobre la jornada escolar (continua o partida), la aprobación de actas, propuestas, etc.</p>

                <p className="pb-4">La Junta Directiva de la Asociación está formada por el Presidente, Vicepresidente, Tesorero, Secretario, Representante de la AMPA en el Consejo Escolar y Vocales. Los vocales se encargan o forma parte de un Grupo de Trabajo. Cualquier socio puede ser vocal de la Junta.</p>
              </div>
              <div>
                <Image src={LogoFamilias} alt="logo familias"/>
              </div>
            </div>
            
          </div>
        </div>
        <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
        <div id="inscribirse" className="flex justify-center gap-4 flex-col items-center pt-6 text-center sm:text-left">
          <p className="text-3xl uppercase font-bold text-[#373F4E]">Forma parte de la AFA Colegio Jara</p>
          <p className="text-xl">Inscríbete mediante el siguiente formulario para formar parte de la AFA Colegio Jara</p>

          <ButtonSubscribe />
        </div>
      </main>
      </div>
    </>
  );
}
