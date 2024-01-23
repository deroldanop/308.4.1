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
  
//   function getLearnerData(course, ag, submissions) {
//     // here, we would process this data to achieve the desired result.
//     const result = [
//       {
//         id: 125,
//         avg: 0.985, // (47 + 150) / (50 + 150)
//         1: 0.94, // 47 / 50
//         2: 1.0 // 150 / 150
//       },
//       {
//         id: 132,
//         avg: 0.82, // (39 + 125) / (50 + 150)
//         1: 0.78, // 39 / 50
//         2: 0.833 // late: (140 - 15) / 150
//       }
//     ];
  
//     return result;
//   }
  
//   const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
  
//   console.log(result);


function getLearnerData(courseInfo, assignmentGroup, learnerSubmissions) {
    // Helper function to calculate weighted average score
    function calculateWeightedAverage(scores, weights) {
      const totalWeight = weights.reduce((acc, weight) => acc + weight, 0);
      return scores.reduce((acc, score, index) => acc + (score * weights[index] / totalWeight), 0);
    }
  
    // Validate if AssignmentGroup belongs to the course
    if (assignmentGroup.course_id !== courseInfo.id) {
      throw new Error("Wrong input: Student does not belong to this course.");
    }
}

const result = {
    id: AssignmentGroup.course_id,
    avg: 0,
  };

  const assignmentScores = {};
  const assignmentWeights = [];
  AssignmentGroup.assignments.forEach(assignment => {
    // Check if assignment is due
    if (new Date(assignment.due_at) > new Date()) {
      const learnerSubmission = learnerSubmissions.find(submission => submission.assignment_id === assignment.id);

      // Check if learner submission exists
      if (learnerSubmission) {
        // Calculate score considering late submission
        const lateSubmissionPenalty = (new Date(learnerSubmission.submission.submitted_at) > new Date(assignment.due_at)) ? 0.9 : 1;
        const score = (learnerSubmission.submission.score / assignment.points_possible) * lateSubmissionPenalty;

        // Handle potential errors
        if (isNaN(score) || !isFinite(score)) {
          throw new Error(`Invalid data: Score calculation error for learner ${learnerSubmission.learner_id}, assignment ${assignment.id}`);
        }

        // Store assignment score
        assignmentScores[assignment.id] = score;
        assignmentWeights.push(assignment.points_possible);
      }
    }
  });

  // Calculate weighted average score
  result.avg = calculateWeightedAverage(Object.values(assignmentScores), assignmentWeights);

  // Add assignment scores to result
  Object.assign(result, assignmentScores);

  return result;


  


 

  function getLearnerData(courseInfo, assignmentGroup, learnerSubmissions) {
    // Validate CourseInfo and AssignmentGroup
    validateCourseAndAssignment(courseInfo, assignmentGroup);
  
    // Create a map to store assignment details
    const assignmentDetails = {};
    assignmentGroup.assignments.forEach((assignment) => {
      assignmentDetails[assignment.id] = {
        dueDate: new Date(assignment.due_at),
        pointsPossible: assignment.points_possible,
      };
    });
    console.log("Create a map to store assignment", assignmentDetails )
  
    // Process learner submissions
    const learnerData = {};
    learnerSubmissions.forEach((submission) => {
      const { learner_id, assignment_id, submission: { submitted_at, score } } = submission;
  
      // Check if the assignment belongs to the correct AssignmentGroup
      if (assignmentGroup.id !== assignment_id) {
        throw new Error("Invalid input: Assignment does not belong to the specified AssignmentGroup.");
      }
  
      // Check if assignment is due and not yet submitted
      if (isAssignmentDue(submitted_at, assignmentDetails[assignment_id].dueDate)) {
        // Deduct 10% if the submission is late
        const lateScore = calculateLateScore(score, assignmentDetails[assignment_id].pointsPossible);
        addToLearnerData(learnerData, learner_id, assignment_id, lateScore);
      }
    });
  
    // Calculate averages and format the result
    return formatResult(learnerData);
  }
  
  // Helper function to validate CourseInfo and AssignmentGroup
  function validateCourseAndAssignment(courseInfo, assignmentGroup) {
    if (!courseInfo || !assignmentGroup) {
      throw new Error("Invalid input: CourseInfo and AssignmentGroup are required.");
    }
  
    if (assignmentGroup.course_id !== courseInfo.id) {
      throw new Error("Invalid input: AssignmentGroup does not belong to the specified course.");
    }
  }
  