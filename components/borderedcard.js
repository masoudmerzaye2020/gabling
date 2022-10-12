import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Borderedcard(props) {
  return (
    <>

          <Link href={props.link}>
            <button className="w-1/2 md:w-1/3 lg:w-1/4 p-6 mx-auto items-center justify-center">
              <div
                key={props.index}
                className="p-4 mx-auto border-2 border-gray-900 rounded-lg hover:bg-[#19242c]"
              >
                <div className="rounded-md justify-center flex border-[1px] hover:border-red-300">
                  <Image
                    className="rounded-lg mx-auto flex justify-center"
                    src={props.src}
                    width="210"
                    height="90"
                    alt={props.title}
                  />
                </div>
                <div className="bg-green-400  w-[70%] mx-auto flex py-2 my-4 rounded-full mx-auto text-center">
                  <p className="mx-auto uppercase">visit site</p>
                </div>
              </div>
            </button>
          </Link>
   
    </>
  );
}
