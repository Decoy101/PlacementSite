import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { google } from "googleapis";
import { useEffect } from "react";

function PlacementCalendar() {
  //   const events = [{ title: "Meeting", start: new Date() }];
  const CREDENTIALS = JSON.parse(import.meta.env.VITE_CREDENTIALS!);
  const CALENDAR_ID = import.meta.env.VITE_CALENDAR_ID!;
  const SCOPES = "https://www.googleapis.com/auth/calendar";
  //   const calendar = google.calendar({ version: "v3" });
  //   const auth = new google.auth.JWT({
  //     email: CREDENTIALS.client_email,
  //     key: CREDENTIALS.private_key,
  //     scopes: [SCOPES],
  //   });

  //   const getEvents = async (dateTimeStart: string) => {
  //     try {
  //       const response = await calendar.events.list({
  //         auth: auth,
  //         calendarId: CALENDAR_ID,
  //         timeMin: dateTimeStart,
  //         timeZone: "Asia/Kolkata",
  //       });

  //       const items = response["data"]["items"];
  //       return items;
  //     } catch (error) {
  //       console.log(`Error at getEvents --> ${error}`);
  //       return 0;
  //     }
  //   };

  //   useEffect(() => {
  //     const fetchData = async () => await getEvents("2011-10-05T14:48:00.000Z");
  //     fetchData();
  //   }, []);
  console.log(CREDENTIALS);
  return (
    <>
      <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
    </>
  );
}
export default PlacementCalendar;
