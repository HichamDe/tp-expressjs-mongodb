import Equipe from '../model/Equipe.js'


class EquipeController {

     getAll(request, response) {
          Equipe.find()
               .then(equipes => response.status(200).json(equipes))
               .catch(err => response.status(500).json({ message: err }));
     }
     getOne(request, response) {
          const id = request.params.id;
          Equipe.findById(id)
               .then(equipe => response.status(200).json(equipe))
               .catch(err => response.status(500).json({ message: `Can not find a team with id: ${id}` }));
     }
     store(request, response) {
          const { name, country } = request.body;
          const equipe = new Equipe({ name, country });
          equipe.save()
               .then(eq => {
                    console.log(`team  ${eq.name} creaded`);
                    response.status(201).json({ message: `team  ${eq.name} creaded` })
               }).catch(err => {
                    console.log(`erreur ${err}`);
                    response.status(500).json({ message: err.message });
               })
     }
     edit(request, response) {
          const id = request.params.id;
          const { name, country } = request.body;
          updateOne({ _id: id }, { name, country })
               .then(eq => {
                    console.log(`team  ${eq.name} updated`);
                    response.status(200).json({ message: `team  ${id} updated` })
               })
               .catch(err => {
                    console.log(`erreur ${err}`);
                    response.status(500).json({ message: `Can not update the team with id ${id}` });
               })
     }
     destroy(request, response) {
          const id = request.params.id;
          Equipe.deleteOne({
               _id: id
          })
               .then(() => {
                    console.log(`team with id =  ${id} was deleted`);
                    response.status(200).json({ message: `team  with id = ${id} was deleted` });
               })
               .catch(err => {
                    console.log(`erreur ${err}`);
                    response.status(500).json({ message: `Can not delete the team with id ${id}` });
               })
     }

}

export default EquipeController;