import UserCard from './UserCard';

interface UserListProps {
    users: {
        id: number;
        name: string;
        email: string;
        address: {
            city: string;
        };
    }[];
}

const UserList = ({ users }: UserListProps) => {
    if (users.length === 0) {
        return <div className={"w-full h-full"}>
            Nothing found!
        </div>
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {users.map(user => (
                <UserCard key={user.id} user={user} />
            ))}
        </div>
    );
};

export default UserList;
