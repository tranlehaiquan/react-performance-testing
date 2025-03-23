import ListAlertLazyLoad from '@/components/ListAlertLazyLoad'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/lazy-list')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <ListAlertLazyLoad />
  </div>
}
