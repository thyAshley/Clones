interface RepositoryState {
  loading: boolean;
  error: string | null;
  data: string[];
}

interface SearchRepositoryInit {
  type: ActionType.SEARCH_REPOSITORIES;
}
interface SearchRepositorySuccess {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESSS;
  payload: string[];
}
interface SearchRepositoryFailure {
  type: ActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

type RepositoryAction =
  | SearchRepositoryFailure
  | SearchRepositoryInit
  | SearchRepositorySuccess;

enum ActionType {
  SEARCH_REPOSITORIES = "SEARCH_REPOSITORIES",
  SEARCH_REPOSITORIES_SUCCESSS = "SEARCH_REPOSITORIES_SUCCESSS",
  SEARCH_REPOSITORIES_ERROR = "SEARCH_REPOSITORIES_ERROR",
}

const reducer = (
  state: RepositoryState,
  action: RepositoryAction
): RepositoryState => {
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES:
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_REPOSITORIES_SUCCESSS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
