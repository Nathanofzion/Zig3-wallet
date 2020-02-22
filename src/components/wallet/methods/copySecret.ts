import copy from 'copy-to-clipboard'

import { handleError } from '@services/error'
import { stretchPincode } from '@services/argon2'
import { decrypt } from '@services/tweetnacl'

export default async function copySecret(e: Event) {
  try {
    e.preventDefault()

    const pincode = await this.setPrompt('Enter your keystore pincode')
    const pincode_stretched = await stretchPincode(pincode, this.account.publicKey)

    this.error = null

    const secret = decrypt(
      this.account.keystore,
      this.account.publicKey,
      pincode_stretched
    )

    copy(secret)
  }

  catch (err) {
    this.error = handleError(err)
  }
}