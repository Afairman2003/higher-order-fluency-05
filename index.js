const alumni = [
{name:'Jarrit', job:'TPT',language:'JavaScript', age:23}, 
{name:'Stephanie', job:'JPMorgan',language:'JavaScript', age:24}, 
{name:'Devonte', job:'WW',language:'JavaScript', age:23}, 
{name:'Enmanuel', job:'Asana',language:'JavaScript', age:23},
{name:'Shemar', job:'SquareSpace',language:'JavaScript', age:23},
{name:'Cielo', job:'NYT',language:'JavaScript', age:22},
{name:'Carmen', job:'Marcy Lab School',language:'JavaScript', age:21},
{name:'Itzel', job:'Marcy Lab School',language:'JavaScript', age:22},
{name:'Ray', job:'Square Space',language:'JavaScript', age:21},
{name:'Jan', job:'Square Space',language:'JavaScript', age:22},
{name:'Uzma', job:'Thyme Care',language:'JavaScript', age:22}]
1.
//.reduce
const averageAge =(arrayOfObjects)=> {
    let sum = arrayOfObjects.reduce((acc, obj)=> acc + obj.age, 0);
    return Math.floor(sum/arrayOfObjects.length)
    
};
  console.log(averageAge(alumni));

2.
//.sort
const orderedAlumni = (arrayOfObjects)=>{
    return arrayOfObjects.sort((a, b)=> b.age - a.age);
};
console.log(orderedAlumni(alumni));

3.
//.every
const allUseJavaScript = (arrayOfObjects)=>{
    return arrayOfObjects.every((a => a.language === 'JavaScript'));
};
console.log(allUseJavaScript(alumni));
