import Image from "next/image";

import "./header.css";
import { Info } from "../information/information";

export function Header() {
  return (
    <div className="header">
      <div>
        <h1>Hi there! I'm Guilherme Rodrigues! 👋</h1>
        <h2>Software Engineer - Backend | Fullstack</h2>
      </div>
      <Image
        src="/me.jpeg"
        alt="Guilherme Rodrigues"
        width={325}
        height={325}
        priority
      />
    </div>
  );
}
