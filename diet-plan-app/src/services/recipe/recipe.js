import config from "./Config";
import { getDataApi } from "../apiCaller";

export const getRecipeRequest = (id) => {
  const { path } = config.getRecipe;
  return getDataApi({
    path: path(id),
  });
};
