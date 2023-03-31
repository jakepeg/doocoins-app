import React from 'react';
import * as GlobalVariableContext from '../config/GlobalVariableContext';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

export const GoalProgress = () => {
  const variables = GlobalVariableContext.useValues();

  return (
    <CircularProgressbar
      strokeWidth="18"
      value={variables.Balance} // child_balance
      maxValue={variables.Goal_Value} // reward value
      //text={variables.Goal_Name}
      text={''}
      styles={buildStyles({
        strokeLinecap: 'butt', // 'butt' or 'round'
        textSize: '24px',
        pathColor: `#129FAA`,
        textColor: '#0B334D',
        trailColor: '#F7F7F7',
      })}
    />
  );
};
