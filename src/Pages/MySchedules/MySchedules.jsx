import { useLoaderData } from 'react-router-dom';
import './MySchedules.css'
const MySchedules = () => {

    const mySchedules = useLoaderData()

    return (
        <>
            <div className='mySchedules_conatiner'>
                {/* <table className="table">
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Service Name</th>
                            <th>Price</th>
                            <th>My Schedules</th>
                            <th></th>
                        </tr>
                    </thead>
                </table> */}
                {
                    mySchedules.map(Schedule => <>
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <tbody>

                                    <tr>
                                        <th>
                                            <label>
                                                <input type="checkbox" className="checkbox" />
                                            </label>
                                        </th>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={Schedule.photo} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{Schedule.name}</div>
                                                    <div className="text-sm opacity-50">{Schedule.address}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {Schedule.price}
                                        </td>
                                        <td>{Schedule.date}</td>
                                        <th>
                                            <button className="btn btn-ghost btn-xs">details</button>
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </>)
                }
            </div>
        </>
    );
};

export default MySchedules;