const express = require( 'express' );

const db = require( '../../data/dbModel' );

const router = express.Router();
//=============================================================
// mvp get/post projects

router.get( '/', ( req, res ) => {
  db.getProjects()
    .then( projects =>
      res.status( 200 ).json( projects ) )
    .catch( error => {
      console.log( error );
      res.status( 500 ).json( { error: 'Failed to retrieve the list of projects' } );
    } );
} );

router.get( '/:id', ( req, res ) =>{
  db.getProjectById( req.params.id )
    .then( project => 
      res.status( 200 ).json( project ) )
    .catch( error => {
      console.log( error );
      res.status( 500 ).json( { error: 'Failed to retrieve the project with the given id' } );
    } );
} );

router.post( '/', ( req, res ) => {
  db.insertProject( req.body )
    .then( project => 
      res.status( 200 ).json( project ) )
    .catch( error => {
      console.log( error );
      res.status( 500 ).json( { error: 'Failed to insert the project into the database' } );
    } );
} );

router.put( '/:id', ( req, res ) => {

} );

router.delete( '/:id', ( req, res ) => {
  db.deleteProject( req.params.id )
    .then( deleted => {
      return deleted ?
        res.json( { removed: deleted } )
      : res.status( 404 ).json( { message: 'the project selected for deletion was not found' } );
    } )
    .catch( error => {
      console.log( error );
      res.status( 500 ).json( { error: 'There was a problem deleting the project' } );
    } );
} );
//=============================================================

module.exports = router;
