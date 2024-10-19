// Pagination.js
import icons from "./../../../img/icons/icons.svg";
import { useEffect } from "react";

const Pagination = ({ page, totalPages, onPageChange }) => {

    useEffect(() => {
        import ('./PaginationStyles.css');
    })

    const nextPage = () => {
        if (page < totalPages) {
            onPageChange(page + 1);
        }
    };

    const prevPage = () => {
        if (page > 1) {
            onPageChange(page - 1);
        }
    };

    const goToPage = (pageNum) => {
        onPageChange(pageNum);
    };

    return (
        <div className="pagination-block">
            <ul className="pagination-list">
                {/* Кнопка "Первая страница" */}
                <li className="pagination-list-item">
                    <a className="pagination-link pagination-arrow-link" onClick={() => goToPage(1)}>
                        <svg className="pagination-svg">
                            <use href={`${icons}#double-chevron-left`}></use>
                        </svg>
                    </a>
                </li>

                {/* Кнопка "Предыдущая страница" */}
                <li className="pagination-list-item">
                    <a className="pagination-link pagination-arrow-link" onClick={prevPage} disabled={page === 1}>
                        <svg className="pagination-svg">
                            <use href={`${icons}#chevron-left`}></use>
                        </svg>
                    </a>
                </li>

                {/* Номера страниц */}
                {Array.from({ length: totalPages }, (_, i) => (
                    <li key={i} className="pagination-list-item">
                        <a
                            className={`pagination-link ${page === i + 1 ? 'pagination-link--active' : ''}`}
                            onClick={() => goToPage(i + 1)}
                        >
                            {i + 1}
                        </a>
                    </li>
                ))}

                {/* Кнопка "Следующая страница" */}
                <li className="pagination-list-item">
                    <a className="pagination-link pagination-arrow-link" onClick={nextPage} disabled={page === totalPages}>
                        <svg className="pagination-svg">
                            <use href={`${icons}#chevron-right`}></use>
                        </svg>
                    </a>
                </li>

                {/* Кнопка "Последняя страница" */}
                <li className="pagination-list-item">
                    <a className="pagination-link pagination-arrow-link" onClick={() => goToPage(totalPages)}>
                        <svg className="pagination-svg">
                            <use href={`${icons}#double-chevron-right`}></use>
                        </svg>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Pagination;
