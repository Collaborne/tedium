declare module 'pad' {
  interface Options {
    strip: boolean;
  }
  function pad(s: string, padding: number, options?: Options) : string;
  module pad {}
  export = pad;
}

declare module 'github-cache' {
  interface Options {
    version:string;
    protocol:string;
    cachedb: string;
    validateCache: boolean;
  }
  class GitHubApi {
    constructor(options:Options);
    repos: {
      getFromOrg():any;
      get():any;
    }
    pullRequests: {
      create():any;
    }
    issues: {
      edit():any;
    }
    authenticate(credentials: {type: string, token: string}):void;
    user: {
      get():void;
    }
  }
  module GitHubApi {
    class Repo {
      owner: User;
      name: string;
      clone_url: string;
    }
    interface User {
      login: string;
    }
  }
  export = GitHubApi;
}

declare module 'promisify-node' {
  function promisify(f:Function):(...args:any[]) => Promise<any>
  module promisify {}
  export = promisify;
}

declare module 'nodegit' {
  export class Signature {
    static now(name: string, email: string): Signature;
  }
  export class Cred {
    static userpassPlaintextNew(value: string, kind: string):Cred;
  }
  export class Branch {
    static create(repo:Repository, branchName:string, commit:Commit, force:boolean): Promise<Reference>;
  }
  class CloneOptions {

  }
  export class Clone {
    static clone(url:string, local_path:string, options?: CloneOptions):Promise<Repository>;
  }
  export class Repository {
    static open(path:string): Promise<Repository>;
    createCommitOnHead(filesToAdd:string[], author:Signature, committer:Signature, message:string):Promise<Oid>;
    getHeadCommit():Promise<Commit>;
    checkoutBranch(branch: string|Reference):Promise<void>;
    getRemote(remote: string):Promise<Remote>
  }
  interface RemoteCallbacks {
    credentials?:	() => Cred;
  }
  interface PushOptions {
    callbacks?: RemoteCallbacks;
    pbParallelism?: number;
    version?: number;
  }
  export class Remote {
    push(refSpecs: string[], options: PushOptions):Promise<number>;
  }
  export class Oid {

  }
  export class Commit {

  }
  export class Reference {

  }
}

declare module 'hydrolysis' {
  interface Options {
    filter?: (path:string)=>boolean;
  }
  interface Element {
    is: string;
    contentHref: string;
    desc?: string;
  }
  interface Behavior {
    is: string;
    contentHref: string;
    desc?: string;
  }
  export class Analyzer {
    static analyze(path:string, options:Options):Promise<Analyzer>;
    metadataTree(path:string):Promise<void>;
    annotate():void;
    elements: Element[];
    behaviors: Behavior[];
  }
}

declare module 'command-line-args' {
  interface ArgDescriptor {
    name: string;
    // type: Object;
    alias?: string;
    description: string;
    defaultValue?: any;
    type: (val:string) => any;
  }
  interface UsageOpts {
    title: string;
    header: string;
  }
  interface CLI {
    parse():any;
    getUsage(opts: UsageOpts):string;
  }
  function commandLineArgs(args:ArgDescriptor[]):CLI;
  module commandLineArgs {

  }

  export = commandLineArgs;
}

declare module 'dom5' {
  export interface Node {
    nodeName: string;
    tagName: string;
    childNodes: Node[];
    parentNode: Node;
    attrs: {name: string; value: string;}[];
    value?: string;
  }
  export function parse(text: string):Node;
  export function parseFragment(text: string):Node;
  export function serialize(node: Node): string;
  export function query(root: Node, predicate: (n:Node) => boolean):Node;
  export function queryAll(root: Node, predicate: (n:Node) => boolean):Node[];
}

declare module 'espree' {
  interface ParseOpts {
    attachComment: boolean;
  }
  export function parse(text: string, opts?: ParseOpts):any;
}

declare module 'estree-walker' {
  export function walk(n: any, callbacks:{enter: (node:any)=>any}):void;
}

declare module 'escodegen' {
  interface GenerateOpts {
    comment?: boolean;
    format?: {
      indent?: {
        style?: string;
        base?: number;
        adjustMultilineComment: boolean;
      }
    }
  }
  export function generate(ast:any, opts?: GenerateOpts):string;

}
