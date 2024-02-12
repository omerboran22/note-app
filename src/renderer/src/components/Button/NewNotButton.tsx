import { createEmpytNote } from '@renderer/store'
import { useSetAtom } from 'jotai'
import { LuFileSignature } from 'react-icons/lu'
import { ActionButton, ActionButtonProps } from './ActionButton'
export const NewNotButton = ({ ...props }: ActionButtonProps) => {
  const createEmptyNote = useSetAtom(createEmpytNote)
  const handleCreation = () => {
    createEmptyNote()
  }
  return (
    <ActionButton {...props} onClick={handleCreation}>
      <LuFileSignature className="w-4 h-4 text-zinc-300" />
    </ActionButton>
  )
}
