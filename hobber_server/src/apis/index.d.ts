import { Context } from "@ke/hobber-core/index"
/// <reference types="node" />
import { HobberModel } from "@ke/hobber-core/interface/hobber_model/hobber_model";
export declare interface HobberProcess extends NodeJS.Process {
    emit(event: string, message: any, handler: any): any;
    /**
     * Can also be a tty.WriteStream, not typed due to limitation.s
     */
    stdout: NodeJS.WriteStream;
    /**
     * Can also be a tty.WriteStream, not typed due to limitation.s
     */
    stderr: NodeJS.WriteStream;
    stdin: NodeJS.ReadStream;
    openStdin(): NodeJS.Socket;
    argv: string[];
    argv0: string;
    execArgv: string[];
    execPath: string;
    abort(): void;
    chdir(directory: string): void;
    cwd(): string;
    debugPort: number;
    emitWarning(warning: string | Error, name?: string, ctor?: Function): void;
    env: NodeJS.ProcessEnv;
    exit(code?: number): never;
    exitCode?: number;
    getgid(): number;
    setgid(id: number | string): void;
    getuid(): number;
    setuid(id: number | string): void;
    geteuid(): number;
    seteuid(id: number | string): void;
    getegid(): number;
    setegid(id: number | string): void;
    getgroups(): number[];
    setgroups(groups: Array<string | number>): void;
    setUncaughtExceptionCaptureCallback(cb: ((err: Error) => void) | null): void;
    hasUncaughtExceptionCaptureCallback(): boolean;
    version: string;
    versions: NodeJS.ProcessVersions;
    config: {
        target_defaults: {
            cflags: any[];
            default_configuration: string;
            defines: string[];
            include_dirs: string[];
            libraries: string[];
        };
        variables: {
            clang: number;
            host_arch: string;
            node_install_npm: boolean;
            node_install_waf: boolean;
            node_prefix: string;
            node_shared_openssl: boolean;
            node_shared_v8: boolean;
            node_shared_zlib: boolean;
            node_use_dtrace: boolean;
            node_use_etw: boolean;
            node_use_openssl: boolean;
            target_arch: string;
            v8_no_strict_aliasing: number;
            v8_use_snapshot: boolean;
            visibility: string;
        };
    };
    kill(pid: number, signal?: string | number): void;
    pid: number;
    ppid: number;
    title: string;
    arch: string;
    platform: NodeJS.Platform;
    mainModule?: NodeModule;
    memoryUsage(): NodeJS.MemoryUsage;
    cpuUsage(previousValue?: NodeJS.CpuUsage): NodeJS.CpuUsage;
    nextTick(callback: Function, ...args: any[]): void;
    release: NodeJS.ProcessRelease;
    features: {
        inspector: boolean;
        debug: boolean;
        uv: boolean;
        ipv6: boolean;
        tls_alpn: boolean;
        tls_sni: boolean;
        tls_ocsp: boolean;
        tls: boolean;
    };
    /**
     * Can only be set if not in worker thread.
     */
    umask(mask?: number): number;
    uptime(): number;
    hrtime: NodeJS.HRTime;
    domain: NodeJS.Domain;
    send?(message: any, sendHandle?: any, options?: {
        swallowErrors?: boolean;
    }, callback?: (error: Error | null) => void): boolean;
    send?(message: any): boolean;
    disconnect(): void;
    connected: boolean;
    /**
     * The `process.allowedNodeEnvironmentFlags` property is a special,
     * read-only `Set` of flags allowable within the [`NODE_OPTIONS`][]
     * environment variable.
     */
    allowedNodeEnvironmentFlags: ReadonlySet<string>;
    /**
     * Only available with `--experimental-report`
     */
    report?: NodeJS.ProcessReport;
    resourceUsage(): NodeJS.ResourceUsage;
    /**
     * EventEmitter
     *   1. beforeExit
     *   2. disconnect
     *   3. exit
     *   4. message
     *   5. rejectionHandled
     *   6. uncaughtException
     *   7. unhandledRejection
     *   8. warning
     *   9. message
     *  10. <All OS Signals>
     *  11. newListener/removeListener inherited from EventEmitter
     */
    addListener(event: "beforeExit", listener: NodeJS.BeforeExitListener): this;
    addListener(event: "disconnect", listener: NodeJS.DisconnectListener): this;
    addListener(event: "exit", listener: NodeJS.ExitListener): this;
    addListener(event: "rejectionHandled", listener: NodeJS.RejectionHandledListener): this;
    addListener(event: "uncaughtException", listener: NodeJS.UncaughtExceptionListener): this;
    addListener(event: "unhandledRejection", listener: NodeJS.UnhandledRejectionListener): this;
    addListener(event: "warning", listener: NodeJS.WarningListener): this;
    addListener(event: "message", listener: NodeJS.MessageListener): this;
    addListener(event: NodeJS.Signals, listener: NodeJS.SignalsListener): this;
    addListener(event: "newListener", listener: NodeJS.NewListenerListener): this;
    addListener(event: "removeListener", listener: NodeJS.RemoveListenerListener): this;
    addListener(event: "multipleResolves", listener: NodeJS.MultipleResolveListener): this;
    emit(event: "beforeExit", code: number): boolean;
    emit(event: "disconnect"): boolean;
    emit(event: "exit", code: number): boolean;
    emit(event: "rejectionHandled", promise: Promise<any>): boolean;
    emit(event: "uncaughtException", error: Error): boolean;
    emit(event: "unhandledRejection", reason: any, promise: Promise<any>): boolean;
    emit(event: "warning", warning: Error): boolean;
    emit(event: "message", message: any, sendHandle: any): this;
    emit(event: NodeJS.Signals, signal: NodeJS.Signals): boolean;
    emit(event: "newListener", eventName: string | symbol, listener: (...args: any[]) => void): this;
    emit(event: "removeListener", eventName: string, listener: (...args: any[]) => void): this;
    emit(event: "multipleResolves", listener: NodeJS.MultipleResolveListener): this;
    emit(event: string | Symbol, message: any): this;
    on(event: "beforeExit", listener: NodeJS.BeforeExitListener): this;
    on(event: "disconnect", listener: NodeJS.DisconnectListener): this;
    on(event: "exit", listener: NodeJS.ExitListener): this;
    on(event: "rejectionHandled", listener: NodeJS.RejectionHandledListener): this;
    on(event: "uncaughtException", listener: NodeJS.UncaughtExceptionListener): this;
    on(event: "unhandledRejection", listener: NodeJS.UnhandledRejectionListener): this;
    on(event: "warning", listener: NodeJS.WarningListener): this;
    on(event: "message", listener: NodeJS.MessageListener): this;
    on(event: NodeJS.Signals, listener: NodeJS.SignalsListener): this;
    on(event: "newListener", listener: NodeJS.NewListenerListener): this;
    on(event: "removeListener", listener: NodeJS.RemoveListenerListener): this;
    on(event: "multipleResolves", listener: NodeJS.MultipleResolveListener): this;
    on(event: string | Symbol, listener: NodeJS.MessageListener): this;
    once(event: "beforeExit", listener: NodeJS.BeforeExitListener): this;
    once(event: "disconnect", listener: NodeJS.DisconnectListener): this;
    once(event: "exit", listener: NodeJS.ExitListener): this;
    once(event: "rejectionHandled", listener: NodeJS.RejectionHandledListener): this;
    once(event: "uncaughtException", listener: NodeJS.UncaughtExceptionListener): this;
    once(event: "unhandledRejection", listener: NodeJS.UnhandledRejectionListener): this;
    once(event: "warning", listener: NodeJS.WarningListener): this;
    once(event: "message", listener: NodeJS.MessageListener): this;
    once(event: NodeJS.Signals, listener: NodeJS.SignalsListener): this;
    once(event: "newListener", listener: NodeJS.NewListenerListener): this;
    once(event: "removeListener", listener: NodeJS.RemoveListenerListener): this;
    once(event: "multipleResolves", listener: NodeJS.MultipleResolveListener): this;
    prependListener(event: "beforeExit", listener: NodeJS.BeforeExitListener): this;
    prependListener(event: "disconnect", listener: NodeJS.DisconnectListener): this;
    prependListener(event: "exit", listener: NodeJS.ExitListener): this;
    prependListener(event: "rejectionHandled", listener: NodeJS.RejectionHandledListener): this;
    prependListener(event: "uncaughtException", listener: NodeJS.UncaughtExceptionListener): this;
    prependListener(event: "unhandledRejection", listener: NodeJS.UnhandledRejectionListener): this;
    prependListener(event: "warning", listener: NodeJS.WarningListener): this;
    prependListener(event: "message", listener: NodeJS.MessageListener): this;
    prependListener(event: NodeJS.Signals, listener: NodeJS.SignalsListener): this;
    prependListener(event: "newListener", listener: NodeJS.NewListenerListener): this;
    prependListener(event: "removeListener", listener: NodeJS.RemoveListenerListener): this;
    prependListener(event: "multipleResolves", listener: NodeJS.MultipleResolveListener): this;
    prependOnceListener(event: "beforeExit", listener: NodeJS.BeforeExitListener): this;
    prependOnceListener(event: "disconnect", listener: NodeJS.DisconnectListener): this;
    prependOnceListener(event: "exit", listener: NodeJS.ExitListener): this;
    prependOnceListener(event: "rejectionHandled", listener: NodeJS.RejectionHandledListener): this;
    prependOnceListener(event: "uncaughtException", listener: NodeJS.UncaughtExceptionListener): this;
    prependOnceListener(event: "unhandledRejection", listener: NodeJS.UnhandledRejectionListener): this;
    prependOnceListener(event: "warning", listener: NodeJS.WarningListener): this;
    prependOnceListener(event: "message", listener: NodeJS.MessageListener): this;
    prependOnceListener(event: NodeJS.Signals, listener: NodeJS.SignalsListener): this;
    prependOnceListener(event: "newListener", listener: NodeJS.NewListenerListener): this;
    prependOnceListener(event: "removeListener", listener: NodeJS.RemoveListenerListener): this;
    prependOnceListener(event: "multipleResolves", listener: NodeJS.MultipleResolveListener): this;
    listeners(event: "beforeExit"): NodeJS.BeforeExitListener[];
    listeners(event: "disconnect"): NodeJS.DisconnectListener[];
    listeners(event: "exit"): NodeJS.ExitListener[];
    listeners(event: "rejectionHandled"): NodeJS.RejectionHandledListener[];
    listeners(event: "uncaughtException"): NodeJS.UncaughtExceptionListener[];
    listeners(event: "unhandledRejection"): NodeJS.UnhandledRejectionListener[];
    listeners(event: "warning"): NodeJS.WarningListener[];
    listeners(event: "message"): NodeJS.MessageListener[];
    listeners(event: NodeJS.Signals): NodeJS.SignalsListener[];
    listeners(event: "newListener"): NodeJS.NewListenerListener[];
    listeners(event: "removeListener"): NodeJS.RemoveListenerListener[];
    listeners(event: "multipleResolves"): NodeJS.MultipleResolveListener[];
}
export interface HobberGlobal extends NodeJS.Global {
    DOMAIN: string;
    Model: HobberModel;
    API: API;
    worker_pids: number[];
    Array: typeof Array;
    ArrayBuffer: typeof ArrayBuffer;
    Boolean: typeof Boolean;
    Buffer: typeof Buffer;
    DataView: typeof DataView;
    Date: typeof Date;
    Error: typeof Error;
    EvalError: typeof EvalError;
    Float32Array: typeof Float32Array;
    Float64Array: typeof Float64Array;
    Function: typeof Function;
    GLOBAL: NodeJS.Global;
    Infinity: typeof Infinity;
    Int16Array: typeof Int16Array;
    Int32Array: typeof Int32Array;
    Int8Array: typeof Int8Array;
    Intl: typeof Intl;
    JSON: typeof JSON;
    Map: MapConstructor;
    Math: typeof Math;
    NaN: typeof NaN;
    Number: typeof Number;
    Object: typeof Object;
    Promise: Function;
    RangeError: typeof RangeError;
    ReferenceError: typeof ReferenceError;
    RegExp: typeof RegExp;
    Set: SetConstructor;
    String: typeof String;
    Symbol: Function;
    SyntaxError: typeof SyntaxError;
    TypeError: typeof TypeError;
    URIError: typeof URIError;
    Uint16Array: typeof Uint16Array;
    Uint32Array: typeof Uint32Array;
    Uint8Array: typeof Uint8Array;
    Uint8ClampedArray: Function;
    WeakMap: WeakMapConstructor;
    WeakSet: WeakSetConstructor;
    clearImmediate: (immediateId: NodeJS.Immediate) => void;
    clearInterval: (intervalId: NodeJS.Timeout) => void;
    clearTimeout: (timeoutId: NodeJS.Timeout) => void;
    console: typeof console;
    decodeURI: typeof decodeURI;
    decodeURIComponent: typeof decodeURIComponent;
    encodeURI: typeof encodeURI;
    encodeURIComponent: typeof encodeURIComponent;
    escape: (str: string) => string;
    eval: typeof eval;
    global: NodeJS.Global;
    isFinite: typeof isFinite;
    isNaN: typeof isNaN;
    parseFloat: typeof parseFloat;
    parseInt: typeof parseInt;
    process: NodeJS.Process;
    root: NodeJS.Global;
    setImmediate: (callback: (...args: any[]) => void, ...args: any[]) => NodeJS.Immediate;
    setInterval: (callback: (...args: any[]) => void, ms: number, ...args: any[]) => NodeJS.Timeout;
    setTimeout: (callback: (...args: any[]) => void, ms: number, ...args: any[]) => NodeJS.Timeout;
    queueMicrotask: typeof queueMicrotask;
    undefined: typeof undefined;
    unescape: (str: string) => string;
    gc: () => void;
    v8debug?: any;
}
export interface _i_object_any {
    [propsName: string]: any;
}

interface API {
  myAPI: {
  
    /**
     * @query 请求后端参数
     * @opts 可选参数
     *  - uriReplacer 替换api申明中的{[param]} 如{id: 123}
     *  - headers     自定义headers
     *  - ctx         当前请求上下文，如果你在自定义的requestHandler或responseHandler中用到，请自行传入
     */
    "__api_name__"(query: {}, opts: {uriReplacer?: _i_object_any, headers?: _i_object_any, ctx: Context}): Promise<any>
  }
}