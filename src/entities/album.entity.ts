import { Banda } from "./banda.entity"

export interface Album{
    id: number
    nome: string
    capa: string
    link: string
    banda: Banda
    nota: number
}