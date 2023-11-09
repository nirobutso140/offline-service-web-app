// import { useLoaderData } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import './MySchedules.css'
import { AuthContext } from '../../providers/AuthProvider';
import BookingRow from './BookingRow';
const MySchedules = () => {
    
    useEffect(() => {
        document.title = 'TripLink My Schedules';
      }, []);

    const [book, setBook] = useState([])
    const [bookings, setBookings] = useState([]);
    const { user } = useContext(AuthContext)
    const uri = `https://offline-servicesharing-app-server.vercel.app/readBookService/${user?.email}`
    useEffect(() => {
        fetch(uri)
            .then(res => res.json())
            .then(data => setBook(data))
    }, [uri])
    // const mySchedules = useLoaderData()
  
    const handleBookingConfirm = id =>{
          fetch(`https://offline-servicesharing-app-server.vercel.app/status/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
          })
          .then(res => res.json())
          .then(data =>{
              console.log(data);
              if(data.modifiedCount > 0){
                const remaining = bookings.filter(booking => booking._id !== id);
                    const updated = bookings.find(booking => booking._id === id);
                    updated.status = 'confirm'
                    const newBookings = [updated, ...remaining];
                    setBookings(newBookings);
              }
          })
    }

    return (
        <>
            <div className='mySchedules_conatiner'>
                <table className="table">
                <thead>
                        <tr>
                            <th>Image</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                </table>


                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <tbody>
                            {
                                book.map(booking => <BookingRow key={booking._id} booking={booking} handleBookingConfirm={handleBookingConfirm}/>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default MySchedules;