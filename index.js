// Code your solution here:


function driversWithRevenueOver(drivers_array_of_objects, revenue_amount){
  return drivers_array_of_objects.filter((each_object)=>{
     return each_object.revenue > revenue_amount
  })
}

function driverNamesWithRevenueOver(drivers_array_of_objects, revenue_amount){
  return driversWithRevenueOver(drivers_array_of_objects, revenue_amount).map((each_object)=>{
    return each_object.name
  })
 //  return drivers_array_of_objects.map((each_object)=>{
 //   if (each_object.revenue > revenue_amount){
 //    // console.log(each_object)
 //      return each_object.name
 //   }else{
 //
 //   }
 // })
}

function exactMatch(drivers_array_of_objects, ze_object){
  return drivers_array_of_objects.filter((each_object)=>{
   for (const property in ze_object){
   //  console.log(each_object[property])
        // each_object[property]
        // each_object['name']

        // each_object.property
        // each_object['property']
        if (each_object[property]){

           return each_object[property] === ze_object[property]
        }
   }
  })
}

function exactMatchToList(drivers_array_of_objects, ze_object){
  return exactMatch(drivers_array_of_objects, ze_object).map((each_object)=>{
         return each_object.name
  })
}
