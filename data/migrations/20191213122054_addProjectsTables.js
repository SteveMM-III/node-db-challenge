exports.up = function( knex ) {
  return knex.schema.createTable( 'projects', tbl => {
    tbl
      .increments();
    tbl
      .string( 'name', 255 )
      .notNullable()
      .unique();
    tbl
      .string( 'description' );
    tbl
      .boolean( 'completed' )
      .defaultTo( false );
  } )
  .createTable( 'resources', tbl => {
    tbl
      .increments();
    tbl
      .string( 'name', 255 )
      .notNullable()
      .unique();
    tbl
      .string( 'description' );
  } )
  .createTable( 'project_resources', tbl => {
    tbl
      .primary( [ 'project_id', 'resource_id' ] );
    tbl
      .integer( 'project_id' )
      .unsigned()
      .notNullable()
      .references( 'id' )
      .inTable( 'projects' );
    tbl
      .integer( 'resource_id' )
      .unsigned()
      .notNullable()
      .references( 'id' )
      .inTable( 'resources' );
  } )
  .createTable( 'tasks', tbl => {
    tbl
      .increments();
    tbl
      .integer( 'project_id' )
      .unsigned()
      .notNullable()
      .references( 'id' )
      .inTable( 'projects' );
    tbl
      .integer( 'task_number' )
      .notNullable()
    tbl
      .string( 'task_description' )
      .notNullable();
    tbl
      .string( 'notes' );
    tbl
      .boolean( 'completed' )
      .defaultTo( false );
  } );
};

exports.down = function( knex ) {
  return knex.schema
    .dropTableIfExists( 'tasks'             )
    .dropTableIfExists( 'project_resources' )
    .dropTableIfExists( 'resources'         )
    .dropTableIfExists( 'projects'          );
};
