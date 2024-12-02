export interface Duo {
    leftImageUrl: string;
    separatorImageUrl: string;
    rightImageUrl: string;

    labelLeft?: string;
    labelCenter?: string;
    labelRight?: string;
}

export interface Trio {
    leftImageUrl: string;
    separator1ImageUrl: string;
    centerImageUrl: string;
    separator2ImageUrl: string;
    rightImageUrl: string;

    labelLeft?: string;
    labelCenter?: string;
    labelRight?: string;
}

export enum PairType {
    DUO = "duo",
    TRIO = "trio",
}

export interface Pair {
    type: PairType;
    pair: Duo & Trio;
}