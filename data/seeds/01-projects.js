exports.seed = function( knex ) {
  return knex( 'projects' ).insert( [
    { name: 'db-project-1', description: 'first database project',  completed: true },
    { name: 'db-project-2', description: 'second database project', completed: true },
    { name: 'db-project-3', description: 'third database project',  completed: true },
    { name: 'db-project-4', description: 'fourth database project', completed: true }
  ] );
};
