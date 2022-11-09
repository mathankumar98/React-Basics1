import React, {useState,useEffect}from 'react';
import  ReactDOM  from 'react-dom';
// import './index.css';

// //CREATING A CLASS DEMO
// class Demo{

//   //Normal Method
//   methodone()
//   {
//     var a=10;
//     var b=15;
//     var c=a+b;
//     //to call the html file we cannoot able to print like js
//     document.getElementById('root').innerHTML=c;
//   }

//   methodtwo()
//   {
//     var d=5;
//     var e=5;
//     var f=d+e;

//     document.getElementById('root').innerHTML=f;
//   }
// }

// creating a object to call the class
// var ref=new Demo();

// //to call method with the help of refernce variable name of object
// ref.methodtwo();

//ARROW FUNCTION
// var a = (x) =>
// {
//   var a=5;
//   var b=15;
//   var c=a+b+x;
//   document.getElementById('root').innerHTML=c;
// }

// a(10);

//INLINE CSS IN REACT

// var ref1={
//   color:'blue',
//   textAlign:'center'
// }
// var ref2 = <div style={ref1}>
//   <h1>Hi From const</h1>
//   <p>Hi From Paragraph</p>
// </div>
// ReactDOM.render(ref2,document.getElementById('root')); 

//OUTLINE CSS
// var ref2=<div>
//   <h1 className='header'>Hi From Main</h1>
// </div>
// ReactDOM.render(ref2,document.getElementById('root'));

//REACT LIST 
// const a=[1,2,3,4,5]
// const b=a.map((c) =>{
//   return <li>{c}</li>
// });
// ReactDOM.render(<ul>{b}</ul>,document.getElementById('root'));

//INSIDE FUNCTIONAL COMPONENT REACT LIST
// function Fun1()
// {
//   const var1=[1,2,3,4,5,'hi','bye']
//   const var2=var1.map((var3) =>{
//     return<li>{var3}</li>
//   }); 
//   return <ul>{var2}</ul>
// }

// ReactDOM.render(<Fun1 var1/>,document.getElementById('root'));

//OUTSIDE FUNCTIONAL COMPONENT REACT LIST
// function Fun(props)
// {
//   const var1=props.var4;
//   const var2=var1.map((var3) =>{
//     return<li>{var3}</li>
//   });
//   return<ul>{var2}</ul>
// }
// const var1=[1,2,3,4,5]

// ReactDOM.render(<Fun var1={var1}/>,document.getElementById('root'));

//REACT KEY LIST IN FUNCTION COMPONENT AND PROPS 
// function Fun1(props) //3
// {
  
//   const innervar=props.innervar.map((var2) =>
//     <div key= {var2.id}>
//       <h3>{var2.id}:{var2.title}:{var2.content}</h3> //4
//     </div>
//   );
//   return (
//   <div>
//     {innervar} //5
//   </div>
//   );
// }
// const outervar=[{id:1,title:' first',content:' Hi My Name Is MAthan'},{id:2,title:' Secound',content:' Iam From Tuticorin'}];//1
// ReactDOM.render(<Fun1 innervar={outervar} />,document.getElementById('root'));//2

//REACT KEY LIST USING 2 FUNCTIONAL COMPONENT USING PROPS
// function Fun1(props){  //5
//   const item=props.item;
//   const key=props.keys;
//   return(
//     <li>{key}{item}</li>
//   );
// }
// function Fun2(props)  //3
// {
//   const listItem=props.innervar.map((value,index) =>
//   <Fun1 keys={index} item={value} /> //4
//   );
//   return(
//     <div>
//       <h2>Example</h2>
//       <ul>{listItem}</ul> //6
//     </div>
//   );

// }
// const outervar=[1,2,3,4,5] //1
// ReactDOM.render(<Fun2 innervar={outervar}/>,document.getElementById('root'));//2 //7

//REACT HOOKS USE EFFECT AND USE STATE

function Fun1()
{
  const[count,updatecount]=useState(0);
  useEffect(() =>{
    alert('helloworld');
})
return(
  <div>
    <p>Click The Bellow { count } Button</p>
    <button onClick={()=>updatecount(count+1)}>Click Me</button>
  </div>
); 
}

ReactDOM.render(<Fun1 />,document.getElementById('root'));
