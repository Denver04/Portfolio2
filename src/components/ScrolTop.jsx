import React from 'react'
import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrolTop = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

export default ScrolTop;