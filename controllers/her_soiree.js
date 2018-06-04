const her_soireeModel = require('../models/her_soiree');

const index = (request, response) => {
  her_soireeModel.index()
    .then(result => {
      response.send(result);
    })
    .catch(error => {console.error(error); });
}

const show = (request, response) =>{
  her_soireeModel.show(request.params.id)
    .then(result => {response.send(result); })
    .catch(error => {console.error(error); });
}

const create = (request, response) =>{
  her_soireeModel.create(request.body)
    .then(result => {response.send(result); })
    .catch(error => {console.error(error); });
}
const update = (request, response) =>{
  her_soireeModel.update(request.params.id, request.body)
    .then(result => {response.send(result); })
    .catch(error => {console.error(error); });
}
const destroy = (request, response) =>{
  her_soireeModel.destroy(request.params.id)
    .then(result => {response.send(result); })
    .catch(error => {console.error(error); });
}


module.exports ={
  index,
  show,
  create,
  update,
  destroy
}
//the server is running thank god
