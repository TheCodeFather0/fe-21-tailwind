import { IPortfolio } from "@/Types/interface";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const url = "http://localhost:3001/portfolio";

const Portfolio = async () => {
  const { data } = await axios.get(url);
  return (
    <div className="container mt-5 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {data.map(({ title, link, stack, imageUrl }: IPortfolio) => {
          return (
            <div className="border border-stone-900 rounded-lg p-2">
              <Image
                src={imageUrl}
                alt="image"
                width={100}
                height={100}
                className="w-full h-36 md:h-48 object-cover"
              />
              <p className="font-semibold text-lg py-4">{title}</p>

              <div className="pb-4">
                {stack.map((item) => {
                  return (
                    <span className="border border-stone-700 py-1 px-2 mr-2 rounded-lg duration-150 bg-slate-50 hover:bg-stone-800 text-stone-800 hover:text-slate-50 cursor-pointer">
                      {item}
                    </span>
                  );
                })}
              </div>

              <Link href={link}>{link}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
