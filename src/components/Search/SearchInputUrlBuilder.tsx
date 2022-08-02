import FiltersHolder from '@/components/Search/FiltersHolder';
import Range from '@/components/Search/Range';
import RefinementList from '@/components/Search/refinementList';
import ActiveFilters from '@/components/Search/ActiveFilters';
import Image from "next/image";
import Input from '@/components/Search/input';
import { useRouter } from 'next/router'
import { useCurrentRefinements } from 'react-instantsearch-hooks-web';

export default function Example() {
  const { items } = useCurrentRefinements();
  const router = useRouter()

  const handleSearch = () => {
    let typeToNavigateTo = 'search'

    // @TODO: Either force type search (set default lease) or add search page back for multiple type search
    // find alt for "results"?
    const pageDict = {
      'sale': "for-sale",
      'lease': "lease",
      'sold': "results",
      'leased': "results",
    }

    items.forEach(item => {
      if (item.attribute === 'type') {
        if (item.refinements.length > 1) {
          typeToNavigateTo = 'search'
        } else if (item.refinements.length === 1 && item.refinements[0]?.value) {
          typeToNavigateTo = pageDict[item.refinements[0].value as 'sale' | 'lease' | 'sold' | 'leased']
        }
      }
    })

    const newRoute = `/${typeToNavigateTo}${window.location.search}`
    router.push(newRoute)
  }

  return (
    <div>
      <div className="max-w-7xl mx-auto pb-14 ">
        <div className="relative rounded-lg overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/assets/images/banner1.jpg"
              alt="logo"
              layout="fill"
              className="object-cover"
            />
          </div>
          <div className="relative bg-gray-900 bg-opacity-75 py-32 px-6 sm:py-40 sm:px-12 lg:px-16">
            <div className="relative max-w-3xl mx-auto flex flex-col items-center text-center">
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                <span className="block sm:inline">
                  The #1 address for commercial property
                </span>
              </h2>

              <>
                <div className="flex-column relative mx-auto mt-1 max-w-7xl items-center px-6 pt-4">
                  <div className='w-[700px]'>
                    <div className="border-[1px] border-gray-300 rounded-md shadow-md bg-white">
                      <Input />
                      <FiltersHolder>
                        <Range attribute='price' label='Price ($)' />
                        <Range attribute='floorArea' label='Floor Area (sqm)' />
                        <RefinementList attribute='address.suburb' label='Suburb' />
                        <RefinementList attribute='type' label='Type' />
                      </FiltersHolder>
                      <ActiveFilters />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col justify-end">
                    <button onClick={handleSearch} className="w-full mt-2 my-auto h-12 inline-flex items-center justify-center border rounded border-transparent bg-orange text-base  font-medium text-whiteLinen hover:cursor-pointer hover:bg-orange-50 sm:w-auto">
                      Search
                    </button>
                  </div>
                </div>
              </>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
