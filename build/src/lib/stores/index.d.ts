export declare function getGlobalStateHooks(options?: any): Promise<{
    dispatch: (action: any) => any;
    useGlobalState: <StateKey extends string | number | symbol>(stateKey: StateKey) => readonly [any, (u: any) => void];
}>;
