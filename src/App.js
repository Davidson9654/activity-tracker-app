import React, { useState, useEffect } from 'react';
import './App.css';
import AddActivityForm from './components/AddActivityForm';
import ActivityList from './components/AvtivityList';

const App = () => {
  const [activities, setActivities] = useState(() => {
    const savedActivities = localStorage.getItem('activities');
    return savedActivities ? JSON.parse(savedActivities) : [];
  });

  const handleAddActivity = (newActivity) => {
    const updatedActivities = [...activities, newActivity];
    setActivities(updatedActivities);
    localStorage.setItem('activities', JSON.stringify(updatedActivities));
  };

  useEffect(() => {
    localStorage.setItem('activities', JSON.stringify(activities));
  }, [activities]);

  return (
    <div className="App">
      <h1>Activity Tracker</h1>
      <AddActivityForm onAddActivity={handleAddActivity} />
      <ActivityList activities={activities} />
    </div>
  );
};

export default App;
