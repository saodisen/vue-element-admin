import ukeyManage from './Syunew3'

const ukey = new ukeyManage()

export function getUkeyObj() {
  if (ukey != undefined) {
    return ukey.Socket_UK
  } else {
    return new ukeyManage().Socket_UK
  }
}

export function ResetOrder() {
  ukey.ResetOrder()
}

/**
 * 查找ukey
 * @param {*} value
 */
export function getUKeyPort(value) {
  try {
    ukey.FindPort(value)
  } catch (e) {}
}

/**
 * 查找Ukey芯片唯一ID
 * @param {ukey路径}} devicePath
 */
export function getChipID(devicePath) {
  try {
    ukey.GetChipID(devicePath)
  } catch (e) {
    throw e
  }
}

/**
 * 设置ukeyPin值
 * @param {*} oldPin
 * @param {*} newPin
 * @param {*} devicePath
 */
export function setPin(oldPin, newPin, devicePath) {
  try {
    ukey.YtSetPin(oldPin, newPin, devicePath)
  } catch (e) {
    throw e
  }
}

/**
 * 对数据进行签名
 * @param {要签名的数据} signMsg
 * @param {*} pin
 * @param {*} devicePath
 */
export function sign(signMsg, pin, devicePath) {
  try {
    ukey.YtSign(signMsg, pin, devicePath)
  } catch (e) {
    throw e
  }
}

/**
 * 加密数据
 * @param {*} encString
 * @param {*} devicePath
 */
export function sM2_EncString(encString, devicePath) {
  try {
    ukey.SM2_EncString(encString, devicePath)
  } catch (e) {
    throw e
  }
}

/**
 * 用对应的pin值解密数据
 * @param {*} decString
 * @param {*} pin
 * @param {*} devicePath
 */
export function sM2_DecString(decString, pin, devicePath) {
  try {
    ukey.SM2_DecString(decString, pin, devicePath)
  } catch (e) {
    throw e
  }
}

/**
 * 生成密钥对
 * @param {*} devicePath
 */
export function genKeyPair(devicePath) {
  try {
    ukey.StarGenKeyPair(devicePath)
  } catch (e) {
    throw e
  }
}

/**
 * 获取私钥
 */
export function genPriKey() {
  try {
    ukey.GenPriKey()
  } catch (e) {
    throw e
  }
}

/**
 * 获取X公钥
 */
export function genPubKeyX() {
  try {
    ukey.GenPubKeyX()
  } catch (e) {
    throw e
  }
}

/**
 * 获取Y公钥
 */
export function genPubKeyY() {
  try {
    ukey.GenPubKeyY()
  } catch (e) {
    throw e
  }
}

/**
 * 把用户信息和密钥设置到ukey中
 * @param {*} priKey
 * @param {*} pubKeyX
 * @param {*} pubKeyY
 * @param {*} userInfo
 * @param {*} devicePath
 */
export function setSM2KeyPair(priKey, pubKeyX, pubKeyY, userInfo, devicePath) {
  try {
    ukey.Set_SM2_KeyPair(priKey, pubKeyX, pubKeyY, userInfo, devicePath)
  } catch (e) {
    throw e
  }
}

/**
 * 获取设置在ukey中的公钥X
 */
export function getPubKeyX() {
  try {
    ukey.GetPubKeyX()
  } catch (e) {
    throw e
  }
}

/**
 * 获取设置在ukey中的公钥Y
 */
export function getPubKeyY() {
  try {
    ukey.GetPubKeyY()
  } catch (e) {
    throw e
  }
}

/**
 * 获取设置在
 * @param {*} devicePath 
 */
export function getSm2UserInfo(devicePath) {
  try {
    ukey.GetSm2UserName(devicePath)
  } catch (e) {
    throw e
  }
}