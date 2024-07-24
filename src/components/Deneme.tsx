
function Deneme() {
    let sayi:number;
  
  interface Obje<T>{

    name:string,
    age:number,
    salary: T[]
  }

  const obj1:Obje<string>={

    name:"Rümeysa",
    age:30,
    salary:["40000","45000"]
  }

  const obj2:Obje<number>={

    name:"Nur",
    age:30,
    salary:[30000,35000]
  }

  const array:Obje<string | number>[] =[obj1,obj2]

  function write<T>(array:Obje<T>[]){

    array.map((item)=>{

      console.log(item)
    })

    
  }

  write(array)

  sayi=5;
  console.log(sayi)

  return (
    <div>Deneme</div>
  )
}

export default Deneme