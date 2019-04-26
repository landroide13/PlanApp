export  const createProject =  project =>{
  return (dispatch, getState, {getFirebase, getFirestore}) =>{
    const firestore = getFirestore();
    firestore.collection('project').add({
      ...project,
      authorFirstName: 'Eltro',
      authorLastName: 'Lazo',
      authorId: 1,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_PROJECT', project: project})
    }).catch((error) => {
      dispatch({ type: 'CREATE_PROJECT_ERROR', project: error })
    })
    
  }
}


