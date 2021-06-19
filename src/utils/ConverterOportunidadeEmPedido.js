function ConverterOportunidadeEmPedido({
  cli_nome,
  item_codigo,
  item_descricao,
  item_valor,
  item_quantidade,
}) {
  return `<?xml version="1.0" encoding="UTF-8"?>
  <pedido>
   <cliente>
   <nome>${cli_nome}</nome>
   </cliente>
   <itens>
   <item>
   <codigo>${item_codigo}</codigo>
   <descricao>${item_descricao}</descricao>
   <qtde>${item_quantidade}</qtde>
   <vlr_unit>${item_valor}</vlr_unit>
   </item>
   </itens>
  </pedido>`;
}

module.exports = ConverterOportunidadeEmPedido;
