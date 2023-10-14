import Image from 'next/image';
import React from 'react'

function EmptyMessage() {

    return (
            <>
                <div className="items-center justify-center flex flex-col">
                    <Image
                        src="/assets/image15.png"
                        alt="/"
                        width={400}
                        height={400}
                        className="object-cover w-[60%] h-[60%]"
                    />
                    <span className='font-bold'>No Messages</span>
                </div>

            </>
    );
}

export default EmptyMessage;
