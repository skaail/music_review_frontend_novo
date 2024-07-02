"use client"

import { Banda } from "@/entities/banda.entity"
import { getBandas } from "@/hooks/getBandas"
import { useEffect, useState } from "react"

export default function Page(){
    const [bandas, setBandas] = useState<Banda[]>([])

    const getAlbumsApi = async () => {
        const data = await getBandas()
        setBandas(data)
    }

    useEffect(() => {
        getAlbumsApi()
    }, [])

    return (
        <div>
            {bandas.map((banda) => (
                <>
                <p>{banda.nome}</p>
                <p>{banda.albuns?.length}</p>
                </>
                
            ))}
        </div>
    )
}