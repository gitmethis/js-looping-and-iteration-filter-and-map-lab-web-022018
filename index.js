// Code your solution here:


function driversWithRevenueOver(drivers_array_with_objects, revenue){
  return drivers_array_with_objects.filter((each_object)=>{
    return drivers_array_with_objects.revenue > revenue
  })
}