import Image from 'next/image';
import React from 'react'

function EmptyTransaction() {

    return (
            <>
                <div className="items-center justify-center flex flex-col">
                    <Image
                        src="/assets/image16.png"
                        alt="/"
                        width={600}
                        height={600}
                        className="object-cover w-[80%] h-[80%]"
                    />
                    <span className='font-bold'>No Transactions</span>
                </div>

            </>
    );
}

export default EmptyTransaction;
