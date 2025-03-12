const athletes = [
    { name: "Virat", sport: "Cricket", scores: [89, 75, 102], age: 35 },
    { name: "Sindhu", sport: "Badminton", scores: [21, 19, 25], age: 29 },
    { name: "Neeraj", sport: "Javelin", scores: [88, 90, 85], age: 26 }
  ];

  athletes.forEach(({name:n,sport:s})=>{
    if(n=="Virat")
        console.log(`${n} plays ${s}`)
  })
  
  const [a,b,...c]=athletes[2].scores;
  console.log(a,b,c)

   athletes.forEach(({name:n,sport:sp,scores:sc})=>{
    if(n=="Neeraj"){
      let obj={
        name: n,
        sport:sp,
        scores: sc,
        age: 27,
        worldChampion: true
      };
      
      console.log(obj)
    }
       
  })
  Scores=athletes.reduce(( acc,s)=>{
        acc=[...acc,...s.scores]
        return acc;
  },[])
  console.log(Scores)