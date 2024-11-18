import Image from "next/image";
import LogoFT from "@/lib/images/LogoFT.png";
import families from "@/lib/images/families.png";

import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full bg-[#ebe2c9]">
      <div className="flex flex-col gap-8 items-center container">
        <div className="flex flex-col sm:flex-row items-center gap-12 pt-6 sm:pt-0">
          <p className="text-3xl lg:text-4xl !leading-tight mx-auto max-w-xl text-center sm:text-left font-leaguespartan font-bold uppercase text-[#373F4E]">
            Conectando <br/><span className="text-[#e1af40]">familias</span> <br/>para fortalecer <br/>la <span className="text-[#e1af40]">convivencia</span> <br/>en nuestro colegio
          </p>
          <Image src={families} alt='Familias AFA Centro educativo Jara' className="max-w-[400px]"/>
          </div>
      </div>
    </div>
  );
}
