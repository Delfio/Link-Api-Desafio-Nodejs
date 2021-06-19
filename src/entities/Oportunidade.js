class Oportunidade {
  constructor({
    id,
    creator_user_id,
    user_id,
    person_id,
    org_id,
    stage_id,
    title,
    value,
    currency,
    add_time,
    active,
    deleted,
    status,
    pipeline_id,
    products_count,
  }) {
    this.id = id;
    this.creator_user_id = creator_user_id;
    this.user_id = user_id;
    this.person_id = person_id;
    this.org_id = org_id;
    this.stage_id = stage_id;
    this.title = title;
    this.value = value;
    this.currency = currency;
    this.add_time = add_time;
    this.active = active;
    this.deleted = deleted;
    this.status = status;
    this.pipeline_id = pipeline_id;
    this.products_count = products_count;
  }

  entidadeValida() {
    const todasAsPropriedades = Object.getOwnPropertyNames(this);
    const propriedadesInvalidas = todasAsPropriedades
        .filter(prop => !this[prop])
        .map(prop => `${prop} inválida`);
    
    return {
        valid: propriedadesInvalidas.length === 0,
        error: propriedadesInvalidas
    };

  }
}

module.exports = Oportunidade;
