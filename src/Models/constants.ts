import { RGB } from "@bjornlu/colorblind/dist/types";

export const TOKEN_PROPERTIES = {
    idToken: 'id_Token',
    exiresIn: 'expires_In'
}

export const BOOKING_ACTION = {
    editAction: 'edit',
    deleteAction: 'delete',
    createAction: 'create'
}

export const LAB_INFO = {
    ccna: 1
}

export const LABNAMES = {
    ccna: 'CCNA LAB'
}

export const DATE_TIME_FORMAT = "yyyy-MM-dd'T'HH:mm:ss";
export const TIME_FORMAT = "HH:mm";
export const DATE_FORMAT = "yyyy-MM-dd";

export const COLORMODES = {
    ORIGINAL_COLOR_MODE: 'original',
    PROTANOPIA: 'protanopia',
    DEUTERANOPIA: 'deuteranopia',
    TRITANOPIA: 'tritanopia',
    ACHROMATOPSIA: 'achromatopsia',
}

export const OPTIONS = {
    ZOOM: 'zoom'
}

export function componentToHex(c: any) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

export function rgbToHex(r: any, g: any, b: any) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

export function hexToRgb(hex: string) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

export function hexToRgbString(hex: string): string {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ?
        `rgb(${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)})`
        : '';
}