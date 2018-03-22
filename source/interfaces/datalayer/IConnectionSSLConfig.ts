export interface IConnectionSSLConfig {
    RootCertificate?: string;
    Certificate?: string;
    PrivateKey?: string;
    RejectUnauthorized?: boolean;
}
