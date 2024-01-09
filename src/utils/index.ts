import { JSEncrypt } from 'jsencrypt'

export function RSAencrypt(pwd:string, publicKey:string) {
  let jse = new JSEncrypt()
  jse.setPublicKey(publicKey)
  return jse.encrypt(pwd)
}
