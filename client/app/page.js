import FlightBooking from "./components/FlightBooking";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";

export default function Home() {
  return (
    <>
      <div className="w-11/12 mx-auto  ">
        <Navbar></Navbar>
        <div className="flex flex-row gap-8">
          <div className="w-3/4">
            <FlightBooking></FlightBooking>
          </div>
          <div className="w-1/4">
            <SideBar></SideBar>
          </div>
        </div>
      </div>
    </>
  );
}
