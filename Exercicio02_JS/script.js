function StudentsInformation(studentName,firstTestGrade,secondTestGrade) {
    this.studentName = studentName
    this.firstTestGrade = firstTestGrade
    this.secondTestGrade = secondTestGrade
};

function obtainStudentAverage(gradeOne,gradeTwo){
    let gradeAverage = ((gradeOne+gradeTwo)/2).toFixed(1);
    console.log(`${gradeOne}, ${gradeTwo}`)
    return gradeAverage    
}

let studentsList = [];
let initialMessage = alert(`Olá, aluno(a)! Bem-vindo(a). Digite a quantidade de alunos que vão receber sua média. A seguir, digite a seguir o seu nome, sua primeira nota, e sua segunda nota.`);
let studentsQuantity = Number(prompt("Digite a quantidade de alunos que vão receber a média: "));

for(let i = 0; i<studentsQuantity; i++){
    
    let nameStudent = prompt("Digite abaixo o seu nome: ");
    let firstGrade = Number(prompt("Digite abaixo a nota da sua primeira prova: "));
    let secondGrade = Number(prompt("Digite abaixo a nota da sua segunda prova: "));
    
    
    const student = new StudentsInformation(nameStudent,firstGrade,secondGrade);
    studentsList.push(student);
    let newstudent = studentsList.indexOf(student);
    
    let studentAverage = obtainStudentAverage(studentsList[newstudent].firstTestGrade, studentsList[newstudent].secondTestGrade);
    
    if (studentAverage >= 7){
        alert
        (`${studentsList[newstudent].studentName}, sua média é: ${studentAverage}. Parábens! Você foi aprovado(a) no concurso!!`)
    }else{
        alert(`${studentsList[newstudent].studentName}, sua média é: ${studentAverage}. Não foi dessa vez! Tente novamente!`)
    }
}      
        
        