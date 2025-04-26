import { useReducer, useState } from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case true:
            return {
                ...state
            };
        case false:
            return {
                ...state,
                lunch: []
            };
        default:
            throw new Error(`Unknown action: ${action.type}`);
    }
};

const BookingForm = ({ availableTimes, updateTimes }) => {
    const [finished, setFinished] = useState(false);

    const [info, setInfo] = useState({
        name: '',
        email: '',
        data: '',
        time: '',
        occasion: '',
        guests: '',
    });

    const handleChange = (e) => {
        e.preventDefault();
        setInfo({
            ...info,
            [e.target.name]: e.target.value
        })
        info.name && info.email && info.date && info.time && info.guests && setFinished(true)
    };

    const clickHandler = (e) => {
        e.preventDefault();
        setInfo({
            name: '',
            email: '',
            date: '',
            time: '',
            occasion: '',
            guests: '',
        });
        setFinished(false);
        alert(`Reserve successfully.`);
    };

    return (
        <form className="reservation-form">
            <label htmlFor="name">Your name</label>
            <input type="text" id='name' name="name" value={info.name} onChange={handleChange} placeholder='What can we call you' className='input' required />
            <label htmlFor="email">Your email</label>
            <input type="email" id="email" name="email" value={info.email} onChange={handleChange} placeholder='abcde@email.com' className='input' required />
            <section className="date-time">
                <label htmlFor="date">Date</label>
                <input type="date" id="date" name="date" value={info.date} className='input' required
                    onChange={(e) => {
                        const selectedDate = new Date(e.target.value);
                        const today = new Date();
                        today.setHours(0, 0, 0, 0); // Reset time to midnight
                        if (selectedDate >= today) {
                            handleChange(e);
                            updateTimes(selectedDate);
                        } else {
                            alert("Oops, it seems like you selected a past date.\nPlease select today or a future date.");
                        }
                    }}
                />
                <label htmlFor="time">Time</label>
                <select id="time" name="time" className='input' value={info.time} onChange={handleChange} required>
                    <option value="" disabled>Select a time</option>
                    <optgroup label="Lunch">
                        {availableTimes.lunch.map((time, index) => (
                            <option key={index} value={time}>{time}</option>
                        ))}
                    </optgroup>
                    <optgroup label="Dinner">
                        {availableTimes.dinner.map((time, index) => (
                            <option key={index} value={time}>{time}</option>
                        ))}
                    </optgroup>
                </select>
            </section>
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" name="occasion" className='input' value={info.occasion} onChange={handleChange}>
                <option value="">None</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
                <option value="Engagement">Engagement</option>
                <option value="Other">Other</option>
            </select>
            <label htmlFor="guests">Number of Guests</label>
            <input type="number" id="guests" name="guests" min="1" max="20" value={info.guests} onChange={handleChange} placeholder='size of your party' className='input' required />
            <button type="submit" className='btn' disabled={!finished} onClick={clickHandler}>Reserve</button>
        </form>
    );
};

const Reservations = () => {
    const initializeTimes = () => {
        return ({
            lunch: ['11:00', '12:00', '13:00'],
            dinner: ['17:00', '18:00', '19:00', '20:00']
        })
    };
    const initailArg = {};
    const [availableTimes, dispatch] = useReducer(reducer, initailArg, initializeTimes);

    const updateTimes = (selectedDate) => {
        const dayOfWeek = selectedDate.getDay();
        const isWeekend = dayOfWeek === 0 || dayOfWeek === 6; // Sunday or Saturday
        dispatch({ type: isWeekend });
    };

    return (
        <main className="reservations">
            <h1>Reservations</h1>
            <BookingForm availableTimes={availableTimes} updateTimes={updateTimes} />
        </main>
    );
}

export default Reservations;