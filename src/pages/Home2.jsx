import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home2({ task, setTask }) {
    const navigator = useNavigate();

    // 1. STATE FOR PAGINATION AND SEARCH
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const tasksPerPage = 5; // Define how many tasks per page

    //Navigation Handlers 
    const handleClick = () => {
        navigator("/create");
    }

    const handleEditClick = (id) => {
        navigator(`/edit/${id}`);
    }

    const handleDelete = (id) => {
        const newArray = task.filter(item => item.id !== id);
        setTask(newArray);
        // Optional: Reset page to 1 after deletion to avoid showing an empty page
        setCurrentPage(1);
    }
    
    

    // 2. Search and Filter Logic ---
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        // Reset to the first page whenever the search query changes
        setCurrentPage(1);
    };

    const filteredTasks = task.filter(t => 
        t.taskname.toLowerCase().includes(searchQuery.toLowerCase()) || 
        t.detail.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // 3. Pagination Logic
    const totalPages = Math.ceil(filteredTasks.length / tasksPerPage);
    const lastTaskIndex = currentPage * tasksPerPage;
    const firstTaskIndex = lastTaskIndex - tasksPerPage;
    
    // Slice the filtered data to get the tasks for the current page
    const currentTasks = filteredTasks.slice(firstTaskIndex, lastTaskIndex);
    
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Generate page numbers for display
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }



    return (
        <div>
            <h1>Welcome to Task Managment App</h1>
            
            <button onClick={handleClick}>Create Task </button>
            <br />
            
            {/* SEARCH INPUT */}
            <input 
                type="text" 
                placeholder="Search by name or details..." 
                value={searchQuery}
                onChange={handleSearchChange}
                style={{ margin: '15px 0', padding: '8px', width: '300px' }}
            />

            <h2>{filteredTasks.length} Tasks Found</h2>
            
            <table border="1" style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th>Task Name</th>
                        <th>Task Details</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Map over the CURRENTLY PAGINATED tasks */}
                    {currentTasks.length > 0 ? (
                        currentTasks.map((item) => (
                            <tr key={item.id}>
                                <td class="taskname">{item.taskname}</td>
                                <td>{item.detail}</td>
                                <td>
                                    <button onClick={() => handleEditClick(item.id)}>Edit</button>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(item.id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" style={{ textAlign: 'center' }}>
                                No tasks found matching your criteria.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            
            {/* PAGINATION CONTROLS */}
            {totalPages > 1 && (
                <div style={{ marginTop: '20px', textAlign: 'center' }}>
                    
                    {/* Previous Button */}
                    <button 
                        onClick={() => paginate(currentPage - 1)} 
                        disabled={currentPage === 1}
                        style={{ margin: '0 5px' }}
                    >
                        Previous
                    </button>
                    
                    {/* Page Numbers */}
                    {pageNumbers.map(number => (
                        <button 
                            key={number} 
                            onClick={() => paginate(number)} 
                            style={{ 
                                margin: '0 5px', 
                                fontWeight: currentPage === number ? 'bold' : 'normal',
                                backgroundColor: currentPage === number ? '#ccc' : 'white',
                            }}
                        >
                            {number}
                        </button>
                    ))}
                    
                    {/* Next Button */}
                    <button 
                        onClick={() => paginate(currentPage + 1)} 
                        disabled={currentPage === totalPages}
                        style={{ margin: '0 5px' }}
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
}

export default Home2;