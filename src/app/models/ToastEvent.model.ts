import { EventTypes } from './EventTypes.model';

export interface ToastEvent {
  type: EventTypes;
  message: string;
}
