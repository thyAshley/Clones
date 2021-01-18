export enum ActionType {
  SEARCH_REPOSITORIES = "SEARCH_REPOSITORIES",
  SEARCH_REPOSITORIES_SUCCESSS = "SEARCH_REPOSITORIES_SUCCESSS",
  SEARCH_REPOSITORIES_ERROR = "SEARCH_REPOSITORIES_ERROR",
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

export type RepositoryAction =
  | SearchRepositoryFailure
  | SearchRepositoryInit
  | SearchRepositorySuccess;
