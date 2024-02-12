import { DeleteNoteButton, NewNotButton } from '@/components'
import { ComponentProps } from 'react'

export const ActionButtonRow = ({ ...props }: ComponentProps<'div'>) => {
  return (
    <div {...props}>
      <NewNotButton />
      <DeleteNoteButton />
    </div>
  )
}
