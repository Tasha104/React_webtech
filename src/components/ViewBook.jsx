import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
// import './App.css'; 

function Books() {
    const [books, setBooks] = useState([]);
    const [query, setQuery] = useState('');
    const [searchType, setSearchType] = useState('title');
    const [direction, setDirection] = useState('asc');
    const [sortBy, setSortBy] = useState('title');
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(1);

    // Fetch books from the server (this is just a placeholder, adjust the URL as necessary)
    useEffect(() => {
        // Implement your API call here to fetch books
        const fetchBooks = async () => {
            const response = await fetch(`/api/books?page=${currentPage}&sortBy=${sortBy}&direction=${direction}&query=${query}&searchType=${searchType}`);
            const data = await response.json();
            setBooks(data.content); // Assuming your API returns books in 'content'
            setTotalPages(data.totalPages);
        };

        fetchBooks();
    }, [currentPage, sortBy, direction, query, searchType]);

    const handleSearch = (e) => {
        e.preventDefault();
        setCurrentPage(0); // Reset to first page on search
    };

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this book?');
        if (confirmDelete) {
            // Implement delete API call here
            await fetch(`/api/books/delete/${id}`, { method: 'DELETE' });
            setBooks(books.filter(book => book.id !== id)); // Update local state after delete
        }
    };

    return (
        <div className="container mt-4">
            <div className="row mb-4">
                <div className="col">
                    <h2>Book Library</h2>
                </div>
                <div className="col text-end">
                    <Link to="/books/new" className="btn btn-primary">Add New Book</Link>
                    <Link to="/books/export" className="btn btn-success">Export to CSV</Link>
                </div>
            </div>

            {/* Search Form */}
            <div className="row mb-4">
                <div className="col">
                    <form onSubmit={handleSearch} className="row g-3">
                        <div className="col-md-4">
                            <input 
                                type="text" 
                                className="form-control" 
                                name="query" 
                                value={query} 
                                onChange={(e) => setQuery(e.target.value)} 
                                placeholder="Search..." 
                            />
                        </div>
                        <div className="col-md-3">
                            <select 
                                className="form-select" 
                                name="searchType" 
                                value={searchType} 
                                onChange={(e) => setSearchType(e.target.value)}
                            >
                                <option value="title">Title</option>
                                <option value="author">Author</option>
                                <option value="isbn">ISBN</option>
                            </select>
                        </div>
                        <div className="col-md-2">
                            <button type="submit" className="btn btn-primary">Search</button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Books Table */}
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Cover</th>
                            <th>
                                <Link to={`/books?sortBy=title&direction=${direction === 'asc' ? 'desc' : 'asc'}&query=${query}&searchType=${searchType}`}>
                                    Title
                                    {sortBy === 'title' && (
                                        <i className={`bi ${direction === 'asc' ? 'bi-arrow-up' : 'bi-arrow-down'}`}></i>
                                    )}
                                </Link>
                            </th>
                            <th>
                                <Link to={`/books?sortBy=author&direction=${direction}&query=${query}&searchType=${searchType}`}>
                                    Author
                                </Link>
                            </th>
                            <th>ISBN</th>
                            <th>Available Copies</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map(book => (
                            <tr key={book.id}>
                                <td>
                                    {book.coverImage && (
                                        <img 
                                            src={`/uploads/covers/${book.coverImage}`} 
                                            className="img-thumbnail" 
                                            style={{ maxWidth: '50px' }} 
                                            alt={book.title} 
                                        />
                                    )}
                                </td>
                                <td>{book.title}</td>
                                <td>{book.author}</td>
                                <td>{book.isbn}</td>
                                <td>{`${book.availableCopies}/${book.copies}`}</td>
                                <td>
                                    <Link to={`/books/${book.id}`} className="btn btn-sm btn-info">View</Link>
                                    <div className="btn-group">
                                        <Link to={`/books/edit/${book.id}`} className="btn btn-sm btn-warning">Edit</Link>
                                        <button 
                                            className="btn btn-sm btn-danger" 
                                            onClick={() => handleDelete(book.id)}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <nav>
                    <ul className="pagination justify-content-center">
                        <li className={`page-item ${currentPage === 0 ? 'disabled' : ''}`}>
                            <Link className="page-link" to={`/books?page=${currentPage - 1}&sortBy=${sortBy}&direction=${direction}&query=${query}&searchType=${searchType}`}>Previous</Link>
                        </li>
                        {[...Array(totalPages)].map((_, pageNum) => (
                            <li className={`page-item ${pageNum === currentPage ? 'active' : ''}`} key={pageNum}>
                                <Link className="page-link" to={`/books?page=${pageNum}&sortBy=${sortBy}&direction=${direction}&query=${query}&searchType=${searchType}`}>{pageNum + 1}</Link>
                            </li>
                        ))}
                        <li className={`page-item ${currentPage === totalPages - 1 ? 'disabled' : ''}`}>
                            <Link className="page-link" to={`/books?page=${currentPage + 1}&sortBy=${sortBy}&direction=${direction}&query=${query}&searchType=${searchType}`}>Next</Link>
                        </li>
                    </ul>
                </nav>
            )}
        </div>
    );
}

export default Books;
