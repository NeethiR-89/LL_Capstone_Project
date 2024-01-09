import Heading from "../Sections/Reserve Pages/Heading";
import ReservationForm from "../Sections/Reserve Pages/Booking Form";
import { useReducer } from "react";
import { fetchAPI } from "../../Bookings API";
export default function BookingPage() {
  function updateTimes(date) {
    return fetchAPI(date);
  }

  const output = fetchAPI(new Date());

  const [availableTimes, dispatch] = useReducer(updateTimes, output);

  return (
    <>
      <Heading />
      <ReservationForm availableTimes={availableTimes} updateTimes={dispatch} />
    </>
  );
}