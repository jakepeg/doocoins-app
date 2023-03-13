import * as React from 'react';
import {
  useQuery,
  useMutation,
  useIsFetching,
  useQueryClient,
} from 'react-query';
import useFetch from 'react-fetch-hook';
import { useIsFocused } from '@react-navigation/native';
import usePrevious from '../utils/usePrevious';
import * as GlobalVariables from '../config/GlobalVariableContext';

export const addChildPOST = (Constants, { Parent_ID, new_child }) =>
  fetch(`https://x8ki-letl-twmt.n7.xano.io/api:21fB7LVM/children`, {
    body: JSON.stringify({
      name: new_child,
      parents_id: Parent_ID,
      balance: 0,
    }),
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  })
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useAddChildPOST = initialArgs => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();

  return useMutation(
    args => addChildPOST(Constants, { ...initialArgs, ...args }),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('children', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('child');
        queryClient.invalidateQueries('children');
      },
    }
  );
};

export const FetchAddChildPOST = ({
  children,
  onData = () => {},
  refetchInterval,
  Parent_ID,
  new_child,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    loading,
    data,
    error,
    mutate: refetch,
  } = useAddChildPOST({ Parent_ID, new_child }, { refetchInterval });

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchAddChild: refetch });
};

export const childListGET = Constants =>
  fetch(`https://x8ki-letl-twmt.n7.xano.io/api:21fB7LVM/children`, {
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
  })
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useChildListGET = (args, { refetchInterval } = {}) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(['children', args], () => childListGET(Constants, args), {
    refetchInterval,
  });
};

export const FetchChildListGET = ({
  children,
  onData = () => {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const { loading, data, error, refetch } = useChildListGET(
    {},
    { refetchInterval }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchChildList: refetch });
};

export const getChildrenGET = (Constants, { Parent_ID }) =>
  fetch(
    `https://x8ki-letl-twmt.n7.xano.io/api:21fB7LVM/childrenforparent2/${
      Parent_ID ?? ''
    }`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  )
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useGetChildrenGET = (args, { refetchInterval } = {}) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(['children', args], () => getChildrenGET(Constants, args), {
    refetchInterval,
  });
};

export const FetchGetChildrenGET = ({
  children,
  onData = () => {},
  refetchInterval,
  Parent_ID,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const { loading, data, error, refetch } = useGetChildrenGET(
    { Parent_ID },
    { refetchInterval }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchGetChildren: refetch });
};

export const getLoggedInUserGET = Constants =>
  fetch(`https://x8ki-letl-twmt.n7.xano.io/api:21fB7LVM/auth/me`, {
    headers: {
      Accept: 'application/json',
      Authorization: Constants['AUTHORIZATION_HEADER'],
      'Content-Type': 'application/json',
    },
  })
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useGetLoggedInUserGET = () => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(`https://x8ki-letl-twmt.n7.xano.io/api:21fB7LVM/auth/me`, {
    depends: [isFocused],
    headers: {
      Accept: 'application/json',
      Authorization: Constants['AUTHORIZATION_HEADER'],
      'Content-Type': 'application/json',
    },
  });
};

export const FetchGetLoggedInUserGET = ({
  children,
  onData = () => {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(`https://x8ki-letl-twmt.n7.xano.io/api:21fB7LVM/auth/me`, {
    depends: [isFocused],
    headers: {
      Accept: 'application/json',
      Authorization: Constants['AUTHORIZATION_HEADER'],
      'Content-Type': 'application/json',
    },
  });

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchGetLoggedInUser: refetch });
};

export const loginPOST = (Constants, { loginEmail, loginPassword }) =>
  fetch(`https://x8ki-letl-twmt.n7.xano.io/api:21fB7LVM/auth/login`, {
    body: JSON.stringify({ email: loginEmail, password: loginPassword }),
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  })
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useLoginPOST = ({ loginEmail, loginPassword }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(`https://x8ki-letl-twmt.n7.xano.io/api:21fB7LVM/auth/login`, {
    body: JSON.stringify({ email: loginEmail, password: loginPassword }),
    depends: [isFocused],
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  });
};

export const FetchLoginPOST = ({
  children,
  onData = () => {},
  refetchInterval,
  loginEmail,
  loginPassword,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(`https://x8ki-letl-twmt.n7.xano.io/api:21fB7LVM/auth/login`, {
    body: JSON.stringify({ email: loginEmail, password: loginPassword }),
    depends: [isFocused],
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  });

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchLogin: refetch });
};

export const signUpPOST = (
  Constants,
  { signupEmail, signupName, signupPassword }
) =>
  fetch(`https://x8ki-letl-twmt.n7.xano.io/api:21fB7LVM/auth/signup`, {
    body: JSON.stringify({
      name: signupName,
      email: signupEmail,
      password: signupPassword,
    }),
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  })
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useSignUpPOST = ({ signupEmail, signupName, signupPassword }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
    `https://x8ki-letl-twmt.n7.xano.io/api:21fB7LVM/auth/signup`,
    {
      body: JSON.stringify({
        name: signupName,
        email: signupEmail,
        password: signupPassword,
      }),
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }
  );
};

export const FetchSignUpPOST = ({
  children,
  onData = () => {},
  refetchInterval,
  signupEmail,
  signupName,
  signupPassword,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(`https://x8ki-letl-twmt.n7.xano.io/api:21fB7LVM/auth/signup`, {
    body: JSON.stringify({
      name: signupName,
      email: signupEmail,
      password: signupPassword,
    }),
    depends: [isFocused],
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  });

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchSignUp: refetch });
};
