import React, { useEffect } from 'react';
import { useUser } from '../Context/User';
import { useNavigate } from 'react-router-dom';

function Protected({ children }) {
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || user === undefined) {
      navigate("/");  // Navigate to home if user is not authenticated
    }
  }, [user, navigate]); // Dependency array to run effect when user state changes

  if (!user || user === undefined) {
    return null;  // Or you can show a loading state
  }

  return <div>{children}</div>;
}

export default Protected;
