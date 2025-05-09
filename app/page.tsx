'use client'

import { useEffect, useState } from 'react';
import UserList from './components/UserList';
import Filter from './components/Filter';
import {useUsers} from "@/app/hooks/useUsers";

const Home = () => {
    const { users, loading } = useUsers();
    const [filteredUsers, setFilteredUsers] = useState(users);
    const [filter, setFilter] = useState<string>('');

    const handleFilterChange = (value: string) => {
        setFilter(value);

        const filtered = users.filter(user =>
            user.name.toLowerCase().includes(value.toLowerCase()) ||
            user.email.toLowerCase().includes(value.toLowerCase()) ||
            user.address.city.toLowerCase().includes(value.toLowerCase())
        );

        setFilteredUsers(filtered);
        localStorage.setItem('filter', value);
    };

    useEffect(() => {
        const storedFilter = localStorage.getItem('filter');
        if (storedFilter) {
            setFilter(storedFilter);
            handleFilterChange(storedFilter);
        }
    }, [users]);

    useEffect(() => {
        if (!loading) {
            setFilteredUsers(users);
        }
    }, [users, loading]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-center mb-6">Users List</h1>
            <Filter filter={filter} onFilterChange={handleFilterChange} />
            <UserList users={filteredUsers} />
        </div>
    );
};

export default Home;
