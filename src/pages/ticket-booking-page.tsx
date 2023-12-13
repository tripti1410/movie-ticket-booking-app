import { useEffect, useState } from "react";
import { Group, Row, Seat } from "../data/data-types";
interface Props {
 seatArrangementData: Array<Group>;
}

function SeatComponent(props: { seat: Seat }) {
 const [updatedSeat, updateSeat] = useState(props.seat);
 const cls1 = updatedSeat["seat-type"] === "bestseller" ? "bestseller" : "";
 const cls2 = updatedSeat["seat-status"] === "booked" ? "booked" : "";
 const cls3 = updatedSeat["seat-status"] === "sold-out" ? "sold-out" : "";
 const classes = `seat ${cls1} ${cls2} ${cls3}`.trim();

 const updateSeatStatus = () => {
  if (updatedSeat["seat-status"] === "booked") {
   updateSeat({ ...updatedSeat, "seat-status": "available" });
  } else if (updatedSeat["seat-status"] === "available") {
   updateSeat({ ...updatedSeat, "seat-status": "booked" });
  }
 };
 useEffect(
  (updateSeat: Seat) => {
   // API call or dispatch to update the store
  },
  [updateSeat]
 );
 return (
  <button
   disabled={updatedSeat["seat-status"] === "sold-out"}
   onClick={() => updateSeatStatus()}
   className={classes}
  >
   {updatedSeat["seat-number"]}
  </button>
 );
}
function RowComponent(props: { row: Row }) {
 return (
  <div className="row">
   <div>{props.row["row-name"]}</div>

   {props.row.seats.map((seat: Seat) => (
    <SeatComponent seat={seat} key={`seat-${seat.id}`} />
   ))}
  </div>
 );
}
function TicketBookingPage(props: Props) {
 return (
  <div>
   {props.seatArrangementData.map((seatGroup) => (
    <div className="group" key={seatGroup["group-name"]}>
     <h2>{seatGroup["group-name"]}</h2>
     {seatGroup.rows.map((row, index) => (
      <RowComponent row={row} key={`row-${index}`} />
     ))}
    </div>
   ))}
  </div>
 );
}
export default TicketBookingPage;
