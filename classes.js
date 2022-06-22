/*
class Student 
{    
    static  count = 0;
    constructor(name , age ,  phnno , marks)
    {
        this.name = name ;
        this.age = age ;
        this.phnno = phnno ;
        this.marks = marks ;
        Student.count++ ;
    }
    countNumberofagent()
    {
        console.log(Student.count) ;
    }
    
    Studenteligible()
    {
        if(this.marks > 40)
        {
            console.log(`${this.name} is  eligible`)
        }
        else{
            console.log(`${this.name} is  NOt eligible`)
        }
    }



};

const jill = new Student('priyansh' , 23 , 636078 , 45) ;
const jil = new Student('rahul' , 13 , 636078 , 39) ;
const jilll = new Student('AK' , 13 , 636078 , 39) ;
const jillll = new Student('AS' , 13 , 636078 , 39) ;
const jilllll = new Student('AM' , 13 , 636078 , 39) ;

jill.Studenteligible() ;
jil.Studenteligible() ;
jilllll.countNumberofagent() ;
*/
class Student 
{    
    
    constructor(name , age ,  phnno , marks)
    {
        this.name = name ;
        this.age = age ;
    
        this.marks = marks ;
        
    }
    setPlacementAge(PlacemnetAge)
    {
        return(minmarks) =>{
            if(this.marks>minmarks &&   this.age >PlacemnetAge)
            {
                console.log(this.name + "is ready for placement") ;
            }
            else{
                console.log(this.name + "is not eligible for placement")
            }
        }

    }


} ;
   
const ishu = new Student('nishu' , 25 ,75)
ishu.setPlacementAge(26)(78) ; 
