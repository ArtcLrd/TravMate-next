
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model stateinfo
 * 
 */
export type stateinfo = $Result.DefaultSelection<Prisma.$stateinfoPayload>
/**
 * Model locationpopupinfo
 * 
 */
export type locationpopupinfo = $Result.DefaultSelection<Prisma.$locationpopupinfoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stateinfo`: Exposes CRUD operations for the **stateinfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stateinfos
    * const stateinfos = await prisma.stateinfo.findMany()
    * ```
    */
  get stateinfo(): Prisma.stateinfoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.locationpopupinfo`: Exposes CRUD operations for the **locationpopupinfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Locationpopupinfos
    * const locationpopupinfos = await prisma.locationpopupinfo.findMany()
    * ```
    */
  get locationpopupinfo(): Prisma.locationpopupinfoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    stateinfo: 'stateinfo',
    locationpopupinfo: 'locationpopupinfo'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "stateinfo" | "locationpopupinfo"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      stateinfo: {
        payload: Prisma.$stateinfoPayload<ExtArgs>
        fields: Prisma.stateinfoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.stateinfoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stateinfoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.stateinfoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stateinfoPayload>
          }
          findFirst: {
            args: Prisma.stateinfoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stateinfoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.stateinfoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stateinfoPayload>
          }
          findMany: {
            args: Prisma.stateinfoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stateinfoPayload>[]
          }
          create: {
            args: Prisma.stateinfoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stateinfoPayload>
          }
          createMany: {
            args: Prisma.stateinfoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.stateinfoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stateinfoPayload>[]
          }
          delete: {
            args: Prisma.stateinfoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stateinfoPayload>
          }
          update: {
            args: Prisma.stateinfoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stateinfoPayload>
          }
          deleteMany: {
            args: Prisma.stateinfoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.stateinfoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.stateinfoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stateinfoPayload>[]
          }
          upsert: {
            args: Prisma.stateinfoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stateinfoPayload>
          }
          aggregate: {
            args: Prisma.StateinfoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStateinfo>
          }
          groupBy: {
            args: Prisma.stateinfoGroupByArgs<ExtArgs>
            result: $Utils.Optional<StateinfoGroupByOutputType>[]
          }
          count: {
            args: Prisma.stateinfoCountArgs<ExtArgs>
            result: $Utils.Optional<StateinfoCountAggregateOutputType> | number
          }
        }
      }
      locationpopupinfo: {
        payload: Prisma.$locationpopupinfoPayload<ExtArgs>
        fields: Prisma.locationpopupinfoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.locationpopupinfoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$locationpopupinfoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.locationpopupinfoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$locationpopupinfoPayload>
          }
          findFirst: {
            args: Prisma.locationpopupinfoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$locationpopupinfoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.locationpopupinfoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$locationpopupinfoPayload>
          }
          findMany: {
            args: Prisma.locationpopupinfoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$locationpopupinfoPayload>[]
          }
          create: {
            args: Prisma.locationpopupinfoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$locationpopupinfoPayload>
          }
          createMany: {
            args: Prisma.locationpopupinfoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.locationpopupinfoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$locationpopupinfoPayload>[]
          }
          delete: {
            args: Prisma.locationpopupinfoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$locationpopupinfoPayload>
          }
          update: {
            args: Prisma.locationpopupinfoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$locationpopupinfoPayload>
          }
          deleteMany: {
            args: Prisma.locationpopupinfoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.locationpopupinfoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.locationpopupinfoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$locationpopupinfoPayload>[]
          }
          upsert: {
            args: Prisma.locationpopupinfoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$locationpopupinfoPayload>
          }
          aggregate: {
            args: Prisma.LocationpopupinfoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocationpopupinfo>
          }
          groupBy: {
            args: Prisma.locationpopupinfoGroupByArgs<ExtArgs>
            result: $Utils.Optional<LocationpopupinfoGroupByOutputType>[]
          }
          count: {
            args: Prisma.locationpopupinfoCountArgs<ExtArgs>
            result: $Utils.Optional<LocationpopupinfoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    stateinfo?: stateinfoOmit
    locationpopupinfo?: locationpopupinfoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type StateinfoCountOutputType
   */

  export type StateinfoCountOutputType = {
    locations: number
  }

  export type StateinfoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    locations?: boolean | StateinfoCountOutputTypeCountLocationsArgs
  }

  // Custom InputTypes
  /**
   * StateinfoCountOutputType without action
   */
  export type StateinfoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StateinfoCountOutputType
     */
    select?: StateinfoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StateinfoCountOutputType without action
   */
  export type StateinfoCountOutputTypeCountLocationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: locationpopupinfoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    username: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    username: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    username: number
    password: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    username: string
    password: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "username" | "password", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      username: string
      password: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model stateinfo
   */

  export type AggregateStateinfo = {
    _count: StateinfoCountAggregateOutputType | null
    _avg: StateinfoAvgAggregateOutputType | null
    _sum: StateinfoSumAggregateOutputType | null
    _min: StateinfoMinAggregateOutputType | null
    _max: StateinfoMaxAggregateOutputType | null
  }

  export type StateinfoAvgAggregateOutputType = {
    id: number | null
  }

  export type StateinfoSumAggregateOutputType = {
    id: number | null
  }

  export type StateinfoMinAggregateOutputType = {
    id: number | null
    statename: string | null
    description: string | null
    svg: string | null
  }

  export type StateinfoMaxAggregateOutputType = {
    id: number | null
    statename: string | null
    description: string | null
    svg: string | null
  }

  export type StateinfoCountAggregateOutputType = {
    id: number
    statename: number
    description: number
    svg: number
    _all: number
  }


  export type StateinfoAvgAggregateInputType = {
    id?: true
  }

  export type StateinfoSumAggregateInputType = {
    id?: true
  }

  export type StateinfoMinAggregateInputType = {
    id?: true
    statename?: true
    description?: true
    svg?: true
  }

  export type StateinfoMaxAggregateInputType = {
    id?: true
    statename?: true
    description?: true
    svg?: true
  }

  export type StateinfoCountAggregateInputType = {
    id?: true
    statename?: true
    description?: true
    svg?: true
    _all?: true
  }

  export type StateinfoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stateinfo to aggregate.
     */
    where?: stateinfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stateinfos to fetch.
     */
    orderBy?: stateinfoOrderByWithRelationInput | stateinfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: stateinfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stateinfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stateinfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned stateinfos
    **/
    _count?: true | StateinfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StateinfoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StateinfoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StateinfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StateinfoMaxAggregateInputType
  }

  export type GetStateinfoAggregateType<T extends StateinfoAggregateArgs> = {
        [P in keyof T & keyof AggregateStateinfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStateinfo[P]>
      : GetScalarType<T[P], AggregateStateinfo[P]>
  }




  export type stateinfoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: stateinfoWhereInput
    orderBy?: stateinfoOrderByWithAggregationInput | stateinfoOrderByWithAggregationInput[]
    by: StateinfoScalarFieldEnum[] | StateinfoScalarFieldEnum
    having?: stateinfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StateinfoCountAggregateInputType | true
    _avg?: StateinfoAvgAggregateInputType
    _sum?: StateinfoSumAggregateInputType
    _min?: StateinfoMinAggregateInputType
    _max?: StateinfoMaxAggregateInputType
  }

  export type StateinfoGroupByOutputType = {
    id: number
    statename: string
    description: string
    svg: string
    _count: StateinfoCountAggregateOutputType | null
    _avg: StateinfoAvgAggregateOutputType | null
    _sum: StateinfoSumAggregateOutputType | null
    _min: StateinfoMinAggregateOutputType | null
    _max: StateinfoMaxAggregateOutputType | null
  }

  type GetStateinfoGroupByPayload<T extends stateinfoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StateinfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StateinfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StateinfoGroupByOutputType[P]>
            : GetScalarType<T[P], StateinfoGroupByOutputType[P]>
        }
      >
    >


  export type stateinfoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    statename?: boolean
    description?: boolean
    svg?: boolean
    locations?: boolean | stateinfo$locationsArgs<ExtArgs>
    _count?: boolean | StateinfoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stateinfo"]>

  export type stateinfoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    statename?: boolean
    description?: boolean
    svg?: boolean
  }, ExtArgs["result"]["stateinfo"]>

  export type stateinfoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    statename?: boolean
    description?: boolean
    svg?: boolean
  }, ExtArgs["result"]["stateinfo"]>

  export type stateinfoSelectScalar = {
    id?: boolean
    statename?: boolean
    description?: boolean
    svg?: boolean
  }

  export type stateinfoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "statename" | "description" | "svg", ExtArgs["result"]["stateinfo"]>
  export type stateinfoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    locations?: boolean | stateinfo$locationsArgs<ExtArgs>
    _count?: boolean | StateinfoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type stateinfoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type stateinfoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $stateinfoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "stateinfo"
    objects: {
      locations: Prisma.$locationpopupinfoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      statename: string
      description: string
      svg: string
    }, ExtArgs["result"]["stateinfo"]>
    composites: {}
  }

  type stateinfoGetPayload<S extends boolean | null | undefined | stateinfoDefaultArgs> = $Result.GetResult<Prisma.$stateinfoPayload, S>

  type stateinfoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<stateinfoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StateinfoCountAggregateInputType | true
    }

  export interface stateinfoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['stateinfo'], meta: { name: 'stateinfo' } }
    /**
     * Find zero or one Stateinfo that matches the filter.
     * @param {stateinfoFindUniqueArgs} args - Arguments to find a Stateinfo
     * @example
     * // Get one Stateinfo
     * const stateinfo = await prisma.stateinfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends stateinfoFindUniqueArgs>(args: SelectSubset<T, stateinfoFindUniqueArgs<ExtArgs>>): Prisma__stateinfoClient<$Result.GetResult<Prisma.$stateinfoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Stateinfo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {stateinfoFindUniqueOrThrowArgs} args - Arguments to find a Stateinfo
     * @example
     * // Get one Stateinfo
     * const stateinfo = await prisma.stateinfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends stateinfoFindUniqueOrThrowArgs>(args: SelectSubset<T, stateinfoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__stateinfoClient<$Result.GetResult<Prisma.$stateinfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stateinfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stateinfoFindFirstArgs} args - Arguments to find a Stateinfo
     * @example
     * // Get one Stateinfo
     * const stateinfo = await prisma.stateinfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends stateinfoFindFirstArgs>(args?: SelectSubset<T, stateinfoFindFirstArgs<ExtArgs>>): Prisma__stateinfoClient<$Result.GetResult<Prisma.$stateinfoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stateinfo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stateinfoFindFirstOrThrowArgs} args - Arguments to find a Stateinfo
     * @example
     * // Get one Stateinfo
     * const stateinfo = await prisma.stateinfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends stateinfoFindFirstOrThrowArgs>(args?: SelectSubset<T, stateinfoFindFirstOrThrowArgs<ExtArgs>>): Prisma__stateinfoClient<$Result.GetResult<Prisma.$stateinfoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stateinfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stateinfoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stateinfos
     * const stateinfos = await prisma.stateinfo.findMany()
     * 
     * // Get first 10 Stateinfos
     * const stateinfos = await prisma.stateinfo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stateinfoWithIdOnly = await prisma.stateinfo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends stateinfoFindManyArgs>(args?: SelectSubset<T, stateinfoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stateinfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Stateinfo.
     * @param {stateinfoCreateArgs} args - Arguments to create a Stateinfo.
     * @example
     * // Create one Stateinfo
     * const Stateinfo = await prisma.stateinfo.create({
     *   data: {
     *     // ... data to create a Stateinfo
     *   }
     * })
     * 
     */
    create<T extends stateinfoCreateArgs>(args: SelectSubset<T, stateinfoCreateArgs<ExtArgs>>): Prisma__stateinfoClient<$Result.GetResult<Prisma.$stateinfoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stateinfos.
     * @param {stateinfoCreateManyArgs} args - Arguments to create many Stateinfos.
     * @example
     * // Create many Stateinfos
     * const stateinfo = await prisma.stateinfo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends stateinfoCreateManyArgs>(args?: SelectSubset<T, stateinfoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stateinfos and returns the data saved in the database.
     * @param {stateinfoCreateManyAndReturnArgs} args - Arguments to create many Stateinfos.
     * @example
     * // Create many Stateinfos
     * const stateinfo = await prisma.stateinfo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stateinfos and only return the `id`
     * const stateinfoWithIdOnly = await prisma.stateinfo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends stateinfoCreateManyAndReturnArgs>(args?: SelectSubset<T, stateinfoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stateinfoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Stateinfo.
     * @param {stateinfoDeleteArgs} args - Arguments to delete one Stateinfo.
     * @example
     * // Delete one Stateinfo
     * const Stateinfo = await prisma.stateinfo.delete({
     *   where: {
     *     // ... filter to delete one Stateinfo
     *   }
     * })
     * 
     */
    delete<T extends stateinfoDeleteArgs>(args: SelectSubset<T, stateinfoDeleteArgs<ExtArgs>>): Prisma__stateinfoClient<$Result.GetResult<Prisma.$stateinfoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Stateinfo.
     * @param {stateinfoUpdateArgs} args - Arguments to update one Stateinfo.
     * @example
     * // Update one Stateinfo
     * const stateinfo = await prisma.stateinfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends stateinfoUpdateArgs>(args: SelectSubset<T, stateinfoUpdateArgs<ExtArgs>>): Prisma__stateinfoClient<$Result.GetResult<Prisma.$stateinfoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stateinfos.
     * @param {stateinfoDeleteManyArgs} args - Arguments to filter Stateinfos to delete.
     * @example
     * // Delete a few Stateinfos
     * const { count } = await prisma.stateinfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends stateinfoDeleteManyArgs>(args?: SelectSubset<T, stateinfoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stateinfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stateinfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stateinfos
     * const stateinfo = await prisma.stateinfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends stateinfoUpdateManyArgs>(args: SelectSubset<T, stateinfoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stateinfos and returns the data updated in the database.
     * @param {stateinfoUpdateManyAndReturnArgs} args - Arguments to update many Stateinfos.
     * @example
     * // Update many Stateinfos
     * const stateinfo = await prisma.stateinfo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Stateinfos and only return the `id`
     * const stateinfoWithIdOnly = await prisma.stateinfo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends stateinfoUpdateManyAndReturnArgs>(args: SelectSubset<T, stateinfoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stateinfoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Stateinfo.
     * @param {stateinfoUpsertArgs} args - Arguments to update or create a Stateinfo.
     * @example
     * // Update or create a Stateinfo
     * const stateinfo = await prisma.stateinfo.upsert({
     *   create: {
     *     // ... data to create a Stateinfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stateinfo we want to update
     *   }
     * })
     */
    upsert<T extends stateinfoUpsertArgs>(args: SelectSubset<T, stateinfoUpsertArgs<ExtArgs>>): Prisma__stateinfoClient<$Result.GetResult<Prisma.$stateinfoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stateinfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stateinfoCountArgs} args - Arguments to filter Stateinfos to count.
     * @example
     * // Count the number of Stateinfos
     * const count = await prisma.stateinfo.count({
     *   where: {
     *     // ... the filter for the Stateinfos we want to count
     *   }
     * })
    **/
    count<T extends stateinfoCountArgs>(
      args?: Subset<T, stateinfoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StateinfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stateinfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateinfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StateinfoAggregateArgs>(args: Subset<T, StateinfoAggregateArgs>): Prisma.PrismaPromise<GetStateinfoAggregateType<T>>

    /**
     * Group by Stateinfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stateinfoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends stateinfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: stateinfoGroupByArgs['orderBy'] }
        : { orderBy?: stateinfoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, stateinfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStateinfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the stateinfo model
   */
  readonly fields: stateinfoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for stateinfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__stateinfoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    locations<T extends stateinfo$locationsArgs<ExtArgs> = {}>(args?: Subset<T, stateinfo$locationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$locationpopupinfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the stateinfo model
   */
  interface stateinfoFieldRefs {
    readonly id: FieldRef<"stateinfo", 'Int'>
    readonly statename: FieldRef<"stateinfo", 'String'>
    readonly description: FieldRef<"stateinfo", 'String'>
    readonly svg: FieldRef<"stateinfo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * stateinfo findUnique
   */
  export type stateinfoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stateinfo
     */
    select?: stateinfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stateinfo
     */
    omit?: stateinfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stateinfoInclude<ExtArgs> | null
    /**
     * Filter, which stateinfo to fetch.
     */
    where: stateinfoWhereUniqueInput
  }

  /**
   * stateinfo findUniqueOrThrow
   */
  export type stateinfoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stateinfo
     */
    select?: stateinfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stateinfo
     */
    omit?: stateinfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stateinfoInclude<ExtArgs> | null
    /**
     * Filter, which stateinfo to fetch.
     */
    where: stateinfoWhereUniqueInput
  }

  /**
   * stateinfo findFirst
   */
  export type stateinfoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stateinfo
     */
    select?: stateinfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stateinfo
     */
    omit?: stateinfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stateinfoInclude<ExtArgs> | null
    /**
     * Filter, which stateinfo to fetch.
     */
    where?: stateinfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stateinfos to fetch.
     */
    orderBy?: stateinfoOrderByWithRelationInput | stateinfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stateinfos.
     */
    cursor?: stateinfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stateinfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stateinfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stateinfos.
     */
    distinct?: StateinfoScalarFieldEnum | StateinfoScalarFieldEnum[]
  }

  /**
   * stateinfo findFirstOrThrow
   */
  export type stateinfoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stateinfo
     */
    select?: stateinfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stateinfo
     */
    omit?: stateinfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stateinfoInclude<ExtArgs> | null
    /**
     * Filter, which stateinfo to fetch.
     */
    where?: stateinfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stateinfos to fetch.
     */
    orderBy?: stateinfoOrderByWithRelationInput | stateinfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stateinfos.
     */
    cursor?: stateinfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stateinfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stateinfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stateinfos.
     */
    distinct?: StateinfoScalarFieldEnum | StateinfoScalarFieldEnum[]
  }

  /**
   * stateinfo findMany
   */
  export type stateinfoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stateinfo
     */
    select?: stateinfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stateinfo
     */
    omit?: stateinfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stateinfoInclude<ExtArgs> | null
    /**
     * Filter, which stateinfos to fetch.
     */
    where?: stateinfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stateinfos to fetch.
     */
    orderBy?: stateinfoOrderByWithRelationInput | stateinfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing stateinfos.
     */
    cursor?: stateinfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stateinfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stateinfos.
     */
    skip?: number
    distinct?: StateinfoScalarFieldEnum | StateinfoScalarFieldEnum[]
  }

  /**
   * stateinfo create
   */
  export type stateinfoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stateinfo
     */
    select?: stateinfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stateinfo
     */
    omit?: stateinfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stateinfoInclude<ExtArgs> | null
    /**
     * The data needed to create a stateinfo.
     */
    data: XOR<stateinfoCreateInput, stateinfoUncheckedCreateInput>
  }

  /**
   * stateinfo createMany
   */
  export type stateinfoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many stateinfos.
     */
    data: stateinfoCreateManyInput | stateinfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * stateinfo createManyAndReturn
   */
  export type stateinfoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stateinfo
     */
    select?: stateinfoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the stateinfo
     */
    omit?: stateinfoOmit<ExtArgs> | null
    /**
     * The data used to create many stateinfos.
     */
    data: stateinfoCreateManyInput | stateinfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * stateinfo update
   */
  export type stateinfoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stateinfo
     */
    select?: stateinfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stateinfo
     */
    omit?: stateinfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stateinfoInclude<ExtArgs> | null
    /**
     * The data needed to update a stateinfo.
     */
    data: XOR<stateinfoUpdateInput, stateinfoUncheckedUpdateInput>
    /**
     * Choose, which stateinfo to update.
     */
    where: stateinfoWhereUniqueInput
  }

  /**
   * stateinfo updateMany
   */
  export type stateinfoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update stateinfos.
     */
    data: XOR<stateinfoUpdateManyMutationInput, stateinfoUncheckedUpdateManyInput>
    /**
     * Filter which stateinfos to update
     */
    where?: stateinfoWhereInput
    /**
     * Limit how many stateinfos to update.
     */
    limit?: number
  }

  /**
   * stateinfo updateManyAndReturn
   */
  export type stateinfoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stateinfo
     */
    select?: stateinfoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the stateinfo
     */
    omit?: stateinfoOmit<ExtArgs> | null
    /**
     * The data used to update stateinfos.
     */
    data: XOR<stateinfoUpdateManyMutationInput, stateinfoUncheckedUpdateManyInput>
    /**
     * Filter which stateinfos to update
     */
    where?: stateinfoWhereInput
    /**
     * Limit how many stateinfos to update.
     */
    limit?: number
  }

  /**
   * stateinfo upsert
   */
  export type stateinfoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stateinfo
     */
    select?: stateinfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stateinfo
     */
    omit?: stateinfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stateinfoInclude<ExtArgs> | null
    /**
     * The filter to search for the stateinfo to update in case it exists.
     */
    where: stateinfoWhereUniqueInput
    /**
     * In case the stateinfo found by the `where` argument doesn't exist, create a new stateinfo with this data.
     */
    create: XOR<stateinfoCreateInput, stateinfoUncheckedCreateInput>
    /**
     * In case the stateinfo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<stateinfoUpdateInput, stateinfoUncheckedUpdateInput>
  }

  /**
   * stateinfo delete
   */
  export type stateinfoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stateinfo
     */
    select?: stateinfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stateinfo
     */
    omit?: stateinfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stateinfoInclude<ExtArgs> | null
    /**
     * Filter which stateinfo to delete.
     */
    where: stateinfoWhereUniqueInput
  }

  /**
   * stateinfo deleteMany
   */
  export type stateinfoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stateinfos to delete
     */
    where?: stateinfoWhereInput
    /**
     * Limit how many stateinfos to delete.
     */
    limit?: number
  }

  /**
   * stateinfo.locations
   */
  export type stateinfo$locationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the locationpopupinfo
     */
    select?: locationpopupinfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the locationpopupinfo
     */
    omit?: locationpopupinfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: locationpopupinfoInclude<ExtArgs> | null
    where?: locationpopupinfoWhereInput
    orderBy?: locationpopupinfoOrderByWithRelationInput | locationpopupinfoOrderByWithRelationInput[]
    cursor?: locationpopupinfoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LocationpopupinfoScalarFieldEnum | LocationpopupinfoScalarFieldEnum[]
  }

  /**
   * stateinfo without action
   */
  export type stateinfoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stateinfo
     */
    select?: stateinfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stateinfo
     */
    omit?: stateinfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stateinfoInclude<ExtArgs> | null
  }


  /**
   * Model locationpopupinfo
   */

  export type AggregateLocationpopupinfo = {
    _count: LocationpopupinfoCountAggregateOutputType | null
    _avg: LocationpopupinfoAvgAggregateOutputType | null
    _sum: LocationpopupinfoSumAggregateOutputType | null
    _min: LocationpopupinfoMinAggregateOutputType | null
    _max: LocationpopupinfoMaxAggregateOutputType | null
  }

  export type LocationpopupinfoAvgAggregateOutputType = {
    id: number | null
  }

  export type LocationpopupinfoSumAggregateOutputType = {
    id: number | null
  }

  export type LocationpopupinfoMinAggregateOutputType = {
    id: number | null
    locationname: string | null
    statename: string | null
    coords: string | null
  }

  export type LocationpopupinfoMaxAggregateOutputType = {
    id: number | null
    locationname: string | null
    statename: string | null
    coords: string | null
  }

  export type LocationpopupinfoCountAggregateOutputType = {
    id: number
    locationname: number
    statename: number
    coords: number
    _all: number
  }


  export type LocationpopupinfoAvgAggregateInputType = {
    id?: true
  }

  export type LocationpopupinfoSumAggregateInputType = {
    id?: true
  }

  export type LocationpopupinfoMinAggregateInputType = {
    id?: true
    locationname?: true
    statename?: true
    coords?: true
  }

  export type LocationpopupinfoMaxAggregateInputType = {
    id?: true
    locationname?: true
    statename?: true
    coords?: true
  }

  export type LocationpopupinfoCountAggregateInputType = {
    id?: true
    locationname?: true
    statename?: true
    coords?: true
    _all?: true
  }

  export type LocationpopupinfoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which locationpopupinfo to aggregate.
     */
    where?: locationpopupinfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of locationpopupinfos to fetch.
     */
    orderBy?: locationpopupinfoOrderByWithRelationInput | locationpopupinfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: locationpopupinfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` locationpopupinfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` locationpopupinfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned locationpopupinfos
    **/
    _count?: true | LocationpopupinfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LocationpopupinfoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LocationpopupinfoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocationpopupinfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocationpopupinfoMaxAggregateInputType
  }

  export type GetLocationpopupinfoAggregateType<T extends LocationpopupinfoAggregateArgs> = {
        [P in keyof T & keyof AggregateLocationpopupinfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocationpopupinfo[P]>
      : GetScalarType<T[P], AggregateLocationpopupinfo[P]>
  }




  export type locationpopupinfoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: locationpopupinfoWhereInput
    orderBy?: locationpopupinfoOrderByWithAggregationInput | locationpopupinfoOrderByWithAggregationInput[]
    by: LocationpopupinfoScalarFieldEnum[] | LocationpopupinfoScalarFieldEnum
    having?: locationpopupinfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocationpopupinfoCountAggregateInputType | true
    _avg?: LocationpopupinfoAvgAggregateInputType
    _sum?: LocationpopupinfoSumAggregateInputType
    _min?: LocationpopupinfoMinAggregateInputType
    _max?: LocationpopupinfoMaxAggregateInputType
  }

  export type LocationpopupinfoGroupByOutputType = {
    id: number
    locationname: string
    statename: string
    coords: string
    _count: LocationpopupinfoCountAggregateOutputType | null
    _avg: LocationpopupinfoAvgAggregateOutputType | null
    _sum: LocationpopupinfoSumAggregateOutputType | null
    _min: LocationpopupinfoMinAggregateOutputType | null
    _max: LocationpopupinfoMaxAggregateOutputType | null
  }

  type GetLocationpopupinfoGroupByPayload<T extends locationpopupinfoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocationpopupinfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocationpopupinfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocationpopupinfoGroupByOutputType[P]>
            : GetScalarType<T[P], LocationpopupinfoGroupByOutputType[P]>
        }
      >
    >


  export type locationpopupinfoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locationname?: boolean
    statename?: boolean
    coords?: boolean
    state?: boolean | stateinfoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["locationpopupinfo"]>

  export type locationpopupinfoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locationname?: boolean
    statename?: boolean
    coords?: boolean
    state?: boolean | stateinfoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["locationpopupinfo"]>

  export type locationpopupinfoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locationname?: boolean
    statename?: boolean
    coords?: boolean
    state?: boolean | stateinfoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["locationpopupinfo"]>

  export type locationpopupinfoSelectScalar = {
    id?: boolean
    locationname?: boolean
    statename?: boolean
    coords?: boolean
  }

  export type locationpopupinfoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "locationname" | "statename" | "coords", ExtArgs["result"]["locationpopupinfo"]>
  export type locationpopupinfoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    state?: boolean | stateinfoDefaultArgs<ExtArgs>
  }
  export type locationpopupinfoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    state?: boolean | stateinfoDefaultArgs<ExtArgs>
  }
  export type locationpopupinfoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    state?: boolean | stateinfoDefaultArgs<ExtArgs>
  }

  export type $locationpopupinfoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "locationpopupinfo"
    objects: {
      state: Prisma.$stateinfoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      locationname: string
      statename: string
      coords: string
    }, ExtArgs["result"]["locationpopupinfo"]>
    composites: {}
  }

  type locationpopupinfoGetPayload<S extends boolean | null | undefined | locationpopupinfoDefaultArgs> = $Result.GetResult<Prisma.$locationpopupinfoPayload, S>

  type locationpopupinfoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<locationpopupinfoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LocationpopupinfoCountAggregateInputType | true
    }

  export interface locationpopupinfoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['locationpopupinfo'], meta: { name: 'locationpopupinfo' } }
    /**
     * Find zero or one Locationpopupinfo that matches the filter.
     * @param {locationpopupinfoFindUniqueArgs} args - Arguments to find a Locationpopupinfo
     * @example
     * // Get one Locationpopupinfo
     * const locationpopupinfo = await prisma.locationpopupinfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends locationpopupinfoFindUniqueArgs>(args: SelectSubset<T, locationpopupinfoFindUniqueArgs<ExtArgs>>): Prisma__locationpopupinfoClient<$Result.GetResult<Prisma.$locationpopupinfoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Locationpopupinfo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {locationpopupinfoFindUniqueOrThrowArgs} args - Arguments to find a Locationpopupinfo
     * @example
     * // Get one Locationpopupinfo
     * const locationpopupinfo = await prisma.locationpopupinfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends locationpopupinfoFindUniqueOrThrowArgs>(args: SelectSubset<T, locationpopupinfoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__locationpopupinfoClient<$Result.GetResult<Prisma.$locationpopupinfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Locationpopupinfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {locationpopupinfoFindFirstArgs} args - Arguments to find a Locationpopupinfo
     * @example
     * // Get one Locationpopupinfo
     * const locationpopupinfo = await prisma.locationpopupinfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends locationpopupinfoFindFirstArgs>(args?: SelectSubset<T, locationpopupinfoFindFirstArgs<ExtArgs>>): Prisma__locationpopupinfoClient<$Result.GetResult<Prisma.$locationpopupinfoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Locationpopupinfo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {locationpopupinfoFindFirstOrThrowArgs} args - Arguments to find a Locationpopupinfo
     * @example
     * // Get one Locationpopupinfo
     * const locationpopupinfo = await prisma.locationpopupinfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends locationpopupinfoFindFirstOrThrowArgs>(args?: SelectSubset<T, locationpopupinfoFindFirstOrThrowArgs<ExtArgs>>): Prisma__locationpopupinfoClient<$Result.GetResult<Prisma.$locationpopupinfoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Locationpopupinfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {locationpopupinfoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Locationpopupinfos
     * const locationpopupinfos = await prisma.locationpopupinfo.findMany()
     * 
     * // Get first 10 Locationpopupinfos
     * const locationpopupinfos = await prisma.locationpopupinfo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const locationpopupinfoWithIdOnly = await prisma.locationpopupinfo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends locationpopupinfoFindManyArgs>(args?: SelectSubset<T, locationpopupinfoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$locationpopupinfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Locationpopupinfo.
     * @param {locationpopupinfoCreateArgs} args - Arguments to create a Locationpopupinfo.
     * @example
     * // Create one Locationpopupinfo
     * const Locationpopupinfo = await prisma.locationpopupinfo.create({
     *   data: {
     *     // ... data to create a Locationpopupinfo
     *   }
     * })
     * 
     */
    create<T extends locationpopupinfoCreateArgs>(args: SelectSubset<T, locationpopupinfoCreateArgs<ExtArgs>>): Prisma__locationpopupinfoClient<$Result.GetResult<Prisma.$locationpopupinfoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Locationpopupinfos.
     * @param {locationpopupinfoCreateManyArgs} args - Arguments to create many Locationpopupinfos.
     * @example
     * // Create many Locationpopupinfos
     * const locationpopupinfo = await prisma.locationpopupinfo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends locationpopupinfoCreateManyArgs>(args?: SelectSubset<T, locationpopupinfoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Locationpopupinfos and returns the data saved in the database.
     * @param {locationpopupinfoCreateManyAndReturnArgs} args - Arguments to create many Locationpopupinfos.
     * @example
     * // Create many Locationpopupinfos
     * const locationpopupinfo = await prisma.locationpopupinfo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Locationpopupinfos and only return the `id`
     * const locationpopupinfoWithIdOnly = await prisma.locationpopupinfo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends locationpopupinfoCreateManyAndReturnArgs>(args?: SelectSubset<T, locationpopupinfoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$locationpopupinfoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Locationpopupinfo.
     * @param {locationpopupinfoDeleteArgs} args - Arguments to delete one Locationpopupinfo.
     * @example
     * // Delete one Locationpopupinfo
     * const Locationpopupinfo = await prisma.locationpopupinfo.delete({
     *   where: {
     *     // ... filter to delete one Locationpopupinfo
     *   }
     * })
     * 
     */
    delete<T extends locationpopupinfoDeleteArgs>(args: SelectSubset<T, locationpopupinfoDeleteArgs<ExtArgs>>): Prisma__locationpopupinfoClient<$Result.GetResult<Prisma.$locationpopupinfoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Locationpopupinfo.
     * @param {locationpopupinfoUpdateArgs} args - Arguments to update one Locationpopupinfo.
     * @example
     * // Update one Locationpopupinfo
     * const locationpopupinfo = await prisma.locationpopupinfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends locationpopupinfoUpdateArgs>(args: SelectSubset<T, locationpopupinfoUpdateArgs<ExtArgs>>): Prisma__locationpopupinfoClient<$Result.GetResult<Prisma.$locationpopupinfoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Locationpopupinfos.
     * @param {locationpopupinfoDeleteManyArgs} args - Arguments to filter Locationpopupinfos to delete.
     * @example
     * // Delete a few Locationpopupinfos
     * const { count } = await prisma.locationpopupinfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends locationpopupinfoDeleteManyArgs>(args?: SelectSubset<T, locationpopupinfoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locationpopupinfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {locationpopupinfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Locationpopupinfos
     * const locationpopupinfo = await prisma.locationpopupinfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends locationpopupinfoUpdateManyArgs>(args: SelectSubset<T, locationpopupinfoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locationpopupinfos and returns the data updated in the database.
     * @param {locationpopupinfoUpdateManyAndReturnArgs} args - Arguments to update many Locationpopupinfos.
     * @example
     * // Update many Locationpopupinfos
     * const locationpopupinfo = await prisma.locationpopupinfo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Locationpopupinfos and only return the `id`
     * const locationpopupinfoWithIdOnly = await prisma.locationpopupinfo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends locationpopupinfoUpdateManyAndReturnArgs>(args: SelectSubset<T, locationpopupinfoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$locationpopupinfoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Locationpopupinfo.
     * @param {locationpopupinfoUpsertArgs} args - Arguments to update or create a Locationpopupinfo.
     * @example
     * // Update or create a Locationpopupinfo
     * const locationpopupinfo = await prisma.locationpopupinfo.upsert({
     *   create: {
     *     // ... data to create a Locationpopupinfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Locationpopupinfo we want to update
     *   }
     * })
     */
    upsert<T extends locationpopupinfoUpsertArgs>(args: SelectSubset<T, locationpopupinfoUpsertArgs<ExtArgs>>): Prisma__locationpopupinfoClient<$Result.GetResult<Prisma.$locationpopupinfoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Locationpopupinfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {locationpopupinfoCountArgs} args - Arguments to filter Locationpopupinfos to count.
     * @example
     * // Count the number of Locationpopupinfos
     * const count = await prisma.locationpopupinfo.count({
     *   where: {
     *     // ... the filter for the Locationpopupinfos we want to count
     *   }
     * })
    **/
    count<T extends locationpopupinfoCountArgs>(
      args?: Subset<T, locationpopupinfoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocationpopupinfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Locationpopupinfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationpopupinfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LocationpopupinfoAggregateArgs>(args: Subset<T, LocationpopupinfoAggregateArgs>): Prisma.PrismaPromise<GetLocationpopupinfoAggregateType<T>>

    /**
     * Group by Locationpopupinfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {locationpopupinfoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends locationpopupinfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: locationpopupinfoGroupByArgs['orderBy'] }
        : { orderBy?: locationpopupinfoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, locationpopupinfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocationpopupinfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the locationpopupinfo model
   */
  readonly fields: locationpopupinfoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for locationpopupinfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__locationpopupinfoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    state<T extends stateinfoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, stateinfoDefaultArgs<ExtArgs>>): Prisma__stateinfoClient<$Result.GetResult<Prisma.$stateinfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the locationpopupinfo model
   */
  interface locationpopupinfoFieldRefs {
    readonly id: FieldRef<"locationpopupinfo", 'Int'>
    readonly locationname: FieldRef<"locationpopupinfo", 'String'>
    readonly statename: FieldRef<"locationpopupinfo", 'String'>
    readonly coords: FieldRef<"locationpopupinfo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * locationpopupinfo findUnique
   */
  export type locationpopupinfoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the locationpopupinfo
     */
    select?: locationpopupinfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the locationpopupinfo
     */
    omit?: locationpopupinfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: locationpopupinfoInclude<ExtArgs> | null
    /**
     * Filter, which locationpopupinfo to fetch.
     */
    where: locationpopupinfoWhereUniqueInput
  }

  /**
   * locationpopupinfo findUniqueOrThrow
   */
  export type locationpopupinfoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the locationpopupinfo
     */
    select?: locationpopupinfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the locationpopupinfo
     */
    omit?: locationpopupinfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: locationpopupinfoInclude<ExtArgs> | null
    /**
     * Filter, which locationpopupinfo to fetch.
     */
    where: locationpopupinfoWhereUniqueInput
  }

  /**
   * locationpopupinfo findFirst
   */
  export type locationpopupinfoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the locationpopupinfo
     */
    select?: locationpopupinfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the locationpopupinfo
     */
    omit?: locationpopupinfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: locationpopupinfoInclude<ExtArgs> | null
    /**
     * Filter, which locationpopupinfo to fetch.
     */
    where?: locationpopupinfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of locationpopupinfos to fetch.
     */
    orderBy?: locationpopupinfoOrderByWithRelationInput | locationpopupinfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for locationpopupinfos.
     */
    cursor?: locationpopupinfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` locationpopupinfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` locationpopupinfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of locationpopupinfos.
     */
    distinct?: LocationpopupinfoScalarFieldEnum | LocationpopupinfoScalarFieldEnum[]
  }

  /**
   * locationpopupinfo findFirstOrThrow
   */
  export type locationpopupinfoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the locationpopupinfo
     */
    select?: locationpopupinfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the locationpopupinfo
     */
    omit?: locationpopupinfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: locationpopupinfoInclude<ExtArgs> | null
    /**
     * Filter, which locationpopupinfo to fetch.
     */
    where?: locationpopupinfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of locationpopupinfos to fetch.
     */
    orderBy?: locationpopupinfoOrderByWithRelationInput | locationpopupinfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for locationpopupinfos.
     */
    cursor?: locationpopupinfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` locationpopupinfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` locationpopupinfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of locationpopupinfos.
     */
    distinct?: LocationpopupinfoScalarFieldEnum | LocationpopupinfoScalarFieldEnum[]
  }

  /**
   * locationpopupinfo findMany
   */
  export type locationpopupinfoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the locationpopupinfo
     */
    select?: locationpopupinfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the locationpopupinfo
     */
    omit?: locationpopupinfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: locationpopupinfoInclude<ExtArgs> | null
    /**
     * Filter, which locationpopupinfos to fetch.
     */
    where?: locationpopupinfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of locationpopupinfos to fetch.
     */
    orderBy?: locationpopupinfoOrderByWithRelationInput | locationpopupinfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing locationpopupinfos.
     */
    cursor?: locationpopupinfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` locationpopupinfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` locationpopupinfos.
     */
    skip?: number
    distinct?: LocationpopupinfoScalarFieldEnum | LocationpopupinfoScalarFieldEnum[]
  }

  /**
   * locationpopupinfo create
   */
  export type locationpopupinfoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the locationpopupinfo
     */
    select?: locationpopupinfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the locationpopupinfo
     */
    omit?: locationpopupinfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: locationpopupinfoInclude<ExtArgs> | null
    /**
     * The data needed to create a locationpopupinfo.
     */
    data: XOR<locationpopupinfoCreateInput, locationpopupinfoUncheckedCreateInput>
  }

  /**
   * locationpopupinfo createMany
   */
  export type locationpopupinfoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many locationpopupinfos.
     */
    data: locationpopupinfoCreateManyInput | locationpopupinfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * locationpopupinfo createManyAndReturn
   */
  export type locationpopupinfoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the locationpopupinfo
     */
    select?: locationpopupinfoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the locationpopupinfo
     */
    omit?: locationpopupinfoOmit<ExtArgs> | null
    /**
     * The data used to create many locationpopupinfos.
     */
    data: locationpopupinfoCreateManyInput | locationpopupinfoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: locationpopupinfoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * locationpopupinfo update
   */
  export type locationpopupinfoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the locationpopupinfo
     */
    select?: locationpopupinfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the locationpopupinfo
     */
    omit?: locationpopupinfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: locationpopupinfoInclude<ExtArgs> | null
    /**
     * The data needed to update a locationpopupinfo.
     */
    data: XOR<locationpopupinfoUpdateInput, locationpopupinfoUncheckedUpdateInput>
    /**
     * Choose, which locationpopupinfo to update.
     */
    where: locationpopupinfoWhereUniqueInput
  }

  /**
   * locationpopupinfo updateMany
   */
  export type locationpopupinfoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update locationpopupinfos.
     */
    data: XOR<locationpopupinfoUpdateManyMutationInput, locationpopupinfoUncheckedUpdateManyInput>
    /**
     * Filter which locationpopupinfos to update
     */
    where?: locationpopupinfoWhereInput
    /**
     * Limit how many locationpopupinfos to update.
     */
    limit?: number
  }

  /**
   * locationpopupinfo updateManyAndReturn
   */
  export type locationpopupinfoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the locationpopupinfo
     */
    select?: locationpopupinfoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the locationpopupinfo
     */
    omit?: locationpopupinfoOmit<ExtArgs> | null
    /**
     * The data used to update locationpopupinfos.
     */
    data: XOR<locationpopupinfoUpdateManyMutationInput, locationpopupinfoUncheckedUpdateManyInput>
    /**
     * Filter which locationpopupinfos to update
     */
    where?: locationpopupinfoWhereInput
    /**
     * Limit how many locationpopupinfos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: locationpopupinfoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * locationpopupinfo upsert
   */
  export type locationpopupinfoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the locationpopupinfo
     */
    select?: locationpopupinfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the locationpopupinfo
     */
    omit?: locationpopupinfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: locationpopupinfoInclude<ExtArgs> | null
    /**
     * The filter to search for the locationpopupinfo to update in case it exists.
     */
    where: locationpopupinfoWhereUniqueInput
    /**
     * In case the locationpopupinfo found by the `where` argument doesn't exist, create a new locationpopupinfo with this data.
     */
    create: XOR<locationpopupinfoCreateInput, locationpopupinfoUncheckedCreateInput>
    /**
     * In case the locationpopupinfo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<locationpopupinfoUpdateInput, locationpopupinfoUncheckedUpdateInput>
  }

  /**
   * locationpopupinfo delete
   */
  export type locationpopupinfoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the locationpopupinfo
     */
    select?: locationpopupinfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the locationpopupinfo
     */
    omit?: locationpopupinfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: locationpopupinfoInclude<ExtArgs> | null
    /**
     * Filter which locationpopupinfo to delete.
     */
    where: locationpopupinfoWhereUniqueInput
  }

  /**
   * locationpopupinfo deleteMany
   */
  export type locationpopupinfoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which locationpopupinfos to delete
     */
    where?: locationpopupinfoWhereInput
    /**
     * Limit how many locationpopupinfos to delete.
     */
    limit?: number
  }

  /**
   * locationpopupinfo without action
   */
  export type locationpopupinfoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the locationpopupinfo
     */
    select?: locationpopupinfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the locationpopupinfo
     */
    omit?: locationpopupinfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: locationpopupinfoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    username: 'username',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const StateinfoScalarFieldEnum: {
    id: 'id',
    statename: 'statename',
    description: 'description',
    svg: 'svg'
  };

  export type StateinfoScalarFieldEnum = (typeof StateinfoScalarFieldEnum)[keyof typeof StateinfoScalarFieldEnum]


  export const LocationpopupinfoScalarFieldEnum: {
    id: 'id',
    locationname: 'locationname',
    statename: 'statename',
    coords: 'coords'
  };

  export type LocationpopupinfoScalarFieldEnum = (typeof LocationpopupinfoScalarFieldEnum)[keyof typeof LocationpopupinfoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
  }

  export type stateinfoWhereInput = {
    AND?: stateinfoWhereInput | stateinfoWhereInput[]
    OR?: stateinfoWhereInput[]
    NOT?: stateinfoWhereInput | stateinfoWhereInput[]
    id?: IntFilter<"stateinfo"> | number
    statename?: StringFilter<"stateinfo"> | string
    description?: StringFilter<"stateinfo"> | string
    svg?: StringFilter<"stateinfo"> | string
    locations?: LocationpopupinfoListRelationFilter
  }

  export type stateinfoOrderByWithRelationInput = {
    id?: SortOrder
    statename?: SortOrder
    description?: SortOrder
    svg?: SortOrder
    locations?: locationpopupinfoOrderByRelationAggregateInput
  }

  export type stateinfoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    statename?: string
    AND?: stateinfoWhereInput | stateinfoWhereInput[]
    OR?: stateinfoWhereInput[]
    NOT?: stateinfoWhereInput | stateinfoWhereInput[]
    description?: StringFilter<"stateinfo"> | string
    svg?: StringFilter<"stateinfo"> | string
    locations?: LocationpopupinfoListRelationFilter
  }, "id" | "statename">

  export type stateinfoOrderByWithAggregationInput = {
    id?: SortOrder
    statename?: SortOrder
    description?: SortOrder
    svg?: SortOrder
    _count?: stateinfoCountOrderByAggregateInput
    _avg?: stateinfoAvgOrderByAggregateInput
    _max?: stateinfoMaxOrderByAggregateInput
    _min?: stateinfoMinOrderByAggregateInput
    _sum?: stateinfoSumOrderByAggregateInput
  }

  export type stateinfoScalarWhereWithAggregatesInput = {
    AND?: stateinfoScalarWhereWithAggregatesInput | stateinfoScalarWhereWithAggregatesInput[]
    OR?: stateinfoScalarWhereWithAggregatesInput[]
    NOT?: stateinfoScalarWhereWithAggregatesInput | stateinfoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"stateinfo"> | number
    statename?: StringWithAggregatesFilter<"stateinfo"> | string
    description?: StringWithAggregatesFilter<"stateinfo"> | string
    svg?: StringWithAggregatesFilter<"stateinfo"> | string
  }

  export type locationpopupinfoWhereInput = {
    AND?: locationpopupinfoWhereInput | locationpopupinfoWhereInput[]
    OR?: locationpopupinfoWhereInput[]
    NOT?: locationpopupinfoWhereInput | locationpopupinfoWhereInput[]
    id?: IntFilter<"locationpopupinfo"> | number
    locationname?: StringFilter<"locationpopupinfo"> | string
    statename?: StringFilter<"locationpopupinfo"> | string
    coords?: StringFilter<"locationpopupinfo"> | string
    state?: XOR<StateinfoScalarRelationFilter, stateinfoWhereInput>
  }

  export type locationpopupinfoOrderByWithRelationInput = {
    id?: SortOrder
    locationname?: SortOrder
    statename?: SortOrder
    coords?: SortOrder
    state?: stateinfoOrderByWithRelationInput
  }

  export type locationpopupinfoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: locationpopupinfoWhereInput | locationpopupinfoWhereInput[]
    OR?: locationpopupinfoWhereInput[]
    NOT?: locationpopupinfoWhereInput | locationpopupinfoWhereInput[]
    locationname?: StringFilter<"locationpopupinfo"> | string
    statename?: StringFilter<"locationpopupinfo"> | string
    coords?: StringFilter<"locationpopupinfo"> | string
    state?: XOR<StateinfoScalarRelationFilter, stateinfoWhereInput>
  }, "id">

  export type locationpopupinfoOrderByWithAggregationInput = {
    id?: SortOrder
    locationname?: SortOrder
    statename?: SortOrder
    coords?: SortOrder
    _count?: locationpopupinfoCountOrderByAggregateInput
    _avg?: locationpopupinfoAvgOrderByAggregateInput
    _max?: locationpopupinfoMaxOrderByAggregateInput
    _min?: locationpopupinfoMinOrderByAggregateInput
    _sum?: locationpopupinfoSumOrderByAggregateInput
  }

  export type locationpopupinfoScalarWhereWithAggregatesInput = {
    AND?: locationpopupinfoScalarWhereWithAggregatesInput | locationpopupinfoScalarWhereWithAggregatesInput[]
    OR?: locationpopupinfoScalarWhereWithAggregatesInput[]
    NOT?: locationpopupinfoScalarWhereWithAggregatesInput | locationpopupinfoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"locationpopupinfo"> | number
    locationname?: StringWithAggregatesFilter<"locationpopupinfo"> | string
    statename?: StringWithAggregatesFilter<"locationpopupinfo"> | string
    coords?: StringWithAggregatesFilter<"locationpopupinfo"> | string
  }

  export type UserCreateInput = {
    email: string
    username: string
    password: string
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    username: string
    password: string
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    username: string
    password: string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type stateinfoCreateInput = {
    statename: string
    description: string
    svg: string
    locations?: locationpopupinfoCreateNestedManyWithoutStateInput
  }

  export type stateinfoUncheckedCreateInput = {
    id?: number
    statename: string
    description: string
    svg: string
    locations?: locationpopupinfoUncheckedCreateNestedManyWithoutStateInput
  }

  export type stateinfoUpdateInput = {
    statename?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    svg?: StringFieldUpdateOperationsInput | string
    locations?: locationpopupinfoUpdateManyWithoutStateNestedInput
  }

  export type stateinfoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    statename?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    svg?: StringFieldUpdateOperationsInput | string
    locations?: locationpopupinfoUncheckedUpdateManyWithoutStateNestedInput
  }

  export type stateinfoCreateManyInput = {
    id?: number
    statename: string
    description: string
    svg: string
  }

  export type stateinfoUpdateManyMutationInput = {
    statename?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    svg?: StringFieldUpdateOperationsInput | string
  }

  export type stateinfoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    statename?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    svg?: StringFieldUpdateOperationsInput | string
  }

  export type locationpopupinfoCreateInput = {
    locationname: string
    coords: string
    state: stateinfoCreateNestedOneWithoutLocationsInput
  }

  export type locationpopupinfoUncheckedCreateInput = {
    id?: number
    locationname: string
    statename: string
    coords: string
  }

  export type locationpopupinfoUpdateInput = {
    locationname?: StringFieldUpdateOperationsInput | string
    coords?: StringFieldUpdateOperationsInput | string
    state?: stateinfoUpdateOneRequiredWithoutLocationsNestedInput
  }

  export type locationpopupinfoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    locationname?: StringFieldUpdateOperationsInput | string
    statename?: StringFieldUpdateOperationsInput | string
    coords?: StringFieldUpdateOperationsInput | string
  }

  export type locationpopupinfoCreateManyInput = {
    id?: number
    locationname: string
    statename: string
    coords: string
  }

  export type locationpopupinfoUpdateManyMutationInput = {
    locationname?: StringFieldUpdateOperationsInput | string
    coords?: StringFieldUpdateOperationsInput | string
  }

  export type locationpopupinfoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    locationname?: StringFieldUpdateOperationsInput | string
    statename?: StringFieldUpdateOperationsInput | string
    coords?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type LocationpopupinfoListRelationFilter = {
    every?: locationpopupinfoWhereInput
    some?: locationpopupinfoWhereInput
    none?: locationpopupinfoWhereInput
  }

  export type locationpopupinfoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type stateinfoCountOrderByAggregateInput = {
    id?: SortOrder
    statename?: SortOrder
    description?: SortOrder
    svg?: SortOrder
  }

  export type stateinfoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type stateinfoMaxOrderByAggregateInput = {
    id?: SortOrder
    statename?: SortOrder
    description?: SortOrder
    svg?: SortOrder
  }

  export type stateinfoMinOrderByAggregateInput = {
    id?: SortOrder
    statename?: SortOrder
    description?: SortOrder
    svg?: SortOrder
  }

  export type stateinfoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StateinfoScalarRelationFilter = {
    is?: stateinfoWhereInput
    isNot?: stateinfoWhereInput
  }

  export type locationpopupinfoCountOrderByAggregateInput = {
    id?: SortOrder
    locationname?: SortOrder
    statename?: SortOrder
    coords?: SortOrder
  }

  export type locationpopupinfoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type locationpopupinfoMaxOrderByAggregateInput = {
    id?: SortOrder
    locationname?: SortOrder
    statename?: SortOrder
    coords?: SortOrder
  }

  export type locationpopupinfoMinOrderByAggregateInput = {
    id?: SortOrder
    locationname?: SortOrder
    statename?: SortOrder
    coords?: SortOrder
  }

  export type locationpopupinfoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type locationpopupinfoCreateNestedManyWithoutStateInput = {
    create?: XOR<locationpopupinfoCreateWithoutStateInput, locationpopupinfoUncheckedCreateWithoutStateInput> | locationpopupinfoCreateWithoutStateInput[] | locationpopupinfoUncheckedCreateWithoutStateInput[]
    connectOrCreate?: locationpopupinfoCreateOrConnectWithoutStateInput | locationpopupinfoCreateOrConnectWithoutStateInput[]
    createMany?: locationpopupinfoCreateManyStateInputEnvelope
    connect?: locationpopupinfoWhereUniqueInput | locationpopupinfoWhereUniqueInput[]
  }

  export type locationpopupinfoUncheckedCreateNestedManyWithoutStateInput = {
    create?: XOR<locationpopupinfoCreateWithoutStateInput, locationpopupinfoUncheckedCreateWithoutStateInput> | locationpopupinfoCreateWithoutStateInput[] | locationpopupinfoUncheckedCreateWithoutStateInput[]
    connectOrCreate?: locationpopupinfoCreateOrConnectWithoutStateInput | locationpopupinfoCreateOrConnectWithoutStateInput[]
    createMany?: locationpopupinfoCreateManyStateInputEnvelope
    connect?: locationpopupinfoWhereUniqueInput | locationpopupinfoWhereUniqueInput[]
  }

  export type locationpopupinfoUpdateManyWithoutStateNestedInput = {
    create?: XOR<locationpopupinfoCreateWithoutStateInput, locationpopupinfoUncheckedCreateWithoutStateInput> | locationpopupinfoCreateWithoutStateInput[] | locationpopupinfoUncheckedCreateWithoutStateInput[]
    connectOrCreate?: locationpopupinfoCreateOrConnectWithoutStateInput | locationpopupinfoCreateOrConnectWithoutStateInput[]
    upsert?: locationpopupinfoUpsertWithWhereUniqueWithoutStateInput | locationpopupinfoUpsertWithWhereUniqueWithoutStateInput[]
    createMany?: locationpopupinfoCreateManyStateInputEnvelope
    set?: locationpopupinfoWhereUniqueInput | locationpopupinfoWhereUniqueInput[]
    disconnect?: locationpopupinfoWhereUniqueInput | locationpopupinfoWhereUniqueInput[]
    delete?: locationpopupinfoWhereUniqueInput | locationpopupinfoWhereUniqueInput[]
    connect?: locationpopupinfoWhereUniqueInput | locationpopupinfoWhereUniqueInput[]
    update?: locationpopupinfoUpdateWithWhereUniqueWithoutStateInput | locationpopupinfoUpdateWithWhereUniqueWithoutStateInput[]
    updateMany?: locationpopupinfoUpdateManyWithWhereWithoutStateInput | locationpopupinfoUpdateManyWithWhereWithoutStateInput[]
    deleteMany?: locationpopupinfoScalarWhereInput | locationpopupinfoScalarWhereInput[]
  }

  export type locationpopupinfoUncheckedUpdateManyWithoutStateNestedInput = {
    create?: XOR<locationpopupinfoCreateWithoutStateInput, locationpopupinfoUncheckedCreateWithoutStateInput> | locationpopupinfoCreateWithoutStateInput[] | locationpopupinfoUncheckedCreateWithoutStateInput[]
    connectOrCreate?: locationpopupinfoCreateOrConnectWithoutStateInput | locationpopupinfoCreateOrConnectWithoutStateInput[]
    upsert?: locationpopupinfoUpsertWithWhereUniqueWithoutStateInput | locationpopupinfoUpsertWithWhereUniqueWithoutStateInput[]
    createMany?: locationpopupinfoCreateManyStateInputEnvelope
    set?: locationpopupinfoWhereUniqueInput | locationpopupinfoWhereUniqueInput[]
    disconnect?: locationpopupinfoWhereUniqueInput | locationpopupinfoWhereUniqueInput[]
    delete?: locationpopupinfoWhereUniqueInput | locationpopupinfoWhereUniqueInput[]
    connect?: locationpopupinfoWhereUniqueInput | locationpopupinfoWhereUniqueInput[]
    update?: locationpopupinfoUpdateWithWhereUniqueWithoutStateInput | locationpopupinfoUpdateWithWhereUniqueWithoutStateInput[]
    updateMany?: locationpopupinfoUpdateManyWithWhereWithoutStateInput | locationpopupinfoUpdateManyWithWhereWithoutStateInput[]
    deleteMany?: locationpopupinfoScalarWhereInput | locationpopupinfoScalarWhereInput[]
  }

  export type stateinfoCreateNestedOneWithoutLocationsInput = {
    create?: XOR<stateinfoCreateWithoutLocationsInput, stateinfoUncheckedCreateWithoutLocationsInput>
    connectOrCreate?: stateinfoCreateOrConnectWithoutLocationsInput
    connect?: stateinfoWhereUniqueInput
  }

  export type stateinfoUpdateOneRequiredWithoutLocationsNestedInput = {
    create?: XOR<stateinfoCreateWithoutLocationsInput, stateinfoUncheckedCreateWithoutLocationsInput>
    connectOrCreate?: stateinfoCreateOrConnectWithoutLocationsInput
    upsert?: stateinfoUpsertWithoutLocationsInput
    connect?: stateinfoWhereUniqueInput
    update?: XOR<XOR<stateinfoUpdateToOneWithWhereWithoutLocationsInput, stateinfoUpdateWithoutLocationsInput>, stateinfoUncheckedUpdateWithoutLocationsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type locationpopupinfoCreateWithoutStateInput = {
    locationname: string
    coords: string
  }

  export type locationpopupinfoUncheckedCreateWithoutStateInput = {
    id?: number
    locationname: string
    coords: string
  }

  export type locationpopupinfoCreateOrConnectWithoutStateInput = {
    where: locationpopupinfoWhereUniqueInput
    create: XOR<locationpopupinfoCreateWithoutStateInput, locationpopupinfoUncheckedCreateWithoutStateInput>
  }

  export type locationpopupinfoCreateManyStateInputEnvelope = {
    data: locationpopupinfoCreateManyStateInput | locationpopupinfoCreateManyStateInput[]
    skipDuplicates?: boolean
  }

  export type locationpopupinfoUpsertWithWhereUniqueWithoutStateInput = {
    where: locationpopupinfoWhereUniqueInput
    update: XOR<locationpopupinfoUpdateWithoutStateInput, locationpopupinfoUncheckedUpdateWithoutStateInput>
    create: XOR<locationpopupinfoCreateWithoutStateInput, locationpopupinfoUncheckedCreateWithoutStateInput>
  }

  export type locationpopupinfoUpdateWithWhereUniqueWithoutStateInput = {
    where: locationpopupinfoWhereUniqueInput
    data: XOR<locationpopupinfoUpdateWithoutStateInput, locationpopupinfoUncheckedUpdateWithoutStateInput>
  }

  export type locationpopupinfoUpdateManyWithWhereWithoutStateInput = {
    where: locationpopupinfoScalarWhereInput
    data: XOR<locationpopupinfoUpdateManyMutationInput, locationpopupinfoUncheckedUpdateManyWithoutStateInput>
  }

  export type locationpopupinfoScalarWhereInput = {
    AND?: locationpopupinfoScalarWhereInput | locationpopupinfoScalarWhereInput[]
    OR?: locationpopupinfoScalarWhereInput[]
    NOT?: locationpopupinfoScalarWhereInput | locationpopupinfoScalarWhereInput[]
    id?: IntFilter<"locationpopupinfo"> | number
    locationname?: StringFilter<"locationpopupinfo"> | string
    statename?: StringFilter<"locationpopupinfo"> | string
    coords?: StringFilter<"locationpopupinfo"> | string
  }

  export type stateinfoCreateWithoutLocationsInput = {
    statename: string
    description: string
    svg: string
  }

  export type stateinfoUncheckedCreateWithoutLocationsInput = {
    id?: number
    statename: string
    description: string
    svg: string
  }

  export type stateinfoCreateOrConnectWithoutLocationsInput = {
    where: stateinfoWhereUniqueInput
    create: XOR<stateinfoCreateWithoutLocationsInput, stateinfoUncheckedCreateWithoutLocationsInput>
  }

  export type stateinfoUpsertWithoutLocationsInput = {
    update: XOR<stateinfoUpdateWithoutLocationsInput, stateinfoUncheckedUpdateWithoutLocationsInput>
    create: XOR<stateinfoCreateWithoutLocationsInput, stateinfoUncheckedCreateWithoutLocationsInput>
    where?: stateinfoWhereInput
  }

  export type stateinfoUpdateToOneWithWhereWithoutLocationsInput = {
    where?: stateinfoWhereInput
    data: XOR<stateinfoUpdateWithoutLocationsInput, stateinfoUncheckedUpdateWithoutLocationsInput>
  }

  export type stateinfoUpdateWithoutLocationsInput = {
    statename?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    svg?: StringFieldUpdateOperationsInput | string
  }

  export type stateinfoUncheckedUpdateWithoutLocationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    statename?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    svg?: StringFieldUpdateOperationsInput | string
  }

  export type locationpopupinfoCreateManyStateInput = {
    id?: number
    locationname: string
    coords: string
  }

  export type locationpopupinfoUpdateWithoutStateInput = {
    locationname?: StringFieldUpdateOperationsInput | string
    coords?: StringFieldUpdateOperationsInput | string
  }

  export type locationpopupinfoUncheckedUpdateWithoutStateInput = {
    id?: IntFieldUpdateOperationsInput | number
    locationname?: StringFieldUpdateOperationsInput | string
    coords?: StringFieldUpdateOperationsInput | string
  }

  export type locationpopupinfoUncheckedUpdateManyWithoutStateInput = {
    id?: IntFieldUpdateOperationsInput | number
    locationname?: StringFieldUpdateOperationsInput | string
    coords?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}