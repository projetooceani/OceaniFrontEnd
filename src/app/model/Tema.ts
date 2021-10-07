import { Postagem } from "./Postagem";

export class Tema{
    public id: number;
    public descricao: string;
    public categoria: string;
    public keywords: string;
    public postagem: Postagem[];
}