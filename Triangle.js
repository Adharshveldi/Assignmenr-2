function triangle(a,b,c)
{
    if(a===b && b==c)
    console.log("Equilateral triangle");
    else if (a==b || b==c || c==a)
    console.log( "Issoscless triangle");
    else
    console.log("Scalene triangle");

}
let a=2,b=9,c=8;
triangle(a,b,c)
