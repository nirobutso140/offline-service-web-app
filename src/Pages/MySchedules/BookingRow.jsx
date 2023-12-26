
const BookingRow = ({ booking, handleBookingConfirm }) => {
    const {_id, name, photo, date, price, status } = booking

    return (
        <>
            <tr>

                <td>
                    <div className="avatar">
                        <div className="rounded-full w-20 h-20">
                            {photo && <img src={photo} alt="Avatar Tailwind CSS Component" />}
                        </div>
                    </div>
                </td>
                <td>
                    {name}
                </td>
                <td>{date}</td>
                <td>${price}</td>
                <th>
                { status === 'confirm' ? <span className="font-bold text-success">Confirmed</span> :
                        <button onClick={() => handleBookingConfirm(_id)} className="btn btn-ghost btn-xs text-orange-400">Pending</button>}
                </th>
            </tr>
        </>
    );
};

export default BookingRow;