import FlightBooking from "./components/FlightBooking";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";

export default function Home() {
  return (
    <>
      <div className="w-11/12 mx-auto  bg-white">
        <Navbar></Navbar>
        <div className=" gap-8 sm:flex sm:flex-col md:flex md:flex-row  lg:flex lg:flex-row xl:flex xl:flex-row">
          <div className="sm:w-full md:w-3/4 lg:w-3/4 xl:w-3/4">
            <FlightBooking></FlightBooking>
          </div>
          <div className="  md:w-1/4 lg:w-1/4 xl:w-1/4">
            <SideBar></SideBar>
          </div>
        </div>
      </div>
    </>
  );
}
