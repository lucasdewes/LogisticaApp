export class Endereco {

    public enderecoId: number;
    public cep: string;
    public logradouro: string;
    public numero: string;
    public complemento: string;
    public bairro: string;
    public cidade: string;
    public uf: string;
    public clienteId: number;

    constructor(enderecoId: number, cep: string, logradouro: string, numero: string, complemento: string, bairro: string, cidade: string, uf: string, clienteId: number) {
        this.enderecoId = enderecoId;
        this.cep = cep
        this.logradouro = logradouro
        this.numero = numero
        this.complemento = complemento
        this.bairro = bairro
        this.cidade = cidade
        this.uf = uf
        this.clienteId = clienteId
    }

}