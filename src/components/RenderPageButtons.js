import React from "react";
import "./RenderPageButtons.css";

export default function RenderPageButtons({
    totalPages,
    currentPage,
    setCurrentPage,
}) {
    const getPages = () => {
        const pages = [];

        if (totalPages <= 7) {
            for (let i = 1; i <= totalPages; i++) pages.push(i);
            return pages;
        }

        if (currentPage <= 2) return [1, 2, 3, "...", totalPages];
        if (currentPage === 3) return [1, 2, 3, 4, "...", totalPages];
        if (currentPage === totalPages - 2)
            return [
                1,
                "...",
                totalPages - 3,
                totalPages - 2,
                totalPages - 1,
                totalPages,
            ];
        if (currentPage >= totalPages - 1)
            return [1, "...", totalPages - 2, totalPages - 1, totalPages];

        pages.push(1);
        pages.push("...");

        pages.push(currentPage - 1);
        pages.push(currentPage);
        pages.push(currentPage + 1);

        pages.push("...");
        pages.push(totalPages);

        return pages;
    };

    const pagination = getPages();

    return (
        <div className="pagination-container">
            <div className="pagination">
                <button className="inactive" onClick={() => setCurrentPage(1)}>
                    &lt;&lt;
                </button>
                <button
                    className="inactive"
                    onClick={() => {
                        if (currentPage !== 1) {
                            setCurrentPage(currentPage - 1);
                        }
                    }}
                >
                    &lt;
                </button>
                {pagination.map((page, index) => {
                    if (page === "...") {
                        return (
                            <span key={index} className="ellipsis">
                                ...
                            </span>
                        );
                    }
                    return (
                        <button
                            key={index}
                            onClick={() => setCurrentPage(page)}
                            className={
                                page === currentPage ? "active" : "inactive"
                            }
                        >
                            {page}
                        </button>
                    );
                })}
                <button
                    className="inactive"
                    onClick={() => {
                        if (currentPage !== totalPages) {
                            setCurrentPage(currentPage + 1);
                        }
                    }}
                >
                    &gt;
                </button>
                <button
                    className="inactive"
                    onClick={() => setCurrentPage(totalPages)}
                >
                    &gt;&gt;
                </button>
            </div>
        </div>
    );
}
