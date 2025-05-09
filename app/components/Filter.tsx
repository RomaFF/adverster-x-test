import React from 'react';

interface FilterProps {
    filter: string;
    onFilterChange: (value: string) => void;
}

const Filter: React.FC<FilterProps> = ({ filter, onFilterChange }) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onFilterChange(event.target.value);
    };

    return (
        <div className="mb-6">
            <input
                type="text"
                value={filter}
                onChange={handleChange}
                placeholder="Search by name, email or city"
                className="px-4 py-2 w-full max-w-md mx-auto border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    );
};

export default Filter;
