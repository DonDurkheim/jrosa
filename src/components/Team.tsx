
import React from 'react';
import kalorinaImage from '../assets/kalorina.jpg';

export const Team = () => {
  const teamMembers = [
    {
      image: "/assets/jenny_rosa.jpg",
      name: "Jenny Rosa",
      position: "Gerente general",
      socialIcons: []
    },
    {
      image: "/assets/gianna_rosa.png",
      name: "Gianna Rosa",
      position: "Socia legal",
      socialIcons: []
    },
    {
      image: "/assets/risselot_rosa.jpeg",
      name: "Lisselot Rosa",
      position: "Socia de Outsourcing",
      socialIcons: []
    },
    {
      image: "/assets/ana_cruz.jpg",
      name: "Ana Cruz",
      position: "Encargada de Tramitación Contable",
      socialIcons: []
    },
    {
      image: kalorinaImage,
      name: "Karoline Rosa",
      position: "Area de trámite documentario",
      socialIcons: []
    }
  ];

  return (
    <section className="w-full">
      <div className="bg-neutral-50 py-12 md:py-16 lg:py-[105px] px-4 md:px-8 lg:px-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-[rgba(225,56,51,1)] text-sm md:text-[15px] font-bold">
            Nuestro Equipo
          </div>
          <h2 className="text-[rgba(38,46,46,1)] text-2xl md:text-3xl lg:text-[40px] font-bold leading-tight mt-4 md:mt-[21px] px-4">
            Nuestro equipo de expertos dedicados a tu éxito financiero.
          </h2>
          <div className="bg-[rgba(225,56,51,1)] w-[60px] h-[3px] mx-auto mt-6 md:mt-8" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-10 md:mt-12 lg:mt-[60px]">
            {teamMembers.map((member, index) => (
              <article key={index} className="text-center overflow-hidden">
                <img
                  src={member.image}
                  className={`w-48 h-48 object-cover shadow-lg rounded-full mb-6 md:mb-7 mx-auto ${member.name === "Ana Cruz" ? "object-center" : "object-top"}`}
                  alt={member.name}
                />
                <h3 className="text-[rgba(38,46,46,1)] text-xl md:text-[22px] font-bold leading-tight">
                  {member.name}
                </h3>
                <div className="text-[rgba(225,56,51,1)] text-sm md:text-[15px] font-semibold mt-3 md:mt-[18px]">
                  {member.position}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
