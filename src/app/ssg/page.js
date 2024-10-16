import getData from "../../../Apis/userApi.js"
import Link from "next/link"
const SSG = async () => {
    const data = await getData();
    const users = await data;
    return (
        <div>
            <h2>Static Site Generation</h2>
            {
                data.map((user, i) => (
                    <h3 key={i}>
                        <Link href={`ssg/${user.id}`}>{user.username}</Link>
                    </h3>
                )

                )
            }
        </div>
    )
}

export default SSG
