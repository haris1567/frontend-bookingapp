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

export interface BookingActioninfo {
    action: string;
    id: number;
}

export interface BookingEditInfo {
    id: number;
    action: string;
    startTime?: Date;
    endTime?: Date;
}