class Oportunidade {
  constructor({
    id = null,
    stage_id = null,
    title = null,
    value = null,
    currency = null,
    add_time = null,
    active = null,
    status = null,
  }) {
    this.id = id;
    this.stage_id = stage_id;
    this.title = title;
    this.value = value;
    this.currency = currency;
    this.add_time = add_time;
    this.active = active;
    this.status = status;
  }

  entidadeValida() {
    const todasAsPropriedades = Object.getOwnPropertyNames(this);
    const propriedadesInvalidas = todasAsPropriedades
        .filter(prop => this[prop] === "undefined" || this[prop] === "null")
        .map(prop => `campo [${prop}] inválido(a)`);
    
    return {
        valid: propriedadesInvalidas.length === 0,
        error: propriedadesInvalidas
    };

  }

}

module.exports = Oportunidade;
