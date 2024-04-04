import Joueur from "../model/Joueur.js";
class JoueurController{
     getAll(request,response){
          Joueur.find().populate('equipe')
               .then(joueurs => response.status(200).json(joueurs))
               .catch(err => response.status(500).json({ message: err }));

     }
     getOne(request, response){
          const id = request.params.id;
          Joueur.findById(id)
               .then(joueur => response.status(200).json(joueur))
               .catch(err => response.status(500).json({ message: `Can not find a player with id: ${id}` }));
     }
     store(request,response){
          const { name, post, num, equipe } = request.body;
          const joueur = new Joueur({ name, post, num, equipe });
          joueur.save()
               .then(jo => {
                    console.log(`player  ${jo.name} creaded`);
                    response.status(201).json({ message: `player  ${jo.name} creaded` })
               }).catch(err => {
                    console.log(`erreur ${err}`);
                    response.status(500).json({ message: err.message });
               })

     }
     edit(request,response){
          const id = request.params.id;
          const { name, country } = request.body;
          updateOne({ _id: id }, { name, country })
               .then(jo => {
                    console.log(`player  ${jo.name} updated`);
                    response.status(200).json({ message: `player  ${id} updated` })
               })
               .catch(err => {
                    console.log(`erreur ${err}`);
                    response.status(500).json({ message: `Can not update the player with id ${id}` });
               })


     }
     destroy(request,response){
          const id = request.params.id;
          Joueur.deleteOne({
               _id: id
          })
               .then(() => {
                    console.log(`player with id =  ${id} was deleted`);
                    response.status(200).json({ message: `player  with id = ${id} was deleted` });
               })
               .catch(err => {
                    console.log(`erreur ${err}`);
                    response.status(500).json({ message: `Can not delete the player with id ${id}` });
               })
     }


}
export default JoueurController;