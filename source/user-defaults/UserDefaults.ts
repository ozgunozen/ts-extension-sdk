import { ExtensionHelper } from "../helpers/ExtenstionHelper";
import * as path from "path";
import * as fs from "fs";
const aes256 = require("aes256");

export class UserDefaults {
    public static add(key: string, value: string): void {
        let content = this.readDefaultsFile();
        content[key] = value;
        this.writeDefaultsFile(content);
    }

    public static get(key: string): void {
        let content = this.readDefaultsFile();
        if (content[key]) {
            return content[key];
        } else {
            return null;
        }
    }

    public static remove(key: string): void {
        let content = this.readDefaultsFile();
        if (content[key]) {
            delete content[key];
            this.writeDefaultsFile(content);
        }
    }

    private static readDefaultsFile(): any {
        let filePath = this.getDefaultsFilePath();
        if (fs.existsSync(filePath)) {
            let content = fs.readFileSync(filePath, "utf8");
            let eSecret = ExtensionHelper.getExtensionSecret();
            let cipher = aes256.createCipher(eSecret);
            let value = cipher.decrypt(content);
            return JSON.parse(value);
        } else {
            let emptyDefaults = {};
            this.writeDefaultsFile(emptyDefaults);
            return emptyDefaults;
        }
    }

    private static writeDefaultsFile(defaultsObject: any): void {
        let filePath = this.getDefaultsFilePath();
        let defaultsAsString = JSON.stringify(defaultsObject);
        let eSecret = ExtensionHelper.getExtensionSecret();
        let ciphertext = aes256.encrypt(eSecret, defaultsAsString);
        fs.writeFileSync(filePath, ciphertext);
    }

    private static getDefaultsFilePath(): string {
        let eFolder = ExtensionHelper.getExtensionDefaultsFolder();
        let filePath = path.join(eFolder, "defaults.tmsql");
        return filePath;
    }

}
