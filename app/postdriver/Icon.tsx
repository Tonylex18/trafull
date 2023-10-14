import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { TbCurrencyNaira } from "react-icons/tb";
import { GiCarSeat } from "react-icons/gi";
import { BiBus } from "react-icons/bi";
import { BsSignTurnSlightRightFill, BsCarFront } from "react-icons/bs";
import { AiOutlinePlusCircle, AiOutlineInfoCircle } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import { RiUser3Line } from "react-icons/ri";



const LocationOnIcon = () => <CiLocationOn />;

const CurrencyIcon = () => <TbCurrencyNaira />;

const SeatIcon = () => <GiCarSeat />;
const BusIcon = () => <BiBus />;
const RouteIcon = () => <BsSignTurnSlightRightFill />;
const CarIcon = () => <BsCarFront />;

const InfoCircleIcon = () => <AiOutlineInfoCircle />;

const ArrowBackIcon = () => <IoIosArrowBack />;
const PlusCircle = () => <AiOutlinePlusCircle />;

const UserLineIcon = () => <RiUser3Line />;

export {
  LocationOnIcon,
  CurrencyIcon,
  SeatIcon,
  BusIcon,
  RouteIcon,
  CarIcon,
  ArrowBackIcon,
  PlusCircle,
  UserLineIcon,
  InfoCircleIcon
};