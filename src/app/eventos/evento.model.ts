export class Evento{
    public hashtag:string;
    public nombre:string;
    public fechaInicio:Date;
    public confirmados:string[];
    public talVez:string[];
    public noAsistiran:string[];    
    public imagenInfoURL:string;

    constructor(hashtag, nombre, fechaInicio, imagenInfoURL){
        this.hashtag  = hashtag;
        this.nombre = nombre;        
        this.fechaInicio = fechaInicio;
        this.imagenInfoURL = imagenInfoURL;
    }
}