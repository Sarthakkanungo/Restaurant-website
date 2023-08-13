import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sandwich",
    description: "A food item made using bread and filled with veggies, cheese, etc.",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Pasta",
    description: "An Italian dish made from durum wheat and water. !",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Ice cream",
    description: "A soft frozen dessert made using milk, cream, and flavours.",
    price: 12.99,
  },
  {
    id: "m4",
    name: "French-fries",
    description: "potato strips and cooked by being fried in deep fat",
    price: 18.99,
  },
];

const AvailableMeals = (props) => {
  const mealList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
