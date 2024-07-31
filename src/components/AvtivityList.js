import React from 'react';

const ActivityList = ({ activities }) => {
  return (
    <div>
      <h2>Activity List</h2>
      <ul>
        {activities.map((activity, index) => (
          <li key={index}>
            {activity.activity} - {activity.duration} minutes on {activity.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityList;

