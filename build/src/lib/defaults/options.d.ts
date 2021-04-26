export declare const options: {
    customComponents: never[];
    customScripts: never[];
    customStyles: never[];
    customFunctions: {};
    layers: {
        order: number;
        name: string;
        type: string;
    }[];
    querySelector: string;
    settings: {};
    application: {
        state: {
            name: string;
            version: string;
        };
    };
    vxaState: {
        views: {};
        viewdata: {};
        ui: {};
        user: {};
    };
    templates: {
        loading: {
            "/:catchall*": {
                jsonx: {
                    component: string;
                    children: string;
                };
            };
        };
        root: {
            __error_404: {
                jsonx: {
                    component: string;
                    children: ({
                        component: string;
                        children: string;
                        thisprops?: undefined;
                    } | {
                        component: string;
                        thisprops: {
                            _children: string[];
                        };
                        children?: undefined;
                    })[];
                };
                pageData: {
                    tagName: string;
                    attributes: {};
                    innerHTML: string;
                }[];
            };
            __error_500: {
                jsonx: {
                    component: string;
                    children: ({
                        component: string;
                        children: string;
                        props?: undefined;
                    } | {
                        component: string;
                        props: {
                            style: {
                                padding: string;
                                margin: string;
                                border: string;
                            };
                        };
                        children: {
                            component: string;
                            resourceprops: {
                                _children: string[];
                            };
                        }[];
                    })[];
                };
                pageData: {
                    tagName: string;
                    attributes: {};
                    innerHTML: string;
                }[];
            };
            "/about-un-auth-basic": {
                jsonx: {
                    component: string;
                    children: ({
                        component: string;
                        children: string;
                        resourceprops?: undefined;
                        __spreadComponent?: undefined;
                    } | {
                        component: string;
                        children: {
                            component: string;
                            children: {
                                component: string;
                                props: {
                                    to: string;
                                };
                                children: string;
                            }[];
                        }[];
                        resourceprops?: undefined;
                        __spreadComponent?: undefined;
                    } | {
                        component: string;
                        resourceprops: {
                            __spread: string[];
                        };
                        __spreadComponent: {
                            component: string;
                            thisprops: {
                                _children: string[];
                            };
                        };
                        children?: undefined;
                    })[];
                };
                resources: {
                    album: string;
                    photos: string;
                };
                pageData: ({
                    tagName: string;
                    attributes: {
                        name?: undefined;
                        content?: undefined;
                    };
                    innerHTML: string;
                } | {
                    tagName: string;
                    attributes: {
                        name: string;
                        content: string;
                    };
                    innerHTML?: undefined;
                })[];
            };
            "/login": {
                jsonx: {
                    component: string;
                    props: {
                        key: number;
                    };
                    children: ({
                        component: string;
                        children: string;
                        props: {
                            key: number;
                            formComponent?: undefined;
                        };
                        __dangerouslyBindEvalProps?: undefined;
                    } | {
                        component: string;
                        props: {
                            formComponent: {
                                component: string;
                                props: {
                                    key: number;
                                };
                                children: ({
                                    component: string;
                                    props: {
                                        key: number;
                                    };
                                    children: ({
                                        component: string;
                                        props: {
                                            style: {
                                                display: string;
                                            };
                                            key?: undefined;
                                            type?: undefined;
                                            name?: undefined;
                                            placeholder?: undefined;
                                        };
                                        children: string;
                                        __dangerouslyEvalProps?: undefined;
                                        thiscontext?: undefined;
                                        __dangerouslyInsertFunctionComponents?: undefined;
                                    } | {
                                        component: string;
                                        props: {
                                            key: number;
                                            type: string;
                                            name: string;
                                            placeholder: string;
                                            style?: undefined;
                                        };
                                        __dangerouslyEvalProps: {
                                            ref: string;
                                        };
                                        children?: undefined;
                                        thiscontext?: undefined;
                                        __dangerouslyInsertFunctionComponents?: undefined;
                                    } | {
                                        component: string;
                                        props: {
                                            key: number;
                                            name: string;
                                            style?: undefined;
                                            type?: undefined;
                                            placeholder?: undefined;
                                        };
                                        thiscontext: {
                                            errors: string[];
                                        };
                                        __dangerouslyInsertFunctionComponents: {
                                            children: {
                                                functionBody: string;
                                                reactComponent: {
                                                    component: string;
                                                    thisprops: {
                                                        _children: string[];
                                                    };
                                                };
                                                options: {
                                                    name: string;
                                                };
                                            };
                                        };
                                        children?: undefined;
                                        __dangerouslyEvalProps?: undefined;
                                    })[];
                                } | {
                                    component: string;
                                    props: {
                                        key: number;
                                    };
                                    children: ({
                                        component: string;
                                        props: {
                                            style: {
                                                display: string;
                                            };
                                            key?: undefined;
                                            type?: undefined;
                                            name?: undefined;
                                            placeholder?: undefined;
                                        };
                                        children: string;
                                        __dangerouslyEvalProps?: undefined;
                                        thiscontext?: undefined;
                                        __dangerouslyInsertFunctionComponents?: undefined;
                                    } | {
                                        component: string;
                                        props: {
                                            key: number;
                                            type: string;
                                            name: string;
                                            placeholder: string;
                                            style?: undefined;
                                        };
                                        __dangerouslyEvalProps: {
                                            ref: string;
                                        };
                                        children?: undefined;
                                        thiscontext?: undefined;
                                        __dangerouslyInsertFunctionComponents?: undefined;
                                    } | {
                                        component: string;
                                        props: {
                                            key: number;
                                            name: string;
                                            style?: undefined;
                                            type?: undefined;
                                            placeholder?: undefined;
                                        };
                                        thiscontext: {
                                            errors: string[];
                                        };
                                        __dangerouslyInsertFunctionComponents: {
                                            children: {
                                                functionBody: string;
                                                reactComponent: {
                                                    component: string;
                                                    props: {
                                                        key: number;
                                                    };
                                                    thisprops: {
                                                        _children: string[];
                                                    };
                                                };
                                                options: {
                                                    name: string;
                                                };
                                            };
                                        };
                                        children?: undefined;
                                        __dangerouslyEvalProps?: undefined;
                                    })[];
                                } | {
                                    component: string;
                                    props: {
                                        key: number;
                                    };
                                    children: {
                                        component: string;
                                        props: {
                                            key: number;
                                            type: string;
                                        };
                                        children: string;
                                    }[];
                                })[];
                            };
                            key?: undefined;
                        };
                        __dangerouslyBindEvalProps: {
                            onSubmit: (this: any, values: any) => void;
                        };
                        children?: undefined;
                    })[];
                };
                pageData: {
                    tagName: string;
                    attributes: {};
                    innerHTML: string;
                }[];
            };
            "/": {
                preRenderFunctions: never[];
                pageData: {
                    tagName: string;
                    attributes: {};
                    innerHTML: string;
                }[];
                jsonx: {
                    component: string;
                    props: {
                        key: string;
                    };
                    children: ({
                        component: string;
                        thiscontext: {
                            _children: string[];
                        };
                        thisstate?: undefined;
                        props?: undefined;
                        children?: undefined;
                    } | {
                        component: string;
                        thiscontext?: undefined;
                        thisstate?: undefined;
                        props?: undefined;
                        children?: undefined;
                    } | {
                        component: string;
                        thisstate: {
                            _children: string[];
                        };
                        thiscontext?: undefined;
                        props?: undefined;
                        children?: undefined;
                    } | {
                        component: string;
                        props: {
                            style: {
                                display: string;
                            };
                        };
                        children: ({
                            component: string;
                            props: {
                                style: {
                                    padding: string;
                                };
                                to?: undefined;
                            };
                            thisstate: {
                                value: string[];
                            };
                            __dangerouslyBindEvalProps: {
                                onChange: string;
                                onClick?: undefined;
                            };
                            children?: undefined;
                        } | {
                            component: string;
                            props: {
                                to: string;
                                style: {
                                    padding: string;
                                };
                            };
                            children: string;
                            thisstate?: undefined;
                            __dangerouslyBindEvalProps?: undefined;
                        } | {
                            component: string;
                            props: {
                                style: {
                                    padding: string;
                                };
                                to?: undefined;
                            };
                            children: string;
                            __dangerouslyBindEvalProps: {
                                onClick: string;
                                onChange?: undefined;
                            };
                            thisstate?: undefined;
                        })[];
                        thiscontext?: undefined;
                        thisstate?: undefined;
                    })[];
                };
            };
        };
        modal: {
            "/modal/hello": {
                jsonx: {
                    component: string;
                    props: {
                        ariaHideApp: boolean;
                    };
                    thisprops: {
                        isOpen: string[];
                    };
                    __dangerouslyBindEvalProps: {
                        onRequestClose: string;
                    };
                    children: {
                        component: string;
                        children: string;
                    }[];
                };
            };
        };
    };
};
