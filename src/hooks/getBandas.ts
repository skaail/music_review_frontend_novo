import { Banda } from "@/entities/banda.entity"

export async function getBandas(): Promise<Banda[]>{
    const res = await fetch('http://localhost:4000/banda', {cache: 'no-store'})

    const data = await res.json()

    return data
}