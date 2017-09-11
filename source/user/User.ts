const ipcRenderer = require("electron").ipcRenderer;
const _uuid = require("uuid/v4");
export class User {
    public id: number;
    public email: string;

    public static getUser(callback: (user: User) => void): void {
        let id = _uuid();
        let responseMessageId = "extension-response-user-" + id;
        let requestMessageId = "extension-request-user";
        ipcRenderer.once(responseMessageId, function (event, response) {
            let userEntity = new User();
            userEntity.email = response.email;
            userEntity.id = response.id;
            callback(userEntity);
        });

        ipcRenderer.send(requestMessageId, id);

    }
}
