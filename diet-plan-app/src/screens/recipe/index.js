import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRecipeData } from "../../redux/reducer/recipe";
import Loader from "../../component/loader";

export const Recipe = () => {
  const [recipeData, setRecipeData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  const userId = useSelector((state) => state.user.userData._id);

  useEffect(() => {
    dispatch(
      getRecipeData(
        userId,
        (res) => {
          console.log("===>res", res);
          if (Object.keys(res.dietPlan).length > 0) {
            setIsLoading(false);
            setRecipeData(res.dietPlan);
          }
        },
        (e) => {
          setIsLoading(false);
          console.log("===>e", e);
        },
      ),
    );
  }, []);
  console.log("===>recipeData", Object.values(recipeData));
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {Object.keys(recipeData).length > 0 &&
            Object.values(recipeData).map((meal) => {
              console.log("===>meal", meal);
              return <h1></h1>;
            })}
        </div>
      )}
    </div>
  );
};
