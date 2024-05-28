class Duplas {
    constructor (movimentos,coordenacao,ritmo,memoria,colaboracao,dupla) 

        {
        this.dupla = dupla;
        this.movimentos = movimentos;
        this.coordenacao = coordenacao;
        this.ritmo = ritmo;
        thiss.memoria = memoria;
        this.colaboracao = colaboracao;

    }
}

var dupla = [];
dupla[0] = new Duplas("Jheniffer","Bernardo","movimentos","coordenacao","ritmo","memoria","colaboracao");
dupla[1] = new Duplas("Gabriel","Gabriely","movimentos","coordenacao","ritmo","memoria","colaboracao");
dupla[2] = new Duplas("Ana", "Guilherme","movimentos","coordenacao","ritmo","memoria","colaboracao");
dupla[3] = new Duplas("Vitória","Isabella","movimentos","coordenacao","ritmo","memoria","colaboracao");
dupla[4] = new Duplas("Eduarda","Giovani","movimentos","coordenacao","ritmo","memoria","colaboracao");
dupla[5] = new Duplas("Lorrainy","Isadora","movimentos","coordenacao","ritmo","memoria","colaboracao");
dupla[6] = new Duplas("João Pedro", "Sabrina","movimentos","coordenacao","ritmo","memoria","colaboracao");
dupla[7] = new Pessoa("Laura","Nadyeska","movimentos","coordenacao","ritmo","memoria","colaboracao");


class Posicoes {
    constructor (linhaReta,meiaLua,circulo) 

        {
         this.linhaReta = linhaReta;
         this.meiaLua = meiaLua;
         this.circulo = circulo
    }
}

var posicoes =[];
Posicoes[0] = new posicoesInicial("linhaReta","intercalada");
Posicoes [1]= new posicaoMeio("circulo", "meiaLua", "linhaReta");
Posicoes[2] = new posicoesFinal("linhaReta", "intercalada")

class Musica {
    constructor (musica) 

        {
         this.musica = musica;
    }
}

var musicaCarolina =[];
musica = new musica("remix Carolina com uma frase falada pela peppa pig");
