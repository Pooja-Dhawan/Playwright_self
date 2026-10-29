let score = -1;
if (score >100 || score <0){
    console.log("invalid score")
}else{
if (score >= 90) {
    console.log("Grade A");
}
else if (score > 80 && score <= 90) {
    console.log("grade b");
}
else if (score>70 && score <=80) {
    console.log("grade c");
}
else if (score >60 && score <=70) {
    console.log("grade d");
}
else{
    console.log("need improvement");
}
}
