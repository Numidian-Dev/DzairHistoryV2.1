"use client"
import { useState, useEffect } from "react";

const Pagination = ({ totalPage, currentPage, setCurrentPage, loading }) => {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    // Mise à jour des pages une fois que totalPage est défini
    if (totalPage > 0) {
      setPages([...Array(totalPage)].map((_, index) => index + 1));
    }
  }, [totalPage]);

  const handlePageChange = (page) => {
    console.log("Changing to page:", page);
    setCurrentPage(page);
  };

  if (loading) {
    return <div>Chargement...</div>; // Ou tout autre indicateur de chargement
  }

  return (
    <section className="pagination">
      {currentPage > 1 && (
        <div onClick={() => setCurrentPage(currentPage - 1)} className="previous-page">
          Précédent
        </div>
      )}
      {pages.map((pageNumber) => (
        <div
          onClick={() => handlePageChange(pageNumber)}
          className={currentPage === pageNumber ? "page-number active-page" : "page-number"}
          key={pageNumber}
        >
          {pageNumber}
        </div>
      ))}
      {currentPage < totalPage && (
        <div onClick={() => setCurrentPage(currentPage + 1)} className="next-page">
          Suivant
        </div>
      )}
    </section>
  );
};

export default Pagination;
