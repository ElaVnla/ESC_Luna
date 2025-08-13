import flatpickr from 'flatpickr'
import { Options } from 'flatpickr/dist/types/options'
import { useCallback, useEffect, useRef } from 'react'

type FlatpickrProps = {
  className?: string
  value?: Date | Date[]
  options?: Options
  placeholder?: string
  getValue?: (date: Date | Date[]) => void
}

const normalizeDate = (date: Date): Date => {
  const d = new Date(date)
  d.setHours(12, 0, 0, 0)
  return d
}

const Flatpicker = ({ className, options, placeholder, value, getValue }: FlatpickrProps) => {
  const element = useRef<HTMLInputElement | null>(null)

  const normalizeDate = (date: Date): Date => {
    const d = new Date(date)
    d.setHours(12, 0, 0, 0)
    return d
  }

    const handleDateChange = useCallback(
    (selectedDates: Date[]) => {
      const isRange = options?.mode === 'range'
      const isCompleteRange = selectedDates.length === 2

      if (!isRange || isCompleteRange) {
        let newDate: Date | Date[] =
          selectedDates.length === 1
            ? normalizeDate(selectedDates[0])
            : selectedDates.map(normalizeDate)
        getValue?.(newDate)
      }
    },
    [getValue, options?.mode],
  )


  useEffect(() => {
    if (element.current) {
      const instance = flatpickr(element.current, {
        defaultDate: value,
        ...options,
        onChange: (selectedDates) => handleDateChange(selectedDates),
      })

      return () => {
        instance.destroy()
      }
    }
  }, [value, options, handleDateChange])

    return <input ref={element} className={`form-control flatpickr ${className}`} placeholder={placeholder} />
}

export default Flatpicker
