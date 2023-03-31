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

export const addRewardPOST = (
  Constants,
  { Child_ID, reward_name, reward_value }
) =>
  fetch(`https://x8ki-letl-twmt.n7.xano.io/api:21fB7LVM/rewards`, {
    body: JSON.stringify({
      name: reward_name,
      value: reward_value,
      children_id: Child_ID,
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

export const useAddRewardPOST = initialArgs => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();

  return useMutation(
    args => addRewardPOST(Constants, { ...initialArgs, ...args }),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('rewards', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('reward');
        queryClient.invalidateQueries('rewards');
      },
    }
  );
};

export const FetchAddRewardPOST = ({
  children,
  onData = () => {},
  refetchInterval,
  Child_ID,
  reward_name,
  reward_value,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    loading,
    data,
    error,
    mutate: refetch,
  } = useAddRewardPOST(
    { Child_ID, reward_name, reward_value },
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

  return children({ loading, data, error, refetchAddReward: refetch });
};

export const addTaskPOST = (Constants, { Child_ID, task_name, task_value }) =>
  fetch(`https://x8ki-letl-twmt.n7.xano.io/api:21fB7LVM/tasks`, {
    body: JSON.stringify({
      name: task_name,
      value: task_value,
      children_id: Child_ID,
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

export const useAddTaskPOST = initialArgs => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();

  return useMutation(
    args => addTaskPOST(Constants, { ...initialArgs, ...args }),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('tasks', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('task');
        queryClient.invalidateQueries('tasks');
      },
    }
  );
};

export const FetchAddTaskPOST = ({
  children,
  onData = () => {},
  refetchInterval,
  Child_ID,
  task_name,
  task_value,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    loading,
    data,
    error,
    mutate: refetch,
  } = useAddTaskPOST({ Child_ID, task_name, task_value }, { refetchInterval });

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

  return children({ loading, data, error, refetchAddTask: refetch });
};

export const addTaskTransactionPOST = (
  Constants,
  { Child_ID, plus_minus, transaction_name, transaction_value }
) =>
  fetch(`https://x8ki-letl-twmt.n7.xano.io/api:21fB7LVM/transactions`, {
    body: JSON.stringify({
      name: transaction_name,
      plus_minus: plus_minus,
      value: transaction_value,
      children_id: Child_ID,
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

export const useAddTaskTransactionPOST = initialArgs => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();

  return useMutation(
    args => addTaskTransactionPOST(Constants, { ...initialArgs, ...args }),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('transactions', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('transaction');
        queryClient.invalidateQueries('transactions');
      },
    }
  );
};

export const FetchAddTaskTransactionPOST = ({
  children,
  onData = () => {},
  refetchInterval,
  Child_ID,
  plus_minus,
  transaction_name,
  transaction_value,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    loading,
    data,
    error,
    mutate: refetch,
  } = useAddTaskTransactionPOST(
    { Child_ID, plus_minus, transaction_name, transaction_value },
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

  return children({ loading, data, error, refetchAddTaskTransaction: refetch });
};

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

export const getChildGET = (Constants, { children_id }) =>
  fetch(
    `https://x8ki-letl-twmt.n7.xano.io/api:21fB7LVM/children/${
      children_id ?? ''
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

export const useGetChildGET = (args, { refetchInterval } = {}) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(['child', args], () => getChildGET(Constants, args), {
    refetchInterval,
    onSuccess: () => queryClient.invalidateQueries(['children']),
  });
};

export const FetchGetChildGET = ({
  children,
  onData = () => {},
  refetchInterval,
  children_id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const { loading, data, error, refetch } = useGetChildGET(
    { children_id },
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

  return children({ loading, data, error, refetchGetChild: refetch });
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

export const getGoalGET = (Constants, { rewards_id }) =>
  fetch(
    `https://x8ki-letl-twmt.n7.xano.io/api:21fB7LVM/rewards/${
      rewards_id ?? ''
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

export const useGetGoalGET = (args, { refetchInterval } = {}) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(['reward', args], () => getGoalGET(Constants, args), {
    refetchInterval,
    onSuccess: () => queryClient.invalidateQueries(['rewards']),
  });
};

export const FetchGetGoalGET = ({
  children,
  onData = () => {},
  refetchInterval,
  rewards_id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const { loading, data, error, refetch } = useGetGoalGET(
    { rewards_id },
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

  return children({ loading, data, error, refetchGetGoal: refetch });
};

export const getRewardsGET = (Constants, { Child_ID }) =>
  fetch(
    `https://x8ki-letl-twmt.n7.xano.io/api:21fB7LVM/getchildrewards/${
      Child_ID ?? ''
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

export const useGetRewardsGET = (args, { refetchInterval } = {}) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(['rewards', args], () => getRewardsGET(Constants, args), {
    refetchInterval,
  });
};

export const FetchGetRewardsGET = ({
  children,
  onData = () => {},
  refetchInterval,
  Child_ID,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const { loading, data, error, refetch } = useGetRewardsGET(
    { Child_ID },
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

  return children({ loading, data, error, refetchGetRewards: refetch });
};

export const getTasksGET = (Constants, { child_id }) =>
  fetch(
    `https://x8ki-letl-twmt.n7.xano.io/api:21fB7LVM/getchildtasks/${
      child_id ?? ''
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

export const useGetTasksGET = (args, { refetchInterval } = {}) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(['tasks', args], () => getTasksGET(Constants, args), {
    refetchInterval,
  });
};

export const FetchGetTasksGET = ({
  children,
  onData = () => {},
  refetchInterval,
  child_id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const { loading, data, error, refetch } = useGetTasksGET(
    { child_id },
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

  return children({ loading, data, error, refetchGetTasks: refetch });
};

export const getTransactionsGET = (Constants, { child_id }) =>
  fetch(
    `https://x8ki-letl-twmt.n7.xano.io/api:21fB7LVM/getchildtransactions/${
      child_id ?? ''
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

export const useGetTransactionsGET = (args, { refetchInterval } = {}) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(
    ['transactions', args],
    () => getTransactionsGET(Constants, args),
    {
      refetchInterval,
    }
  );
};

export const FetchGetTransactionsGET = ({
  children,
  onData = () => {},
  refetchInterval,
  child_id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const { loading, data, error, refetch } = useGetTransactionsGET(
    { child_id },
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

  return children({ loading, data, error, refetchGetTransactions: refetch });
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

export const updateChildBalancePOST = (
  Constants,
  {
    Child_ID,
    Parent_ID,
    Selected_Child_Balance,
    Selected_Child_Name,
    Selected_Child_Reward,
    children_id,
  }
) =>
  fetch(
    `https://x8ki-letl-twmt.n7.xano.io/api:21fB7LVM/children/${
      children_id ?? ''
    }`,
    {
      body: JSON.stringify({
        children_id: Child_ID,
        name: Selected_Child_Name,
        parents_id: Parent_ID,
        rewards_id: Selected_Child_Reward,
        balance: Selected_Child_Balance,
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
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

export const useUpdateChildBalancePOST = initialArgs => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();

  return useMutation(
    args => updateChildBalancePOST(Constants, { ...initialArgs, ...args }),
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

export const FetchUpdateChildBalancePOST = ({
  children,
  onData = () => {},
  refetchInterval,
  Child_ID,
  Parent_ID,
  Selected_Child_Balance,
  Selected_Child_Name,
  Selected_Child_Reward,
  children_id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    loading,
    data,
    error,
    mutate: refetch,
  } = useUpdateChildBalancePOST(
    {
      Child_ID,
      Parent_ID,
      Selected_Child_Balance,
      Selected_Child_Name,
      Selected_Child_Reward,
      children_id,
    },
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

  return children({ loading, data, error, refetchUpdateChildBalance: refetch });
};
