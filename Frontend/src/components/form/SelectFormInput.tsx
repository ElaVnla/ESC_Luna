import Choices from 'choices.js'
import {type Options as ChoiceOption} from 'choices.js'
import {type ReactNode, useEffect, useRef} from 'react'

export type ChoiceProp = Partial<ChoiceOption> & {
  children: ReactNode
  multiple?: boolean
  className?: string
  value?: string
  onChange?: (text: string) => void
}

const SelectFormInput = ({children, multiple, className, onChange,value, ...choiceOptions}: ChoiceProp) => {
  const selectE = useRef<HTMLSelectElement>(null)
  const choicesInstance = useRef<Choices | null>(null)

  useEffect(() => {
    if (!selectE.current) return

    // Clean up previous instance
    choicesInstance.current?.destroy()

    // Create new Choices instance
    choicesInstance.current = new Choices(selectE.current, {
      ...choiceOptions,
      allowHTML: true,
      shouldSort: false,
    })

    // Listen for change events to call onChange prop
    const el = selectE.current
    const handleChange = (e: Event) => {
      if (!(e.target instanceof HTMLSelectElement)) return
      onChange?.(e.target.value)
    }
    el.addEventListener('change', handleChange)

    // Cleanup on unmount or before re-run
    return () => {
      choicesInstance.current?.destroy()
      el.removeEventListener('change', handleChange)
    }
  }, [children, choiceOptions, onChange])

  // Sync React value to Choices selected option
  useEffect(() => {
    if (value !== undefined && value !== null && choicesInstance.current) {
      choicesInstance.current.setChoiceByValue(value)
    }
  }, [value])


  return (
    <select ref={selectE} multiple={multiple} className={className}>
      {children}
    </select>
  )
}

export default SelectFormInput
