const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
  };
  
  // The provided assignment group.
  const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
      {
        id: 1,
        name: "Declare a Variable",
        due_at: "2023-01-25",
        points_possible: 50
      },
      {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150
      },
      {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500
      }
    ]
  };
  
  // The provided learner submission data.
  const LearnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47
      }
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150
      }
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400
      }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140
      }
    }
  ];
//////////////////////////////////


const assignmentDetails = {};
AssignmentGroup.assignments.forEach((assignment) => {
  assignmentDetails[assignment.id] = {
    dueDate: new Date(assignment.due_at),
    pointsPossible: assignment.points_possible,
  };
});
console.log(assignmentDetails);



let students = [];
LearnerSubmissions.forEach((submissions) => {
   for(let x = 0; x < LearnerSubmissions.length; x++){
   students.push({ student_id: LearnerSubmissions[x].learner_id,
                   assignment_id: LearnerSubmissions[x].assignment_id,
                   submission_date: LearnerSubmissions[x].submission.submitted_at,
                   score: LearnerSubmissions[x].submission.score 
})}
   return students;
}

)
console.log(students);

function lateDate(arrElement1, arrElement2){
    for(let x in arrElement1) {
        //for(let i = 0; i < arrElement2.length; i++){
       if (arrElement1[x].assignment_id == arrElement2.id && arrElement1[x].submission_date > arrElement2.id.dueDate){
        arrElement1[x].score *= 0.9;
       }
       else{
        continue;
       }
    }
return arrElement1;
    }
//}
let afterDateCorrection = lateDate(students, assignmentDetails);

console.log("After late due date correction", students);










// students = {
//     student_id: LearnerSubmissions.learner_id
// };
// return students;
// })
// console.log(students);

// if(LearnerSubmissions[3].submission.submitted_at < AssignmentGroup.assignments[1].due_at){
//     let real = true;
//     console.log('es despues')
// }