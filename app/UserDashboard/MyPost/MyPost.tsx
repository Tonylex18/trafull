'use client';
import React, { useEffect, useState } from 'react';
import { BiDotsVertical } from 'react-icons/bi';
import { useMediaQuery } from '@react-hook/media-query';
import { tableData } from '@/app/constants/data';
import Number from '@/app/components/DropMenu/TableDropdown';

const Page = () => {
  const [handleModal, setHandleModal] = useState(tableData);
  const btnColor: any = {
    review: 'bg-[#99E918]',
    posted: 'bg-[#FFD700]',
    closed: 'bg-[#FF5631]',
    booked: 'bg-[#08E06C]',
  };
  const toggledropDown = (id: string) => {
    setHandleModal((prevValue) => prevValue.map((obj) => (obj.id === id ? { ...obj, modalOpen: !obj.modalOpen } : { ...obj, modalOpen: false })));
  };

  const isSmallScreen = useMediaQuery('(max-width:480px)');

  const isLastRow = tableData.length - 1;
  const isSecondtoLastRow = tableData.length - 2;

  const array = handleModal?.map((obj, index) => {
    return (
      <tr key={obj.id}>
        <td className="px-6 py-2 whitespace-nowrap">{obj.location}</td>
        <td className="px-6 py-2 whitespace-nowrap leading-5 text-[#61748D]">{obj.type}</td>
        <td className="px-6 py-2 whitespace-nowrap leading-6">{obj.id}</td>
        <td className="px-6 py-2 whitespace-nowrap">
          <button className={`${btnColor[obj.status.toLowerCase()]} opacity-80 rounded-3xl px-5 py-2`}>{obj.status}</button>
        </td>
        <td className="flex justify-end px-6 py-2  whitespace-nowrap relative">
          <BiDotsVertical
            size={17}
            className={`z-10 mr-5 cursor-pointer ${isLastRow === index ? 'lastRow' : ''} ${isSecondtoLastRow === index ? 'SecondtoLastRow' : ''} ${isSmallScreen && isLastRow === index ? 'mobileLastRow' : ''}`}
            onClick={() => toggledropDown(obj.id)}
          />
          {obj.modalOpen && <Number />}
        </td>
      </tr>
    );
  });

  useEffect(() => console.log(handleModal), [handleModal]);
  return (
      <div className="flex flex-col w-full py-10 gap-8 px-4 bg-white rounded-2xl h-[80vh] no-scrollbar">
        <h1 className="px-6 font-semibold text-xl leading-6">My postings</h1>
        <div className="overflow-x-auto no-scrollbar">
          <table className="table-auto w-full text-[#0F0400]">
            <thead className="text-base leading-6 font-bold border-b-2">
              <tr className="">
                <th className="px-6 py-3 text-left  tracking-wider">Location</th>
                <th className="px-6 py-3 text-left  tracking-wider">Type</th>
                <th className="px-6 py-3 text-left tracking-wider">ID</th>
                <th className="px-6 py-3 text-left tracking-wider">Status</th>
                <th className="px-6 py-3 text-left tracking-wider flex justify-end">Menu</th>
              </tr>
            </thead>
            <tbody className="font-bold text-sm leading-5 my-10">{array}</tbody>
          </table>
        </div>
      </div>
  );
};

export default Page;
