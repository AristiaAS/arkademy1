var data = [
    { name: "hello",info:"category",
     data:[
       {name:"Interstellar",info:"category_data"},
       {name:"Dark Knight",info:"category_data"}
     ]
    },
    { name: "hello",info:"category",
     data:[
       {name:"Interstellar",info:"category_data"},
       {name:"Dark Knight",info:"category_data"}
     ]
    }
   ]
   function format(data)
   {
     var list=[];
     data.map(obj=>{
       const name=obj.name;
       const info=obj.info;
       list.push({
         name:name,
         info:info
       })
       obj.data.map(doc=>{
         list.push({
           name: doc.name,
           info: doc.info
         })
       })
     })
     return list;
   }
   
   console.log(format(data).map(obj=>{
     return obj;
   }));