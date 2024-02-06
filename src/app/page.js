import Image from "next/image";
import styles from "./page.module.css";
import BookYourSlots from "./component/bookyourslots";
import FillYourInfo from "./component/fillyourinfo";
import Verification from "./component/verification";
import BooingConfirm from "./component/bookingconfirm";
export default function Home() {
  return (
       <>
    <BookYourSlots></BookYourSlots>
   {/* <Verification></Verification>
  <BooingConfirm></BooingConfirm>
  <FillYourInfo></FillYourInfo> */}
  {/* <div id="myModal" className="modal fade new_modal" role="dialog"> */}
 
  {/* </div> */}
</>
  );
}
