declare module moment {
    interface Moment {
        twix(...params: any[]): any;
    }

    interface MomentStatic {
        twix(start: Moment|string, end: Moment|string, options?: any): any;
    }
}

declare module 'twix' {
    var _tmp: moment.MomentStatic;
    export = _tmp;
}