export interface Seat {
 id: string;
 "seat-number": string;
 "seat-status": "available" | "booked" | "sold-out";
 "seat-type": "regular" | "bestseller";
 price: string;
}
export interface Row {
 "row-name": string;
 seats: Array<Seat>;
}

export interface Group {
 "group-name": string;
 rows: Array<Row>;
}
