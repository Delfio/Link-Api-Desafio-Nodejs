const mongoose = require('mongoose');

const OportunidadeSchema = new mongoose.Schema({
    id: {
        type: Number,
        require: true,
      },
      creator_user_id: {
        type: Number,
        require: true,
      },
      user_id: Number,
      person_id: Number,
      org_id: Number,
      stage_id: Number,
      title: String,
      value: Number,
      currency: String,
      add_time: Date,
      active: Boolean,
      deleted: Boolean,
      status: String,
      pipeline_id: Number,
      products_count: Number,
});

module.exports = OportunidadeSchema;