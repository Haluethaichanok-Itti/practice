//if number = 2 
// x
// xx
// x
// if number = 3 
// x
// xx
// xxx
// xx
// x
const displayX =(number)=>{
    const result=[];
     let x ='x';
     let increase='';
     let decrease='';
     for(let i =0;i<number;i++){
       increase+=x;
       result.push(increase);
       if(i=== number-1){
         for(let j =( number-1); j>0;j--){
           decrease=result[j].slice(1);
           result.push(decrease);
         }
       }
     }
   
     return result.join('\n');
   }
   
   console.log(displayX(3));