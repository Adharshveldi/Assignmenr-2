function grading(score)
{
switch(score<=100){
    case(score>=90 && score<=100):
        console.log("S grade");
        break;
    case(score>=80 && score<90):
        console.log("A grade");
        break;
    case(score>=70 && score<80):
        console.log("B grade");
        break;
    case(score>=60 && score<70):
        console.log("C grade");
        break;
    case(score>=50 && score<60):
        console.log("D grade");
        break;
    case(score>=40 && score<50):
        console.log("E grade");
        break;
    case(score>=0 && score<40):
        console.log("Failed");
        break;

    default:
        console.log("Invalid score");
        break;
    }
   }
let score=10;
grading(score);
    
        
    
