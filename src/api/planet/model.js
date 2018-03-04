import mongoose, { Schema } from 'mongoose'
const axios = require("axios");

const planetSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique:true
  },
  climate: {
    type: String,
    required: true
  },
  terrain: {
    type: String,
    required: true
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

planetSchema.methods = {
  setAppearances(){
    const url = "https://swapi.co/api/planets/?search="+this.name
    return axios.get(url)
    .then(response => {        
      this.appearances=(response.data.count>0)?response.data.results[0].films.length:"0"      
      return this
    })    
  },

  view (full) {
    
    this.setAppearances();

    const view = {
      // simple view
      id: this.id,
      name: this.name,
      climate: this.climate,
      terrain: this.terrain,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,    
      appearances: this.appearances 
    }

    return full ?      
      view
      //appearances

      // add properties for a full view
     : view
  }
}

const model = mongoose.model('Planet', planetSchema)

export const schema = model.schema
export default model
