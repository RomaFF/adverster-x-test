import { useEffect, useState } from 'react';

interface User {
    id: number;
    name: string;
    email: string;
    address: {
        city: string;
    };
}

const fetchUsers = async (): Promise<User[]> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data: User[] = await response.json();
    return data;
};

export const useUsers = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const cachedUsers = localStorage.getItem('users');

        if (cachedUsers) {
            setUsers(JSON.parse(cachedUsers));
            setLoading(false);
        } else {
            const loadUsers = async () => {
                const usersData = await fetchUsers();
                localStorage.setItem('users', JSON.stringify(usersData));
                setUsers(usersData);
                setLoading(false);
            };

            loadUsers();
        }
    }, []);

    return { users, loading };
};
