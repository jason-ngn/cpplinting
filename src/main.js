import * as core from '@actions/core'
import { getExecOutput } from '@actions/exec'

/**
 * The main function for the action.
 *
 * @returns {Promise<void>} Resolves when the action is complete.
 */
export async function run() {
  try {
    const { stdout } = await getExecOutput('cpplint *.cc *.h')
    core.info(stdout)
  } catch (err) {
    core.error(err)
    core.setFailed('Your code is not linted properly.')
  }
}
