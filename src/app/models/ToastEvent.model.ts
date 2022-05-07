import { EventTypes } from './EventTypes.model';

export interface ToastEvent {
  type: EventTypes;
  title: string;
  message: string;
}
