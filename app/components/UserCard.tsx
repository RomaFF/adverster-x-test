interface UserCardProps {
    user: {
        name: string;
        email: string;
        address: {
            city: string;
        };
    };
}

const UserCard = ({ user }: UserCardProps) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
            <h2 className="text-black text-xl font-semibold mb-2">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-gray-500">{user.address.city}</p>
        </div>
    );
};

export default UserCard;
