import { Schema as _Schema, model } from 'mongoose';
const Schema=_Schema;
const JoueurSchema=new Schema(
 {
  name:{
   type:String,
   required:true
  },
   post:{
   type:String,
   required:true
  },
  num:{
    type:Number,
  },
  equipe:{
   type:Schema.Types.ObjectId,
   ref:'Equipe',
   required:true
  }

 }
);
export default model('Joueur',JoueurSchema);
