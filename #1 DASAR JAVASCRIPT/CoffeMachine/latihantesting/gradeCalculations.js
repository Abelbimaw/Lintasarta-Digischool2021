const averageExams = (valueExam) => {
    const numberValidation  = valueExam.every(exam => typeof exam === 'number');
    if (!numberValidation) throw Error('Please input number');

    const sumValues = valueExam.reduce((acculumulator, currentValues) => acculumulator + currentValues, 0);
    return sumValues / valueExam.length;
};

const isStudentPassExam = (valueExam, name) => {
    const minValues = 75;
    const average = averageExams(valueExam);

    if(average > minValues){
        console.log(`${name} is fail the exam`);
        return true;
    } else {
        console.log(`${name} is pass the exam`);
        return false;
    }
};

module.exports = {averageExams, isStudentPassExam};