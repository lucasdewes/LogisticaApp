import { Endereco } from "./endereco.model";

export class Cliente {

    public clienteId: number;
    public clienteNome: string;
    public dataNascimento: Date;
    public sexo: string;
    public endereco: Endereco;


    constructor(clienteId: number, clienteNome: string, dataNascimento: Date, sexo: string, endereco: Endereco) {
        this.clienteId = clienteId;
        this.clienteNome = clienteNome;
        this.dataNascimento = dataNascimento;
        this.sexo = sexo;
        this.endereco = endereco
    }

}