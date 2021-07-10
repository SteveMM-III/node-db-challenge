const express = require( 'express' );

const db = require( '../../data/dbModel' );

const router = express.Router();
//=============================================================
// get/post tasks per project

router.get( '/', ( req, res ) => {
  db.getAllTasks()
    .then( tasks => {
      res.status( 200 ).json( tasks );
    } )
    .catch( error => {
      console.log( error );
      res.status( 500 ).json( { error: 'There was a problem retrieving the list of tasks' } );
    } );
} );

router.get( '/:id', ( req, res ) => {
  db.getTasks( req.params.id )
    .then( tasks => 
      res.status( 200 ).json( tasks ) )
    .catch( error => {
      console.log( error );
      res.status( 500 ).json( { error: 'Failed to retrieve the tasks for the project with the given id' } );
    } );
} );

router.post( '/:id', ( req, res ) => {
  db.insertTask( req.params.id, req.body )
    .then( task => 
      res.status( 200 ).json( task ) )
    .catch( error => {
      console.log( error );
      res.status( 500 ).json( { error: 'Failed to insert the task for the given project id into the database' } );
    } );
} );

router.put( '/:id', ( req, res ) => {

} );

router.delete( '/:id', ( req, res ) => {

} );
//=============================================================

module.exports = router;
