"use client"

import { Album } from "@/entities/album.entity";
import { useState } from "react";

export default function AlbumCard({...props}: Album) {

  const [hover, setHover] = useState(false)
  const onMouseEnter = () => setHover(true)
  const onMouseLeave = () => setHover(false)

  return (
    <a href={props.link} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className="w-64 h-64 bg-slate-500 flex">
      {
        hover ? (
          <div className="relative cursor-pointer">
            <img className="opacity-5 object-cover" src={props.capa}></img>

            <div className="absolute top-0 left-0 flex justify-center items-center flex-col w-full h-full">
              <p>{props.nome}</p>
              <p>{props.banda.nome}</p>
            </div>


          </div>
        ) : (
          <img src={props.capa}></img>
        )
      }
    </a>
  );
}