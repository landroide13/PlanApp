const initState = {
  projects: [
    {id: '1', title: 'Traino App', desc: 'App tracks you trainning and impruvments at GYM'},
    {id: '2', title: 'Stock App', desc: 'App tracks your stocks protfolio'},
    {id: '3', title: 'LenPet', desc: 'App share your dog or look after anybodys dog.'},
  ]
}

const projectReducer = (state = initState, action) => {
  switch(action.type){
    case 'CREATE_PROJECT':
      console.log('Project Created', action.project)
      return state
    case 'CREATE_PROJECT_ERROR':
      console.log('Create Project Error', action.error)
      return state  
    default:
      return state
  }
}

export default projectReducer