import Link from "next/link";
import DeleteButton from "../components/DeleteButton";
const getAllEmployee = async ()=>{
    let data = await fetch('http://localhost:3000/api/employee');
    data = data.json();
    return data;
}

const page = async () => {
    const employee = await getAllEmployee();

  return (
    <div>
      <h2>Delete Api in Next Js</h2>
      {
        employee.map((item,i)=>(
            <div key={i}>
                <h3>{item.name}</h3>
                <DeleteButton id={item.employeeId}/>
                <Link href={`employe-delete/${item.employeeId}/update`}>Update</Link>
            </div>
        ))
      }
    </div>
  )
}

export default page
