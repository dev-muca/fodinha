import Link from "next/link";
import { useState } from "react";
import { FaHandsAslInterpreting } from "react-icons/fa6";
import { GiCardAceHearts } from "react-icons/gi";
import { MdClose, MdMenu } from "react-icons/md";

export default function Menu() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  function toggleMenu() {
    setOpenMenu((prevStatus) => !prevStatus);
  }

  return (
    <>
      <MdMenu
        size={28}
        color="#FFFFFF"
        className="absolute right-6 top-9"
        onClick={toggleMenu}
      />
      {openMenu && (
        <aside className="bg-[#364b69] text-white border-l py-4 px-6 w-2/3 h-full absolute top-0 right-0 z-10">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold">Outros marcadores:</h3>
            <MdClose onClick={toggleMenu} size={24} />
          </div>
          <ul className="space-y-4">
            <li>
              <Link href="/fodinha" className="flex gap-2 items-center">
                <FaHandsAslInterpreting size={28} />
                <span>Marcador de Fodinha</span>
              </Link>
            </li>

            <li>
              <Link href="/truco" className="flex gap-2 items-center">
                <GiCardAceHearts size={28} />
                <span>Marcador de Truco</span>
              </Link>
            </li>

            <li className="flex gap-2 items-center"></li>
          </ul>
        </aside>
      )}
    </>
  );
}
