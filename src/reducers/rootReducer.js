const initState = {
  posts: [
    {id: '1', title: 'Object1', body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. .'},
    {id: '2', title: 'Object2', body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. .'},
    {id: '3', title: 'Object3', body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. .'},
  ]
}


const rootReducer = ( state= initState, action ) => {
  return state;
}

export default rootReducer