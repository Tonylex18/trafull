import React from "react";

function TransactionLists() {
    return (
        <>
            <div className="flex flex-col w-full pt-10 px-4 bg-white rounded-2xl h-[80vh]">
                <div className="header">
                    <h2 className="text-xl font-bold">Transactions</h2>
                </div>
                <div className="overflow-x-auto">
                    <table className="table-auto w-full text-[#0F0400] ">
                        <thead className="text-base leading-6 font-bold">
                            <tr className="border-b">
                                <th className="px-6 py-3 text-left  tracking-wider">
                                    Location
                                </th>
                                <th className="px-6 py-3 text-left  tracking-wider">
                                    Type
                                </th>
                                <th className="px-6 py-3 text-left tracking-wider">
                                    ID
                                </th>
                                <th className="px-6 py-3 text-left tracking-wider">
                                    Amount Paid
                                </th>
                                <th className="px-6 py-3 text-left tracking-wider">
                                    Status
                                </th>
                            </tr>
                        </thead>
                        <tbody className="font-bold text-sm leading-5 my-10">
                            <tr className="">
                                <td className="px-6 py-2 whitespace-nowrap">
                                    Abuja-Lagos
                                </td>
                                <td className="px-6 py-2 whitespace-nowrap leading-5 text-[#61748D]">
                                    Sending package
                                </td>
                                <td className="px-6 py-2 whitespace-nowrap leading-6">
                                    WEDJ786
                                </td>
                                <td className="px-6 py-2 whitespace-nowrap leading-6 text-[#61748D]">
                                    N24,400
                                </td>
                                <td className="px-6 py-2 whitespace-nowrap">
                                    <button className="bg-[#08E06C] opacity-80 rounded-3xl px-5 py-2">
                                        Successfull
                                    </button>
                                </td>
                            </tr>
                            <tr className="">
                                <td className="px-6 py-2 whitespace-nowrap">
                                    Minna - Abuja
                                </td>
                                <td className="px-6 py-2 whitespace-nowrap text-[#61748D] leading-5">
                                    Travelling
                                </td>
                                <td className="px-6 py-2 whitespace-nowrap leading-6">
                                    WEDJ786
                                </td>
                                <td className="px-6 py-2 whitespace-nowrap leading-6 text-[#61748D]">
                                    N24,400
                                </td>
                                <td className="px-6 py-2 whitespace-nowrap ">
                                    <button className="bg-[#FFD700] opacity-80 rounded-3xl px-5 py-2">
                                        Ongoing
                                    </button>
                                </td>
                            </tr>
                            <tr className="">
                                <td className="px-6 py-2 whitespace-nowrap">
                                    Benue - Kogi
                                </td>
                                <td className="px-6 py-2 whitespace-nowrap text-[#61748D] leading-5">
                                    Picking packages
                                </td>
                                <td className="px-6 py-2 whitespace-nowrap leading-6">
                                    WEDJ786
                                </td>
                                <td className="px-6 py-2 whitespace-nowrap leading-6 text-[#61748D]">
                                    N24,400
                                </td>
                                <td className="px-6 py-2 whitespace-nowrap">
                                    <button className="bg-[#FFD700]  opacity-80 rounded-3xl px-5 py-2">
                                        Ongoing
                                    </button>
                                </td>
                            </tr>
                            <tr className="">
                                <td className="px-6 py-2 whitespace-nowrap">
                                    Kwara - Lagos
                                </td>
                                <td className="px-6 py-2 whitespace-nowrap text-[#61748D] leading-5">
                                    Sending package
                                </td>
                                <td className="px-6 py-2 whitespace-nowrap leading-6">
                                    WEDJ786
                                </td>
                                <td className="px-6 py-2 whitespace-nowrap leading-6 text-[#61748D]">
                                    N24,400
                                </td>
                                <td className="px-6 py-2 whitespace-nowrap">
                                    <button className="bg-[#08E06C] opacity-80 rounded-3xl px-5 py-2">
                                        Successfull
                                    </button>
                                </td>
                            </tr>
                            <tr className="">
                                <td className="px-6 py-2  whitespace-nowrap">
                                    Kwara - Lagos
                                </td>
                                <td className="px-6 py-2 whitespace-nowrap text-[#61748D] leading-5">
                                    Travelling
                                </td>
                                <td className="px-6 py-2 whitespace-nowrap leading-6">
                                    WEDJ786
                                </td>
                                <td className="px-6 py-2 whitespace-nowrap leading-6 text-[#61748D]">
                                    N24,400
                                </td>
                                <td className="px-6 py-2 whitespace-nowrap">
                                    <button className="bg-[#08E06C] opacity-80 rounded-3xl px-5 py-2">
                                        Successfull
                                    </button>
                                </td>
                            </tr>
                            <tr className="">
                                <td className="px-6 py-2  whitespace-nowrap">
                                    Osun - Ekiti
                                </td>
                                <td className="px-6 py-2 whitespace-nowrap text-[#61748D] leading-5">
                                    Picking pacakges
                                </td>
                                <td className="px-6 py-2 whitespace-nowrap leading-6">
                                    WEDJ786
                                </td>
                                <td className="px-6 py-2 whitespace-nowrap leading-6 text-[#61748D]">
                                    N24,400
                                </td>
                                <td className="px-6 py-2 whitespace-nowrap">
                                    <button className="bg-[#FF5631] opacity-80 rounded-3xl px-5 py-2">
                                        Cancelled
                                    </button>
                                </td>
                            </tr>
                            <tr className="">
                                <td className="px-6 py-2  whitespace-nowrap">
                                    Ekiti - Ibadan
                                </td>
                                <td className="px-6 py-2 whitespace-nowrap text-[#61748D] leading-5">
                                    Travelling
                                </td>
                                <td className="px-6 py-2 whitespace-nowrap leading-6">
                                    WEDJ786
                                </td>
                                <td className="px-6 py-2 whitespace-nowrap leading-6 text-[#61748D]">
                                    N24,400
                                </td>
                                <td className="px-6 py-2 whitespace-nowrap">
                                    <button className="bg-[#FF5631] opacity-80 rounded-3xl px-5 py-2">
                                        Cancelled
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default TransactionLists;
