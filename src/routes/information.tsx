import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/information')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/information"!</div>
}
