function calculateMarks(){
    let n = parseInt(document.getElementById("no of subject").value);
    let total = 0;
    let marksList = [];
    for(let i = 1; i <= n; i++){
        let marks = parseFloat(prompt("Enter marks for subject " + i + ":"));
        marksList.push(marks);
        total += marks;
    }
    let average = total / n;
    let grade;
    if(average >= 90){
        grade = "A";
    }else if(average >= 60){
        grade = "B";
    }else{
        grade = "C";
    }
    let resultHTML = "<h3>Marks per subject:</h3><ul>";
    marksList.forEach((mark, index) => {
        resultHTML += "<li>Subject " + (index + 1) + ": " + mark + "</li>";
    });
    resultHTML += "</ul><p><strong>Average: " + average.toFixed(2) + "</strong></p><p><strong>Grade: " + grade + "</strong></p>";
    document.getElementById("result").innerHTML = resultHTML;
}