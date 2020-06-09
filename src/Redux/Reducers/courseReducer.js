export default function CourseReducer(state = [], action) {
  switch (action.type) {
    case "CREATE_COURSE":
      return [...state, action.course.title];
    default:
      return state;
  }
}
