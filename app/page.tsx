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
                  La AFA Colegio Jara Valdemorillo es la Asociación de Familias de Alumnos y Alumnas del Centro Educativo Jara y tiene como objetivos principales:
                </p>
                <ul className="list-disc list-inside pb-6">
                  <li>Disponer un marco formal desde el que involucrarnos con el centro y desde el que encauzar todas aquellas aportaciones e iniciativas que puedan mejorar la convivencia de nuestra comunidad educativa y la mejora de las condiciones en las que se desarrolla la educación de nuestros hijos e hijas.</li>
                  <li>Servir de órgano privilegiado de interlocución entre las familias y el colegio para apoyar los esfuerzos de la dirección por conseguir el concierto de la Comunidad de Madrid.</li>
                </ul>
                <p className="pb-4">La AFA representa a todos sus socios. El trabajo se hará por Grupos de Trabajo. Éstos grupos estarán abiertos con grados de implicación flexibles y se favorecerá la incorporación de aquellas personas que deseen aportar. La Junta se reunirá cada mes y/o trabajará vía email. Se celebrarán al menos dos Asambleas Generales Ordinarias al año y las Extraordinarias que sean necesarias a petición de los socios, según establecen los Estatutos.</p>

                <p className="pb-4">La Junta Directiva de la Asociación está formada por el Presidente, Vicepresidente, Tesorero, Secretario y Vocales. Cualquier socio podrá ser miembro de la Junta.</p>

                <p className="pb-4">Es necesario asociarse mediante ficha de socio, por lo cual os rogamos que si estáis interesados en formar parte del AFA Colegio Jara Valdemorillo rellenéis el formulario.</p>
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
