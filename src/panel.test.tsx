// `orca plugin test .` runs this in Node with the same runtime and checks Orca uses.
import { assert, mount, test } from 'orca/testing'
import * as panel from './panel'

test('counts presses and resets', async () => {
  const view = await mount(panel)
  assert.equal(view.find({ role: 'status' })?.text, '0')

  await view.press({ text: 'Add one' })
  await view.press({ text: 'Add one' })
  assert.equal(view.find({ role: 'status' })?.text, '2')

  await view.press({ text: 'Reset' })
  assert.equal(view.find({ role: 'status' })?.text, '0')
  assert.deepEqual(view.errors, [])
  await view.unmount()
})
