
import { Gabarito } from "next/font/google";
import { CiBank, CiCreditCard1, CiFolderOn, CiHome, CiSettings, CiViewList,CiViewTimeline, CiWallet } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { FiPieChart } from "react-icons/fi";
import Graph1 from "@/components/ui/graph1"
import { FaDotCircle } from "react-icons/fa";
const kolkerBrush = Gabarito({
  weight: "400",
  subsets: ["latin"],
});
export default function Home() {
  return (
    <div className="h-screen w-screen bg-[#edf5fa] flex justify-center items-center text-white">
      <div className="w-[90vw] h-[85vh] rounded-3xl bg-[#dfedf0] flex">
        <div className={`w-[6vw] bg-neutral-800 rounded-3xl m-4 ${kolkerBrush.className} flex flex-col items-center`}>
        <h1 className=" mt-5 text-2xl font-bold tracking-wide">DyC</h1>
           <CiHome className="text-3xl mt-12 hover:text-blue-500 "/>
           <CiMail className="text-3xl mt-5 hover:text-blue-500  "/>
           <CiShoppingCart className="text-3xl mt-5  hover:text-blue-500 "/>
           <CiBank className="text-3xl mt-5  hover:text-blue-500 "/>
           <CiViewList className="text-3xl mt-5  hover:text-blue-500 "/>
           <CiFolderOn className="text-3xl mt-5  hover:text-blue-500 "/>
           <CiViewTimeline className="text-3xl mt-5  hover:text-blue-500 "/>
           <CiSettings className="text-3xl mt-12  hover:text-blue-500 "/>
        </div>

        <div className="w-[84vw] flex flex-col">
          <div className="h-[10vh]">
            <h2 className={` pt-4 pl-2 text-3xl text-black ${kolkerBrush.className}`}>Good Morning, Akhil!</h2>
          </div>
          <div className="flex">
          <div className="h-[75vh] flex flex-col">
              <div className={`h-[30vh] flex gap-4 ${kolkerBrush.className}`}>
                <div className="h-[27vh] w-[12vw] pt-3 flex rounded-3xl bg-[#d1e1e8] p-4 flex-col ">
                    <CiWallet className="text-4xl text-black" />
                    <h3 className="text-black font-bold text-3xl mt-3">₹50000</h3>
                    <h4 className=" text-black font-thin text-lg mt-3 font-mono">Your Bank Balance</h4>
                </div>
                <div className="h-[27vh] w-[12vw] pt-3 flex rounded-3xl bg-[#d1e1e8] p-4 flex-col ">
                    <FiPieChart className="text-4xl text-black" />
                    <h3 className="text-black font-bold text-3xl mt-3">12</h3>
                    <h4 className=" text-black font-thin text-lg mt-3 font-mono">Uncategorised Transaction</h4>
                </div>
                <div className="h-[27vh] w-[12vw] pt-3 flex rounded-3xl bg-[#d1e1e8] p-4 flex-col ">
                    <CiWallet className="text-4xl text-black" />
                    <h3 className="text-black font-bold text-3xl mt-3">₹50000</h3>
                    <h4 className=" text-black font-thin text-lg mt-3 font-mono">Your Bank Balance</h4>
                </div>
                <div className="h-[27vh] w-[12vw] pt-3 flex rounded-3xl bg-[#d1e1e8] p-4 flex-col ">
                    <CiCreditCard1 className="text-4xl text-black" />
                    <h3 className="text-black font-bold text-3xl mt-3">₹10000</h3>
                    <h4 className=" text-black font-thin text-lg mt-3 font-mono">Todays Spendings</h4>
                </div>
                
              </div>
              <div className={`h-[43vh] flex gap-4 pt-4 ${kolkerBrush.className}`}>
                <div className="w-[15vw]  flex flex-col justify-between">
                    <div className=" bg-[#d1e1e8] h-[19vh] rounded-3xl flex flex-col p-4">
                        <h3 className="text-black text-2xl">New clients</h3>
                        <h2 className="text-black text-4xl mt-4">43</h2>
                    </div>
                    <div className=" bg-[#d1e1e8] h-[19vh] rounded-3xl flex flex-col p-4">
                        <h3 className="text-black text-2xl">Pending order</h3>
                        <h2 className="text-black text-4xl mt-4">3</h2>
                    </div>

                </div>
                <div className="w-[35vw]  bg-[#d1e1e8] rounded-3xl overflow-hidden">
                    <Graph1/>
                </div>
              </div>
          </div>
          <div className="flex  w-[27vw] rounded-3xl h-[73vh] ml-6 flex-col justify-between pb-3">
            <div className="h-[40vh] bg-neutral-950 rounded-3xl text-white p-4 gap-3">
                <h3 className="text-3xl font-bold pb-5">Formation Status</h3>
                <h4 className="text-2xl font-thin pb-5">In Progress</h4>
              <div className="relative pt-6 w-64 h-5 bg-neutral-400 rounded-full">
             <div className="absolute left-0 top-0 h-full bg-[#d1e1e8] rounded-full transition-all duration-500"
          style={{ width: "80%" }}
        ></div>
      </div>
      <div className="flex items-center w-full h-[27vh] justify-center">
      <button className="bg-[#d1e1e8] text-black p-4 rounded-2xl w-1xl">Check</button>
      </div>
            </div>
            <div className="bg-black h-[15vh] w-full rounded-3xl p-4 flex items-center">
            <FaDotCircle className="text-green-500 text-2xl"/>
            <h3 className="text-lg text-white">Business meeting tommorow at 9.30 am</h3>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
