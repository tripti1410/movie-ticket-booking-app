import "./App.css";
import seatArrangementData from "../src/data/data";
import TicketBookingPage from "./pages/ticket-booking-page";

function App() {
 return (
  <>
   <TicketBookingPage seatArrangementData={seatArrangementData} />
  </>
 );
}

export default App;
