import { Tab } from "@headlessui/react";
import EdithProfile from "./EdithProfile/page";
import EnableNotification from "./EnableNotification/page";
import AddCardSettings from "./AddCardSettings/page";
import ChangePassword from "./ChangePassword/page";

function classNames(...classes:  (string | undefined)[]) {
    return classes.filter(Boolean).join(" ");
}

export default function Example() {
    return (
        <div className="px-2 sm:px-0">
            <Tab.Group vertical>
                <div className="flex flex-col md:flex-row">
                    <Tab.List className="flex flex-col items-start md:w-[45%] w-full md:py-10 gap-10 bg-white rounded-2xl md:h-[80vh] md:mb-0 mb-5">
                        <div className="d-none heading px-4">
                            <h2 className="font-bold text-xl">Settings</h2>
                        </div>
                        <div className="main w-full">
                            <div className="px-4 flex md:flex-col flex-row md:justify-normal justify-evenly md:py-2 w-full overflow-x-scroll no-scrollbar">
                                <Tab className="md:text-left text-center hover:bg-slate-100 duration-200 leading-none font-bold outline-none border-none px-4 py-4 md:text-lg text-[12px] w-full">
                                    Edit profile
                                </Tab>
                                <Tab className="md:text-left text-center hover:bg-slate-100 duration-200 leading-none font-bold outline-none border-none px-4 py-4 md:text-lg text-[12px] w-full">
                                    Enable notifications
                                </Tab>
                                <Tab className="md:text-left text-center hover:bg-slate-100 duration-200 leading-none font-bold outline-none border-none px-4 py-4 md:text-lg text-[12px] w-full">
                                    Add card
                                </Tab>
                                <Tab className="md:text-left text-center hover:bg-slate-100 duration-200 leading-none font-bold outline-none border-none px-4 py-4 md:text-lg text-[12px] w-full">
                                    Change password
                                </Tab>
                            </div>
                        </div>
                    </Tab.List>
                    <Tab.Panels className="md:ml-5 w-full">
                        <Tab.Panel>
                            <EdithProfile/>
                        </Tab.Panel>
                        <Tab.Panel>
                            <EnableNotification />
                        </Tab.Panel>
                        <Tab.Panel>
                            <AddCardSettings />
                        </Tab.Panel>
                        <Tab.Panel>
                            <ChangePassword />
                        </Tab.Panel>
                    </Tab.Panels>
                </div>
            </Tab.Group>
        </div>
    );
}
