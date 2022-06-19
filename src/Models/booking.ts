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
    date?: Date;
}

export interface BookingEditInfo {
    id: number;
    action: string;
    startTime?: Date;
    endTime?: Date;
}