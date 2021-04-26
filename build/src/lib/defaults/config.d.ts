export declare const config: {
    componentLibraries: {};
    reactComponents: {};
    querySelector: string;
    settings: {
        name: string;
        version: string;
        addReactToWindow: boolean;
        addReactDOMToWindow: boolean;
        addJSONXToWindow: boolean;
        debug: boolean;
        exposeVXAToWindow: boolean;
        router: string;
        cacheTemplatesOffline: boolean;
        cacheLoggedInUser: boolean;
        cacheUserTimeout: number;
        templatePath: undefined;
        templateFetchOptions: {};
        fetchHeaders: {};
        dynamicTemplatePath: undefined;
        dynamicTemplatePathRequestMethod: string;
        dynamicTemplateFetchOptions: {};
        useBodyLoadedClass: boolean;
        useHTMLLoadedClass: boolean;
        setBodyPathnameID: boolean;
        hasPreloadedTemplates: boolean;
        bodyLoadedClass: string;
        htmlLoadedClass: string;
        uiLoadedClass: string;
        uiLoadingClass: string;
        useWindowRequestQuery: boolean;
        useWebSockets: boolean;
        useWebSocketsAuth: boolean;
        socket_server_options: {};
        socket_disconnect_message: {};
        socket_server: undefined;
        accessTokenProperty: string;
        routes: {
            user_login: string;
            user_login_METHOD: string;
            user_login_mfa: string;
            user_login_mfa_METHOD: string;
            user_profile: string;
            user_profile_METHOD: string;
            login: string;
            login_mfa: string;
            logged_in_homepage: string;
            logged_out_homepage: string;
        };
    };
    Functions: {
        log({ type, data, error, meta }: {
            type: any;
            data: any;
            error: any;
            meta: any;
        }): void;
        debug(input: any): void;
        showLoader({ ui, setUI }: {
            ui: any;
            setUI: any;
        }): void;
        hideLoader({ ui, setUI }: {
            ui: any;
            setUI: any;
        }): void;
        onPageChange(): void;
        onLaunch(): void;
        onShutdown(): void;
        requireAuth: () => Promise<true | undefined>;
        requireMFA: () => Promise<void>;
        loadUser: () => Promise<boolean>;
        getSocketUser({ token, expires, timeout, profile }: {
            token: any;
            expires: any;
            timeout: any;
            profile: any;
        }): {
            email: any;
            username: any;
            jwt_token: any;
            jwt_token_expires: any;
            jwt_token_timeout: any;
            userdata: any;
        };
        loginUser: ({ username, password, remember_me }: {
            username: any;
            password: any;
            remember_me: any;
        }) => Promise<void>;
        getUserProfile: ({ token }: {
            token: any;
        }) => Promise<any>;
        validateMFA: ({ code }: {
            code: any;
        }) => Promise<void>;
        logoutUser(): void;
    };
    layers: {
        order: number;
        name: string;
        system: boolean;
        type: string;
    }[];
};
