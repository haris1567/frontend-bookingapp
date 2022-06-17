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
