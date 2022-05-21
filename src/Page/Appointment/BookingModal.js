import React from 'react';
import { format } from 'date-fns';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';


const BookingModal = ({ date, treatment, setTreatment, refetch }) => {
    const { _id, name, slots } = treatment
    const [user, loading] = useAuthState(auth);
    const formattedDate = format(date, 'PP')

    const handleBooking = event => {
        event.preventDefault()
        const slot = event.target.slot.value

        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formattedDate,
            slot,
            patient: user.email,
            patientName: user.displayName,
            phone: event.target.phone.value
        }
        fetch('http://localhost:5000/booking', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)

        })
            .then(res => res.json())
            .then(data => {

                if (data.success) {

                    toast(`Appointment is set, ${formattedDate} at ${slot}`)
                }
                else {
                    toast.error(`Already have an Appointment on, ${data.booking?.date} at ${data.booking?.slot}`)

                }
                refetch()
                setTreatment(null)
            })

    }
    return (
        <div>
            <input type="checkbox" id="booking-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-2xl text-secondary text-center mb-4"><span className='font-bold text-lg text-2xl text-[#3A4256]'>Booking for</span> : {name}</h3>
                    <form onSubmit={handleBooking} className=' text-center grid grid-cols-1 gap-3 justify-items-center mt-2'>
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs " />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot, index) => <option
                                    key={index}
                                    value={slot}
                                >{slot}</option>)
                            }

                        </select>
                        <input type="text" name='name' disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='email' disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" placeholder="submit" className="btn btn-secondary w-full max-w-xs " />
                    </form>

                </div>
            </div>

        </div>
    );
};

export default BookingModal;