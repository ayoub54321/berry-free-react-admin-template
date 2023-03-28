import React from 'react';
import { useAuth } from 'firbaseConfig/Firebase';
import { Navigate, Route ,Routes} from 'react-router-dom';

export const PrivateRoute = ({ element: Element, ...rest  }) => {
    const currentUser = useAuth();
    return (
        <Route {...rest} element={currentUser ? (
              <Element />
            ) : (
              <Navigate to="/pages/login/login3" />
            )
          }
        />
      );
};


