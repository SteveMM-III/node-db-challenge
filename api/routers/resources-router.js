const express = require( 'express' );

const db = require( '../../data/dbModel' );

const router = express.Router();
//=============================================================
// get/post resources per project

router.get( '/:id', ( req, res ) =>{
  db.getResources( req.params.id )
    .then( resources => 
      res.status( 200 ).json( resources ) )
    .catch( error => {
      console.log( error );
      res.status( 500 ).json( { error: 'Failed to retrieve the resources for the project with the given id' } );
    } );
} );

router.post( '/:id', ( req, res ) => {
  db.insertResource( req.params.id, req.body )
    .then( resource => 
      res.status( 200 ).json( resource ) )
    .catch( error => {
      console.log( error );
      res.status( 500 ).json( { error: 'Failed to insert the resource for the given project id into the database' } );
    } );
} );

router.put( '/:id', ( req, res ) => {

} );

router.delete( '/:id', ( req, res ) => {

} );
//=============================================================

module.exports = router;
