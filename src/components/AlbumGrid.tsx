"use client"

import { Album } from "@/entities/album.entity"
import { getAlbums } from "@/hooks/getAlbums"
import { useEffect, useState } from "react"
import AlbumCard from "./AlbumCard"
import { getSocket } from "@/utils/socket"


export default function AlbumGrid() {
    const [albums, setAlbums] = useState<Album[]>([])

    const getAlbumsApi = async () => {
        const data = await getAlbums()
        setAlbums(data)
    }

    useEffect(() => {
        getAlbumsApi()

        const socket = getSocket();

        // Listen for new albums
        const handleNewAlbum = (album: Album) => {
            setAlbums((prevAlbums) => [...prevAlbums, album]);
        };

        socket.on('newAlbum', handleNewAlbum);

        // Clean up the effect
        return () => {
            socket.off('newAlbum', handleNewAlbum);
        };
    }, [])

    

    return (
        <div className="flex gap-5 flex-wrap">
            {albums.map((album) => (
                <AlbumCard key={album.id} id={0} nome={album.nome} capa={album.capa} link={album.link} banda={album.banda} nota={album.nota} />
            ))}
        </div>
    )
}