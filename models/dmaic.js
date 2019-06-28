const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const dmaicSchema = mongoose.Schema({

  userId:{type:String},
  define:{type:String},
  measure:{
   current:{type:Number},
   target:{type:Number}
  },
 
  analyse:{type:String},
  implementation:{type:String},
  control:{type:String}


});

dmaicSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Dmaic", dmaicSchema);
