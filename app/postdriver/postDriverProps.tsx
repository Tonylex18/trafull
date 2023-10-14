type InformationProps = {
  title: string;
  subtitle?: string;
  classname: string;
  inputClassName?: string;
  subtitleicon?: React.ReactElement;
  addcircle?: React.ReactElement;
  input?: React.ReactElement;
  inputIcon?: React.ReactElement;
  endElement?: React.ReactNode;
};

const Information = ({
  title,
  subtitle,
  subtitleicon,
  addcircle,
  classname,
  input,
  inputIcon,
  inputClassName,
  endElement,
}: InformationProps) => {
  return (
    <div className="">
      <div className="flex flex-col items-start w-full max-h-full ">
        <div className=" flex justify-between items-center text-[20px]   w-full ">
          <p className=" font-semibold text-[18px]">{title}</p>
          <span>{addcircle}</span>
        </div>
        <span className=" flex items-center justify-around mt-1 mb-2 text-[10px] gap-[3px] ">
          <span>{subtitleicon}</span>
          <p className="font-light ">{subtitle}</p>
        </span>
      </div>
      <div
        className={` relative hover:border hover:border-[#FFD700] flex items-center gap-2 w-full rounded-3xl bg-[#959595] bg-opacity-10 ${classname}`}
      >
        <div className={`flex items-center ml-3 ${inputClassName} `}>
          <span className="">{inputIcon}</span>
          <div className="text-[14px]">{input}</div>
        </div>
        <div className=" max-w-fit">{endElement}</div>
      </div>
    </div>
  );
};

export default Information;
