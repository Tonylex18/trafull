import DestinationModal from "@/app/postTrip/DestinationModal";
import PostTrip from "@/app/postTrip/PostTrip";
import Image from "next/image";
import React, { useState, Fragment } from "react";

function EmptyPost() {
    const [showModal, setShowModal] = useState(false);

    return (
        <Fragment>
            <>
                <div className="items-center justify-center flex flex-col">
                    <Image
                        src="/assets/image13.png"
                        alt="/"
                        width={700}
                        height={700}
                        className="object-cover w-[80%] h-[80%]"
                    />
                    <button
                        onClick={() => setShowModal(true)}
                        className="bg-yellow-300 font-bold px-5 py-2 rounded-full hover:bg-yellow-200 duration-200"
                    >
                        Post a trip
                    </button>
                </div>

                <DestinationModal
                    isVisible={showModal}
                    onClose={() => setShowModal(false)}
                >
                    <PostTrip />
                </DestinationModal>
            </>
        </Fragment>
    );
}

export default EmptyPost;
