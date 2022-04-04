import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableBeals";
import { Fragment } from "react";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;
