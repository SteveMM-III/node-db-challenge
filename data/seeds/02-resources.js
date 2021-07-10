exports.seed = function( knex ) {
  return knex( 'resources' ).insert( [
    { name: 'student',  description: 'person to complete the project'          },
    { name: 'computer', description: 'device required to complete the project' }
  ] );
};
