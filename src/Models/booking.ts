export interface Booking {
    id: number;
    startTime: Date;
    labId: number;
    endTime: Date;
    title: string;
    userId: string;
    uid: string;
    dateAdded: Date;
}

export interface BookingActionInfo {
    action: string;
    id: number;
    labName?: string;
    date?: Date;
    title?: string;
}

export interface BookingEditInfo {
    id: number;
    action: string;
    startTime?: Date;
    endTime?: Date;
}

export interface BookingEvent {
    start: Date;
    end: Date;
    title: string;
    email: string;
    labId: number;
    uid: string;
    action?: string;
}