import { atom, Badge, Button, Heading, Row, Stack, Text, read, set, update } from 'orca'

const count = atom(0)

export default function Panel() {
  const value = read(count)
  return (
    <Stack gap="md">
      <Row justify="between">
        <Heading>Counter</Heading>
        <Badge tone={value > 0 ? 'accent' : 'neutral'}>{value}</Badge>
      </Row>
      <Row gap="xs">
        <Button onPress={() => update(count, (n) => n + 1)}>Add one</Button>
        <Button variant="ghost" onPress={() => set(count, 0)}>
          Reset
        </Button>
      </Row>
      <Text muted size="xs">
        Edit src/panel.tsx and save: Orca reloads the panel. No build step.
      </Text>
    </Stack>
  )
}
