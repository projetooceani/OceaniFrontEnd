import { Tema } from "./Tema";
import { Usuario } from "./Usuario";

export class Postagem{
    public id: number;
    public titulo: string;
    public texto: string;
    public imagem: string;
    public hashtag: string;
    public data: Date;
    public usuario: Usuario;
    public tema: Tema;
    public curtida: number;
}