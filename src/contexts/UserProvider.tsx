"use client";

import { ActionType } from "@/shared/types";
import { User } from "@prisma/client";
import {
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";

export const userActions = "FETCH_USER";

type State = {
  user: User;
};

const initialState: State = {
  user: {
    id: 0,
    avatar: "",
    email: "",
    name: "",
    roles: [],
    username: "",
  },
};

export const reducer = (state: State, action: ActionType<User>) => {
  switch (action.type) {
    case userActions:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export const makeUser = (user: User) => ({
  type: userActions,
  payload: user,
});

export const UserContext = createContext(initialState);

function makeActions(
  dispatch: Dispatch<ReturnType<typeof makeUser>>,
  loggedUser: User
) {
  return {
    fetchUser: async () => {
      dispatch(makeUser(loggedUser));
    },
  };
}

type Props = {
  loggedUser: User;
  children: ReactNode;
};

export function UserProvider({ loggedUser, children }: Props) {
  const [user, dispatch] = useReducer(reducer, initialState);

  const actions = useMemo(
    () => makeActions(dispatch, loggedUser),
    [dispatch, loggedUser]
  );

  useEffect(() => {
    actions.fetchUser();
  }, [actions]);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}

export function useUser() {
  return useContext(UserContext);
}
