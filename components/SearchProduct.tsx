"use client"
import React, { Fragment } from 'react'
import { SearchProductProps } from '@/types'
import { useState } from 'react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { Combobox, Transition } from '@headlessui/react'
import { products } from '@/constants'
import { firstLetterToUpperCase } from '@/utils'
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const SearchProduct = ({ product, setProduct }: SearchProductProps) => {
    const [query, setQuery] = useState('')

    const filteredproducts =
        query === ''
            ? products
            : products.filter((product) => {
                return product.name.toLowerCase().replace(/\s+/g,"")
                .includes(query.toLowerCase().replace(/\s+/g,""))
            })
    return (
        <Combobox as="div" value={product} onChange={setProduct}>

            <div className="relative ">
                <Combobox.Input
                    className="w-full rounded-full border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-lg ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-inset focus:ring-light-green sm:text-md sm:leading-6"
                    onChange={(event) => setQuery(event.target.value)}
                    displayValue={(product) => firstLetterToUpperCase(product?.name)}
                />
                <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                    <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </Combobox.Button>



                {filteredproducts.length > 0 && (
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                        afterLeave={() => setQuery('')}
                    >
                        <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1  font-serif shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {filteredproducts.map((product) => (
                                <Combobox.Option
                                    key={product.id}
                                    value={product}
                                    className={({ active }) =>
                                        classNames(
                                            'relative cursor-default select-none py-2 pl-3 pr-9',
                                            active ? 'bg-light-green text-black' : 'text-gray-900'
                                        )
                                    }
                                >
                                    {({ active, selected }) => (
                                        <>
                                            <span className={classNames('block truncate', selected && 'font-semibold')}>{firstLetterToUpperCase(product.name)}</span>

                                            {selected && (
                                                <span
                                                    className={classNames(
                                                        'absolute inset-y-0 right-0 flex items-center pr-4',
                                                        active ? 'text-white' : 'text-green'
                                                    )}
                                                >
                                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                </span>
                                            )}
                                        </>
                                    )}
                                </Combobox.Option>
                            ))}
                        </Combobox.Options>
                    </Transition>
                )

                }




            </div>
        </Combobox>
    )
}

export default SearchProduct