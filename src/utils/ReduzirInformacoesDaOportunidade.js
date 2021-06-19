function ConverterOportunidade(oportunidade) {
  const {
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
  } = oportunidade;

  return {
    id,
    creator_user_id: creator_user_id.id,
    user_id: user_id.id,
    person_id: person_id.owner_id,
    org_id: org_id.owner_id,
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
  };
}

module.exports = ConverterOportunidade;
