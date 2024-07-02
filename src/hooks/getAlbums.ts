import { Album } from "@/entities/album.entity"

export async function getAlbums(): Promise<Album[]>{
    const res = await fetch('http://localhost:4000/album', {cache: 'no-store'})

    const data = await res.json()

    return data
}