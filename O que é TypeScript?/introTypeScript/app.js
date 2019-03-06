var Produto = /** @class */ (function () {
    function Produto(_codigo, _descricao, _preco) {
        this.codigo = _codigo;
        this.descricao = _descricao;
        this.preco = _preco;
    }
    Produto.prototype.getDados = function () {
        return 'Produto: ' + this.codigo + ': ' + this.descricao + ' - R$ ' + this.preco;
    };
    return Produto;
}());
var p = new Produto('001', 'Produto Teste', 29.9);
var dados = p.getDados();
alert(dados);
