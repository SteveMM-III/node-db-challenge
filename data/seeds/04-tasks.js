exports.seed = function( knex ) {
  return knex( 'tasks' ).insert( [
    { project_id: 1, number: 1, description: 'fork project',                   notes: '', completed: true },
    { project_id: 1, number: 2, description: 'clone project',                  notes: '', completed: true },
    { project_id: 1, number: 3, description: 'branch project',                 notes: '', completed: true },
    { project_id: 1, number: 4, description: 'read and follow project readme', notes: '', completed: true },
    { project_id: 1, number: 5, description: 'push project',                   notes: '', completed: true },
    { project_id: 1, number: 6, description: 'submit pull request',            notes: '', completed: true },
    { project_id: 2, number: 1, description: 'fork project',                   notes: '', completed: true },
    { project_id: 2, number: 2, description: 'clone project',                  notes: '', completed: true },
    { project_id: 2, number: 3, description: 'branch project',                 notes: '', completed: true },
    { project_id: 2, number: 4, description: 'read and follow project readme', notes: '', completed: true },
    { project_id: 2, number: 5, description: 'push project',                   notes: '', completed: true },
    { project_id: 2, number: 6, description: 'submit pull request',            notes: '', completed: true },
    { project_id: 3, number: 1, description: 'fork project',                   notes: '', completed: true },
    { project_id: 3, number: 2, description: 'clone project',                  notes: '', completed: true },
    { project_id: 3, number: 3, description: 'branch project',                 notes: '', completed: true },
    { project_id: 3, number: 4, description: 'read and follow project readme', notes: '', completed: true },
    { project_id: 3, number: 5, description: 'push project',                   notes: '', completed: true },
    { project_id: 3, number: 6, description: 'submit pull request',            notes: '', completed: true },
    { project_id: 4, number: 1, description: 'fork project',                   notes: '', completed: true },
    { project_id: 4, number: 2, description: 'clone project',                  notes: '', completed: true },
    { project_id: 4, number: 3, description: 'branch project',                 notes: '', completed: true },
    { project_id: 4, number: 4, description: 'read and follow project readme', notes: '', completed: true },
    { project_id: 4, number: 5, description: 'push project',                   notes: '', completed: true },
    { project_id: 4, number: 6, description: 'submit pull request',            notes: '', completed: true }
  ] );
};
