const packageJson = require("../../../../../../package.json");
const remote = require("electron").remote;
import * as path from "path";
import * as fs from "fs";

export class ExtensionHelper {
    public static getExtensionFolder(): string {
        let eId = this.getExtensionId();
        let eType = this.getExtensionType();
        let userPath = this.getUserSettingsPath();
        let extensionPath = path.join(userPath, "extensions", eType, eId);
        return extensionPath;
    }

    public static getExtensionDefaultsFolder(): string {
        let extensionPath = this.getExtensionFolder();
        let extensionDefaultsPath = path.join(extensionPath, "defaults");
        if (!fs.existsSync(extensionDefaultsPath)) {
            fs.mkdirSync(extensionDefaultsPath);
        }
        return extensionDefaultsPath;
    }

    public static getExtensionSecret(): string {
        let secret = packageJson.teamsql.secret.toString();
        return secret;
    }

    private static getExtensionId(): string {
        let eId = packageJson.teamsql.id.toString();
        return eId;
    }

    private static getExtensionType(): string {
        let type = packageJson.teamsql.type.toString();
        return type;
    }

    private static getUserSettingsPath(): string {
        let userPath = (window as any).__userSettingsPath();
        return userPath;
    }
}
