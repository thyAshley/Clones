import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as repositoryActions from "../redux/repository/repositoryAction";

export const useAction = () => {
  const dispatch = useDispatch();

  return bindActionCreators(repositoryActions, dispatch);
};
