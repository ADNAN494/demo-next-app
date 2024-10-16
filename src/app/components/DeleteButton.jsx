"use client";  // This tells Next.js to treat this as a client component

const DeleteButton = ({ id }) => {
    console.log({ id });

    const deleteEmp = async () => {
        try {
            const res = await fetch(`http://localhost:3000/api/employee/${id}`, {
                method: 'DELETE',
            });

            if (res.ok) {
                const data = await res.json();
                alert(data.result);
            } else {
                alert('Error deleting the employee.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while deleting the employee.');
        }
    };

    return (
        <div>
            <button onClick={deleteEmp}>Delete</button>
        </div>
    );
};

export default DeleteButton;
