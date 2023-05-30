/* pesquisa tudo errada
// Métodos Construtores

// sintax básica
// public = modificador de acesso que define que a classe em questão é acessivel de qualquer parte do código
    // Os modificadores existentes são: public, private e protected
// class = palavra-chave que define que estamos criando uma classe
// nome da classe (no exemplo: carro) = o nome da classe que está sendo definido 
public class carro {
    // aqui dentro nós podemos definir vários atributo para a classe 
    // com o tipo de informação que está sendo armazernada = a informaçã em si
    private String modelo;
    private double preco;
    private String cor;
    private String marca; 

// Construtor padrão por programa
    public carro () {
    // Contrutor padrão sem nenhum parâmetro, que o proprio programa cria para toda classe criada no codigo
    // Sendo assim, toda classe que você criar no código sem especificar nenhum parâmetro, é como se você escrevesse exatamente essas linhas
    }

// Construtor com parâmetros definidos
    public carro (String modelo, double preco, String cor, String marca) {
        this.modelo = modelo;
        this.preco = preco;
        this.cor = cor;
        this.marca = marca;
    }
}
*/

// Metodo contrutores
class pessoa {
    constructor (nome, cpf, nascimento) {
        this.nome = getElementById('nome').value;
        this.cpf = getElementById('cpf').value;
        this.nascimento = getElementById('nascimento').value;
    }
}

console.log ('Construtor executando')

const p1 = new pessoa (nome, cpf, nascimento);

function dados () {
    console.log(p1.nome);
    console.log(p1.cpf);
    console.log(p1.nascimento);
}