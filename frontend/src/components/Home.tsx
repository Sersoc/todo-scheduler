import SideBar from "./SideBar";
import "../assets/styles/home.css";
import Calendar from "react-calendar";
import { useState } from "react";
import 'react-calendar/dist/Calendar.css';
import "../assets/styles/calendar.css"
export default function Home() {
  const [date, setDate] = useState(new Date());
  return (
    <div className="home">
      {/* <h2>Home</h2> */}
      <SideBar />
       <h2>선택한 날짜: {date.getDate()}</h2>
      <Calendar onChange={setDate} value={date}/>
    </div>
  );
}
