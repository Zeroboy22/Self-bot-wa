import { EmojiImage } from "./Parser";
declare class Emoji {
    emoji?: string;
    unicode?: string;
    name?: string;
    description?: string;
    images: EmojiImage[];
    shortCodes: string[];
    constructor(data: any);
    _patch(data: any): void;
    get encodeURI(): string;
    get Apple(): EmojiImage;
    get Google(): EmojiImage;
    get Samsung(): EmojiImage;
    get Microsoft(): EmojiImage;
    get WhatsApp(): EmojiImage;
    get Twitter(): EmojiImage;
    get Facebook(): EmojiImage;
    get JoyPixels(): EmojiImage;
    get OpenMoji(): EmojiImage;
    get Emojidex(): EmojiImage;
    get Messenger(): EmojiImage;
    get LG(): EmojiImage;
    get HTC(): EmojiImage;
    get Mozilla(): EmojiImage;
    get SoftBank(): EmojiImage;
    get Docomo(): EmojiImage;
    get auByKDDI(): EmojiImage;
    toArray(): EmojiImage[];
    toString(): string;
    toJSON(): {
        emoji: string;
        name: string;
        unicode: string;
        description: string;
        images: EmojiImage[];
        shortCodes: string[];
    };
}
export { Emoji };