

import React, { useEffect } from 'react'
import { useState } from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import RightSideCategoryFilter from './RightSideCategoryFilter'
import axios from 'axios'

const priceRanges = [
    { id: "1-250", label: "Rs.0 to Rs.250" , up:"1" , down:"250" },
    { id: "251-500", label: "Rs.251 to Rs.500" , up:"251" , down:"500" },
    { id: "501-750", label: "Rs.501 to Rs.750" , up:"501" , down:"750"},
    { id: "751-1000", label: "Rs.751 to Rs.1000" , up:"751" , down:"1000"},
    { id: "1000", label: "Rs.1000 and above" , up:"1000" , down:"" },
  ];


  const discountedPercentage = [
    { id: "5p", label: "5% and above",above:'5' },
    { id: "10p", label: "10% and above" ,above:'10' },
    { id: "15p", label: "15% and above" ,above:'15' },
    { id: "20p", label: "20% and above" ,above:'20' },

  ];


  const Rating = [
    { id: "4stars", label: "4★ & above", stars:"4" },
    { id: "3stars", label: "3★ & above" ,stars:"3" },
    { id: "2stars", label: "2★ & above" ,stars:"2" },
    { id: "1stars", label: "1★ & above" ,stars:"1" },

  ];

  
export default function LeftSideCategoryFilter({filterCategory,setFilterCategory, filterBrand, setFilterBrand, setFilterDiscount,setFilterPrice,setFilterRating }) {

    var filterCategories= (category_slug)=>{
        if(filterCategory.includes(category_slug)){
            filterCategory = filterCategory.filter((value) => {
                if(value != category_slug){
                    return value;
                }
            })
        } else {
            filterCategory.push(category_slug);
        }

        const finalData = [...filterCategory];

    
    console.log(filterCategory);
    setFilterCategory(finalData);
    }


    var filterBrands= (brand)=>{
        if(filterBrand.includes(brand)){
            filterBrand = filterBrand.filter((value) => {
                if(value != brand){
                    return value;
                }
            })
        } else {
            filterBrand.push(brand);
        }

        const finalData = [...filterBrand];

    
    console.log(filterBrand);
    setFilterBrand(finalData);
    }
   
    const[categories, setCategories]=useState([]);
    useEffect(()=>{
        axios.get('https://wscubetech.co/ecommerce-api/categories.php').
        then((sucess)=>{
            setCategories(sucess.data.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    },[]);


    const[brands, setBrands]=useState([]);
    useEffect(()=>{
        axios.get('https://wscubetech.co/ecommerce-api/brands.php').
        then((sucess)=>{
            setBrands(sucess.data.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    },[]);


  return (
    <>
         <form className="hidden lg:block">
           
           
            <Disclosure  as="div" className="border-b border-gray-200 py-6">
                <h3 className="-my-3 flow-root">
                <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                    <span className="font-medium text-gray-900">Categories</span>
                    <span className="ml-6 flex items-center">
                    <PlusIcon aria-hidden="true" className="size-5 group-data-[open]:hidden" />
                    <MinusIcon aria-hidden="true" className="size-5 group-[&:not([data-open])]:hidden" />
                    </span>
                </DisclosureButton>
                </h3>
                <DisclosurePanel className="pt-6">
                <div className="space-y-4">
                {categories.map((value,index) => (
                    <div key={index} className="flex gap-3">
                        <div className="flex h-5 shrink-0 items-center">
                        <div className="group grid size-4 grid-cols-1">
                            <input
                            onClick={()=>{
                                filterCategories(value.slug)
                            }}
                            defaultValue=""
                            defaultChecked=""
                            id={`filter-${value.id}`}
                            name=""
                            type="checkbox"
                            className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                            />
                            <svg
                            fill="none"
                            viewBox="0 0 14 14"
                            className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                            >
                            <path
                                d="M3 8L6 11L11 3.5"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="opacity-0 group-has-[:checked]:opacity-100"
                            />
                            <path
                                d="M3 7H11"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="opacity-0 group-has-[:indeterminate]:opacity-100"
                            />
                            </svg>
                        </div>
                        </div>
                        <label htmlFor={`filter-${value.id}`} className="text-sm text-gray-600">
                        {value.name}
                        </label>
                    </div>
                    ))}
                </div>

                
                </DisclosurePanel>
            </Disclosure>

            <Disclosure  as="div" className="border-b border-gray-200 py-6">
                <h3 className="-my-3 flow-root">
                <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                    <span className="font-medium text-gray-900">Brands</span>
                    <span className="ml-6 flex items-center">
                    <PlusIcon aria-hidden="true" className="size-5 group-data-[open]:hidden" />
                    <MinusIcon aria-hidden="true" className="size-5 group-[&:not([data-open])]:hidden" />
                    </span>
                </DisclosureButton>
                </h3>
                <DisclosurePanel className="pt-6">
                <div className="space-y-4">
                {brands.map((value,index) => (
                    <div key={index} className="flex gap-3">
                        <div className="flex h-5 shrink-0 items-center">
                        <div className="group grid size-4 grid-cols-1">
                            <input
                            onClick={()=>{
                                filterBrands(value.slug)
                            }}
                            defaultValue=""
                            defaultChecked=""
                            id={`filter-${value.id}`}
                            name=""
                            type="checkbox"
                            className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                            />
                            <svg
                            fill="none"
                            viewBox="0 0 14 14"
                            className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                            >
                            <path
                                d="M3 8L6 11L11 3.5"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="opacity-0 group-has-[:checked]:opacity-100"
                            />
                            <path
                                d="M3 7H11"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="opacity-0 group-has-[:indeterminate]:opacity-100"
                            />
                            </svg>
                        </div>
                        </div>
                        <label htmlFor={`filter-${value.id}`} className="text-sm text-gray-600">
                        {value.name}
                        </label>
                    </div>
                    ))}
                </div>

                
                </DisclosurePanel>
            </Disclosure>
     

            <Disclosure  as="div" className="border-b border-gray-200 py-6">
                <h3 className="-my-3 flow-root">
                <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                    <span className="font-medium text-gray-900">Price Range</span>
                    <span className="ml-6 flex items-center">
                    <PlusIcon aria-hidden="true" className="size-5 group-data-[open]:hidden" />
                    <MinusIcon aria-hidden="true" className="size-5 group-[&:not([data-open])]:hidden" />
                    </span>
                </DisclosureButton>
                </h3>
                <DisclosurePanel className="pt-6">
                
                    {priceRanges.map((v,i)=>{
                        return(

                            <>
                              <div className="space-y-4 mb-2" onClick={()=>{
                                    setFilterPrice([v.up,v.down]);
                              }}>
                              <div class="flex items-center gap-x-3">
                                    <input id={v.id} name="push-notifications" type="radio"  class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"/
                                    >
                                    <label for={v.id} class="block text-sm/6 font-small text-gray-900">{v.label}</label>
                                </div>
                              </div>
                                

                                
                            
                            </>
                        )
                    })}



                
                </DisclosurePanel>
            </Disclosure>

            <Disclosure  as="div" className="border-b border-gray-200 py-6">
                <h3 className="-my-3 flow-root">
                <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                    <span className="font-medium text-gray-900">Discounted Price Range</span>
                    <span className="ml-6 flex items-center">
                    <PlusIcon aria-hidden="true" className="size-5 group-data-[open]:hidden" />
                    <MinusIcon aria-hidden="true" className="size-5 group-[&:not([data-open])]:hidden" />
                    </span>
                </DisclosureButton>
                </h3>
                <DisclosurePanel className="pt-6">
                
                    {discountedPercentage.map((v,i)=>{
                        return(

                            <>
                                
                              <div className="space-y-4 mb-2"></div>
                                <div  className="flex gap-3">
                                <div class="flex items-center gap-x-3" onClick={()=>{
                                    setFilterDiscount([v.above,'']);
                                }}>
                                    <input id={v.id} name="push-notifications" type="radio"  class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"/
                                    >
                                    <label for={v.id} class="block text-sm/6 font-small text-gray-900">{v.label}</label>
                                </div>
                                </div>

                                
                            
                            </>
                        )
                    })}



                
                </DisclosurePanel>
            </Disclosure>
            
            <Disclosure  as="div" className="border-b border-gray-200 py-6">
                <h3 className="-my-3 flow-root">
                <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                    <span className="font-medium text-gray-900">Ratings</span>
                    <span className="ml-6 flex items-center">
                    <PlusIcon aria-hidden="true" className="size-5 group-data-[open]:hidden" />
                    <MinusIcon aria-hidden="true" className="size-5 group-[&:not([data-open])]:hidden" />
                    </span>
                </DisclosureButton>
                </h3>
                <DisclosurePanel className="pt-6">
                
                    {Rating.map((v,i)=>{
                        return(

                            <>
                              <div className="space-y-4 mb-2">
                              <div class="flex items-center gap-x-3" onClick={()=>{
                                setFilterRating(v.stars);
                              }}>
                                    <input id={v.id} name="push-notifications" type="radio"  class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"/
                                    >
                                    <label for={v.id} class="block text-sm/6 font-small text-gray-900">{v.label}</label>
                                </div>
                              </div>
                                
                            

                                
                            
                            </>
                        )
                    })}



                
                </DisclosurePanel>
            </Disclosure>
        </form>
    </>
  )
}

