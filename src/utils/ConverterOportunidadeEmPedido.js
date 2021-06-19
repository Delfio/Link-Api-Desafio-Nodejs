const { toXML } = require("jstoxml");
const OportunidadeEntity = require('../entities/Oportunidade');

function ConverterOportunidadeEmPedido({
  cli_nome,
  item_codigo,
  item_descricao,
  item_valor,
  item_quantidade
}) {
  return toXML({
    pedido: {
      cliente: {
        nome: cli_nome,
      },
      itens: {
        item: {
          codigo: item_codigo,
          descricao: item_descricao,
          vlr_unit: item_valor,
          qtde: String(item_quantidade),
        },
      },
    },
  });
}

module.exports = ConverterOportunidadeEmPedido;