const express = require( 'express' );
const helmet  = require( 'helmet' );

const ProjectsRouter = require( './routers/projects-router' );

const server = express();

function logger( req, res, next ) {
  console.log( `${ req.method } to ${ req.originalUrl }` );
  next();
}

server.get( '/', ( req, res ) => {
  res.send( '<h3>Node.js DB Sprint Challenge</h3>' );
} );


server.use( helmet()       );
server.use( express.json() );
server.use( logger         );

server.use( '/api/projects', ProjectsRouter );

module.exports = server;