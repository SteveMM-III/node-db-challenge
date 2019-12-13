const db = require( './dbConfig' );

module.exports = {
  getProjects,
  getProjectById,
  insertProject,
  updateProject,
  deleteProject,
  getResources,
  insertResource,
  updateResource,
  deleteResource,
  getTasks,
  insertTask,
  updateTask,
  deleteTask
};
//=============================================================

function getProjects() {
  return db( 'projects' );
}

function getProjectById( project_id ) {
  return db( 'projects as p'    )
    .select( '*'                )
    .where ( 'p.id', project_id );
}

function insertProject( project ) {
  return db( 'projects' )
    .insert( project )
    .then( ids => {
      return db( 'projects' )
        .where( { id: ids[ 0 ] } )
        .first()
        .then( newProject => {
          newProject.completed = newProject.completed ? true : false;
          console.log( newProject );
          return newProject;
        } );
    } );
}

function updateProject( project_id ) {

}

function deleteProject( project_id ) {
  return db( 'projects' )
    .where( 'id', project_id )
    .first()
    .then( project => {
      if ( project ) {
        return db( 'tasks' )
          .where( 'project_id', project_id )
          .delete()
          .then( () => {
            return db( 'project_resources' )
              .where( 'project_id', project_id )
              .delete()
              .then( () => {
                return db( 'projects' )
                  .where( 'id', project_id )
                  .delete()
                  .then( () => project );
              } );
          } );
       } else { return null; }
    } );
}
//=============================================================

function getResources( project_id ) {
  return db( 'project_resources as pr' )
    .select( 'p.name', 'r.name' )
    .join( 'projects as p', 'pr.project_id', 'p.id' )
    .join( 'resources as r', 'pr.resource_id', 'r.id' )
    .where( 'p.id', project_id );
}

function insertResource( project_id, resource ) {
  return db( 'resources' )
    .insert( resource )
    .then( ids => {
      return db( 'project_resources' )
        .insert( { project_id: project_id, resource_id: ids[ 0 ] } )
        .then( () => {
          return db( 'resources' )
          .where( { id: ids[ 0 ] } )
          .first();
        } );
    } );
}

function updateResource( project_id, resource_id, resource ) {

}

function deleteResource( project_id, resource_id ) {

}
//=============================================================

function getTasks( project_id ) {
  return db( 'tasks as t' )
    .select( 't.id as task_id'
      , 'p.name as project'
      , 'p.description'
      , 't.number as task_number'
      , 't.description as task_description'
      , 't.notes as task_notes'
      , 't.completed as task_completed' )
    .join( 'projects as p', 't.project_id', 'p.id' )
    .where( 'p.id', project_id );
}

function insertTask( project_id, task ) {
  return db( 'tasks' )
    .insert( task )
    .then( ids => {
      return db( 'tasks' )
        .select( 't.id as task_id'
          , 'p.name as project'
          , 'p.description'
          , 't.number'
          , 't.description'
          , 't.notes'
          , 't.completed' )
        .join( 'projects as p', 't.project_id', 'p.id' )
        .where( 't.id', ids[ 0 ] );
    } )
}

function updateTask( project_id, task_id, task ) {
  
}

function deleteTask( project_id, task_id ) {

}
//=============================================================
