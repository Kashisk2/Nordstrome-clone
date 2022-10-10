import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const PageContex = createContext();

export const PageContexProvider = ({ children }) => {
  const [page, setPage] = useState(1);

  const handleNextPage = () => {
    setPage(page + 1);
  };
  const handlePrevPage = () => {
    setPage(page - 1);
  };

  return (
    <PageContex.Provider value={{ page, handleNextPage, handlePrevPage }}>
      {children}
    </PageContex.Provider>
  );
};
