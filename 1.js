const data = [
    {
      name: "Aristia",
      age: 21 ,
      address: 'Indonesia',
      hobbies: [
        {
          name:'programming'
        },
        {
          name:'Singing'
        }
      ],
      isMarried: true,
      schools:[
        {name : "Aristia's School"},
        {name: "Aristia's University"}
      ],
      skills:[
        {
          name:"Problem solving"
        },
        {
          name:"Creative thinking"
        }
      ],
      interest_in_boolean: true
    },
    {
      name: "Kamran",
      age: 20,
      address: 'Malaysia',
      hobbies: [
        {
          name:'programming'
        },
        {
          name:'Singing'
        }
      ],
      isMarried: true,
      schools:[
        {name : "Aristia's School"},
        {name: "Aristia's University"}
      ],
      skills:[
        {
          name:"Problem solving"
        },
        {
          name:"Creative thinking"
        }
      ],
      interest_in_boolean: true
    }
  ]
  function printThis(biodata)
  {
    document.write(biodata.name+"\n"+biodata.age,biodata.address,"\n hobbies:"+biodata.hobbies.map(obj=>{return obj.name}),"Married: "+biodata.isMarried,"schools: "+biodata.schools.map(obj=>{
      return obj.name+"  ";
    }),"\n skills: "+biodata.skills.map(obj=>{
      return obj.name+"  ";
    }),"\n","interest in programming:"+biodata.interest_in_boolean)
  }
  function bioData(name,age)
  {
    var biodata;
    data.map(obj=>{
      if(obj.name===name && obj.age==age)
      {
        biodata=obj;
      }
    });
    return biodata;
  }
  printThis(bioData("Kamran",20));