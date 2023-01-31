import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

{ /* This is a listbox component that can be used to select an option from a list of options. */ }
{ /* This component is built using HeadlessUI's listbox module. */ }


export const workType = [
	{ id: 1, label: 'Option 1', unavailable: true },
  { id: 2, label: 'Option 2', unavailable: false },
  { id: 3, label: 'Option 3', unavailable: false },
]

export default function WorkListBox() {
 const [selectedWorkType, setSelectedWorkType] = useState(workType[0])

	return(
		<Listbox value={selectedWorkType} onChange={setSelectedWorkType}>
			<Listbox.Button>{selectedWorkType.label}</Listbox.Button>
			<Listbox.Options>
				{workType.map((work) => (
					<Listbox.Option key={work.id} value={work} disabled={work.unavailable}>
						{work.label}
					</Listbox.Option>
				))}
			</Listbox.Options>
		</Listbox>
	)
}
