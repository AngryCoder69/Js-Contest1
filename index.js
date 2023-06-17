
let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];


  // concatenate array//

  let arr2 = [
    { id: 4, name: "Kunal", age: "18", profession: "toilet cleaner" },
    { id: 5, name: "Suresh", age: "20", profession: "tea maker" },
    { id: 6, name: "Yash", age: "23", profession: "driver" },
  ];
  
  let arr3

  function concatenateArray() {
   arr3=arr.concat(arr2)
  console.log(arr3)
  }
  concatenateArray()


// add data//

  function addData() {

    arr[3] = { id: 4, name: "Babu Rao", age: "29", profession: "Thief" }
    console.log(arr[3])
  }
  addData()




//remove admin//

  function removeAdmin() {
    arr.splice(2, 1)
    console.log(arr)
  }
  removeAdmin()



// by for each//


  function PrintDeveloperbyForEach() {
    arr.forEach(function (employee){
if(employee.profession=="developer"){
    
    console.log(employee.profession)
}
    })

  }
  PrintDeveloperbyForEach()





  // by map//

  function PrintDeveloperbyMap() {

    arr.map(function(employee){
        if(employee.profession=="developer"){
    
            console.log(employee.profession)
        } 
    })
    
    }
    PrintDeveloperbyMap()