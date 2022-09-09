import { TokenRequestOptions } from "../authentication"
import { GenericId, ProtectedRouteOptions, TokenPair } from "../common"

export type BaseGetFunction<T> = (
  baseUrl: string,
  options: ProtectedRouteOptions
) => Promise<T[]>

export type BaseGetSpecificFunction<T> = (
  baseUrl: string,
  options: ProtectedRouteOptions<GenericId>
) => Promise<T>

export type BaseCreateFunction<T, U> = (
  baseUrl: string,
  options: ProtectedRouteOptions<U>
) => Promise<T>

export type BaseUpdateFunction<T, U> = (
  baseUrl: string,
  options: ProtectedRouteOptions<U>
) => Promise<T>

export type BaseDeleteFunction<T> = (
  baseUrl: string,
  options: ProtectedRouteOptions<GenericId>
) => Promise<T>

export type BaseGetTokenFunction = (
  baseUrl: string,
  options: TokenRequestOptions
) => Promise<TokenPair>

export type ClientGetFunction<T> = (
  options: ProtectedRouteOptions
) => Promise<T[]>

export type ClientGetSpecificFunction<T> = (
  options: ProtectedRouteOptions<GenericId>
) => Promise<T>

export type ClientCreateFunction<T, U> = (
  options: ProtectedRouteOptions<U>
) => Promise<T>

export type ClientUpdateFunction<T, U> = (
  options: ProtectedRouteOptions<U>
) => Promise<T>

export type ClientDeleteFunction<T> = (
  options: ProtectedRouteOptions<GenericId>
) => Promise<T>

export type ClientGetTokenFunction = (
  options: TokenRequestOptions
) => Promise<TokenPair>
