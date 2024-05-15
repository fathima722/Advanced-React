function DessertsList(props) {

  // map() iterates through each item in the array to extract the desired elements
  // ES2023 toSorted() creates a new array unlike the sort() that overrides the original array
  // filter() creates a new array returning all the elements that pass the test in the function as follows

  const lessCalories = props.data.filter((calorie) => {
    console.log(calorie.calories)
    return calorie.calories < 500;
  })
  .toSorted((item1, item2) => {
    return item1.calories - item2.calories;
  })
  .map(item => {
    const dessert = `${item.name} - ${item.calories} cal`
    return <li key={dessert.id}>{dessert}</li>
  });;

  // const myItems = lessCalories.map(item => {
  //   const dessert = `${item.name} - ${item.calories} cal`
  //   return <li>{dessert}</li>
  // });

  return (
    <div>
      <ul>{lessCalories}</ul>
    </div>
  )
}

export default DessertsList;
