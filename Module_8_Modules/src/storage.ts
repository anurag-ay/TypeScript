export default class Store {}

// these are the implemetation details
// we don't want to export them.
class Compressor {}
class Encryptor {}

export enum Format {
  Raw,
  Coppressed,
}
