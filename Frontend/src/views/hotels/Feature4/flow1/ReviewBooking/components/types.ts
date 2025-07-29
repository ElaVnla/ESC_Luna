import { HotelData } from '@/models/HotelDetailsApi'
import { RoomData } from '@/models/RoomDetailsApi'
import { type Control } from 'react-hook-form'

export type StepProps = {
  control: any;
};

export type HotelRoomProps = {
  hotelData: any;
  roomData: any;  
};

export type hotelProps = {
  hotelData: any;
}

export type roomProps = {
  roomData: any;
}

export type Step1Props = StepProps & HotelRoomProps;