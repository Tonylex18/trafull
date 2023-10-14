import Image from 'next/image';
import React from 'react'

function EmptyNotification() {

    return (
            <>
                <div className="items-center justify-center flex flex-col">
                    <Image
                        src="/assets/image14.png"
                        alt="/"
                        width={400}
                        height={400}
                        className="object-cover w-[50%] h-[50%]"
                    />
                    <span className='font-bold'>No notification</span>
                </div>

            </>
    );
}

export default EmptyNotification;
