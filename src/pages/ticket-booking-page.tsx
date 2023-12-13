import { Group, Row, Seat } from "../data/data-types";
interface Props {
 seatArrangementData: Array<Group>;
}

function SeatComponent(props: { seat: Seat }) {
 const cls = props.seat["seat-type"] === "bestseller" ? "bestseller" : "";
 return (
  <button
   onClick={(seat) => console.log(seat, "seat")}
   className={`seat ${cls}`}
  >
   {props.seat["seat-number"]}
  </button>
 );
}
function RowComponent(props: { row: Row }) {
 return (
  <div className="row">
   <div>{props.row["row-name"]}</div>

   {props.row.seats.map((seat: Seat) => (
    <SeatComponent seat={seat} />
   ))}
  </div>
 );
}
function TicketBookingPage(props: Props) {
 return (
  <div>
   {props.seatArrangementData.map((seatGroup) => (
    <div className="group">
     <h2>{seatGroup["group-name"]}</h2>
     {seatGroup.rows.map((row) => (
      <RowComponent row={row} />
     ))}
    </div>
   ))}
  </div>
 );
}
export default TicketBookingPage;
