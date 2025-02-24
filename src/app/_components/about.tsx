import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { Check, MapPin } from "lucide-react";
import Image from "next/image";
import about1Img from "../../../public/about-1.png";
import about2Img from "../../../public/about-2.png";
export function About() {
  return (
    <section className="bg-[#FDF6ec] py-16">
      <div className="contaiiner mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative" data-aos="fade-up-right">
            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden ">
              <Image
                src={about1Img}
                alt="Foto do cachorro"
                fill
                quality={100}
                priority
                className="object-cover hover:scale-110 duration-300"
              />
            </div>
            <div className="absolute w-40 h-40 right-4 -bottom-8 border-4 overflow-hidden rounded-lg border-white">
              <Image
                src={about2Img}
                alt="Foto do cachorro"
                fill
                quality={100}
                priority
              />
            </div>
          </div>
          <div className="space-y-6 mt-10" data-aos="fade-up-left">
            <h2 className="text-4xl font-bold">SOBRE</h2>
            <p>
              Seja bem-vindo ao nosso petshop, um espaço dedicado ao cuidado e
              bem-estar do seu animal de estimação! Aqui, paixão e
              profissionalismo se unem para oferecer uma experiência completa,
              desde a nutrição adequada com rações premium até o relaxamento de
              um banho e tosa. Nossa equipe, composta por especialistas
              apaixonados por animais, está pronta para atender às necessidades
              do seu pet, proporcionando um ambiente acolhedor e seguro. Venha
              nos visitar e descubra como podemos tornar a vida do seu
              companheiro ainda mais feliz e saudável!
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Aberto desde 2006.
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Equipe com mais de 10 veterinários.
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Qualidade é nossa prioridade.
              </li>
            </ul>
            <div className="flex gap-2">
              <a
                href="#"
                className="bg-[#E84C3D] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
              >
                <WhatsappLogo className="w-5 h-5 text-white" />
                Contato via WhatsApp
              </a>
              <a
                href="#"
                className=" flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
              >
                <MapPin className="w-5 h-5 text-black" />
                Contato via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
