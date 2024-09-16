function gradeLabs(labs) {
    for (let lab of labs) {
      try {
        let result = lab.runLab(2);
        
        if (result === Math.pow(2, 2)) {
          console.log(`${lab.student}'s lab works correctly.`);
        } else {
          console.log(`${lab.student}'s lab failed.`);
        }
      } catch (error) {
        console.log(`${lab.student}'s lab: Error thrown`);
      }
    }
  }
  
  let studentLabs2 = [
    {
      student: "Blake",
      myCode: function (num) {
        return Math.pow(num, num);
      },
    },
    {
      student: "Jessica",
      runLab: function (num) {
        return Math.pow(num, num);
      },
    },
    {
      student: "Mya",
      runLab: function (num) {
        return num * num;
      },
    },
  ];
  
  gradeLabs(studentLabs2);
  