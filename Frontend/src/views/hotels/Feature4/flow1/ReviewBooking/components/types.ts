import { HotelData } from '@/models/HotelDetailsApi'
import { RoomData, Rooms } from '@/models/RoomDetailsApi'
import { type Control } from 'react-hook-form'

export type StepProps = {
  control: any;
};

export type HotelRoomProps = {
  hotelData: HotelData;
  roomData: Rooms;  
};

export type hotelProps = {
  hotelData: HotelData;
}

export type roomProps = {
  roomData: Rooms;
}

export type hotelParams = {
  guests: any;
  hotelParams: hotelParams
}

export type Step1Props = StepProps & HotelRoomProps & hotelParams;