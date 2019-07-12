const save =()=>
{
    let trn= [];
    let tr =
    {
        name:document.getElementById('name').value
    }
    if(localStorage.getItem("trn"!=undefined))
    {
        trn=JSON.parse(localStorage.getItem("trn"));
    }
    trn.push(tr);
    localStorage.setItem("loc",JSON.stringify(trn));
    console.log(trn);
    
    subn1=document.getElementById('sub1').value;
    subn2=document.getElementById('sub2').value;
    subn3=document.getElementById('sub3').value;
    subn4=document.getElementById('sub4').value;
    subn5=document.getElementById('sub5').value;
    subn6=document.getElementById('sub6').value;
     
     sub1=document.getElementById('sub1').checked
     sub2=document.getElementById('sub2').checked
     sub3=document.getElementById('sub3').checked
     sub4=document.getElementById('sub4').checked
     sub5=document.getElementById('sub5').checked
     sub6=document.getElementById('sub6').checked
     
     
    if(sub1==true)
    trn.push(subn1);
    if(sub2==true)
    trn.push(subn2);
    if(sub3==true)
    trn.push(subn3);
    if(sub4==true)
    trn.push(subn4);
    if(sub5==true)
    trn.push(subn5);
    localStorage.setItem("loc",JSON.stringify(trn));
    console.log(trn);
    return tr;
}
const classname=()=>{
     let n=document.getElementById('classname').value;
     console.log(n);
     return n;
}
const time = ()=>{
     let t=document.getElementById('time').value;
     console.log(t);
     return t;
}
const sub=()=>{
    let s=document.getElementById('sub').value;
    console.log(s);
    return s;
   /* Object.keys(localStorage).forEach((loc) => {
        const emp1=JSON.parse(localStorage.getItem('loc'));
        if(emp1==s)
         document.getElementById('trname').value=emp.name;
    })*/
}

const display=()=>{
    let emps;
    let rows=' ';
    Object.keys(localStorage).forEach((key) => {
        emps=JSON.parse(localStorage.getItem(key));
        console.log(emps);
    
    });



}
