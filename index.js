// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

 function findMatching(drivers, string)  {
     const matchingListOfDrivers = drivers.filter(element => element.toLowerCase() === string.toLowerCase())
     return matchingListOfDrivers 
    
     }
     
     
    
 findMatching();

 function fuzzyMatch(drivers, string){
 //    console.log(string)
        return drivers.filter(function(element) {
            return element.startsWith(string)
        })
        //return element.indexOf(string) == 0
    }

 function matchName(drivers, string) {
     console.log(drivers)
     console.log(string)
    const matchingName = drivers.filter(driver => driver.name === string)
    return matchingName
 }
 