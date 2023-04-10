import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRecipeData } from "../../redux/reducer/recipe";
import { data } from "../../utils/const";
import Loader from "../../component/loader";

export const Recipe = () => {
  const [recipeData, setRecipeData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  const userId = useSelector((state) => state.user.userData._id);

  //   useEffect(() => {
  //     dispatch(
  //       getRecipeData(
  //         userId,
  //         (res) => {
  //           console.log("===>res", res);
  //           if (Object.keys(res.dietPlan).length > 0) {
  //             setIsLoading(false);
  //             setRecipeData(res);
  //           }
  //         },
  //         (e) => {
  //           setIsLoading(false);
  //           console.log("===>e", e);
  //         },
  //       ),
  //     );
  //   }, []);
  console.log("===>recipeData", data);
  return (
    // <div>
    //   {isLoading ? (
    //     <Loader />
    //   ) : (
    //     <div>
    //       {Object.keys(recipeData).length > 0 &&
    //         Object.values(recipeData).map((meal) => {
    //           console.log("===>meal", meal);
    //           return <h1>{meal.breakfast}</h1>;
    //         })}
    //     </div>
    //   )}
    // </div>
    <div>
      <div>
        {Object.keys(data.dietPlan).map((day) => {
          return (
            <div key={day}>
              <h3>{day}</h3>
              <p>Breakfast: {data.dietPlan[day]?.Breakfast}</p>
              <p>Morning Snack: {data.dietPlan[day]?.MorningSnack}</p>
              <p>Lunch: {data.dietPlan[day]?.Lunch}</p>
              <p>Evening Snack: {data.dietPlan[day]?.EveningSnack}</p>
              <p>Dinner: {data.dietPlan[day]?.Dinner}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
