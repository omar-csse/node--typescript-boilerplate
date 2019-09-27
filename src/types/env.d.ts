interface IProcessEnv {
    NODE_ENV: 'production' | 'development'
    PORT?: string
    DB_NAME: string
    DB_URI: string
    DB_USER: string
    DB_PASSWORD: string
}

declare global {
    namespace NodeJS {
        interface ProcessEnv extends IProcessEnv { }
    }
}

export default IProcessEnv