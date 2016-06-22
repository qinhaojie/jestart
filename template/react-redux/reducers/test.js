
const initialState = {
  text: 'wait a click'
}


export default function test(state = initialState, action) {
  switch (action.type) {
    case 'TEST':
      return {
        text : action.text
      }
      
      
  
    default:
      return state
  }
}
