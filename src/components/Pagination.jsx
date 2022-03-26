import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

export default function Pagination({ offset, setOffset }) {
	const handlePrevious = () => {
		if (offset == 0) {
			return;
		}
		setOffset(offset - 5);
	};

	const handleNext = () => {
		setOffset(offset + 5);
	};

	return (
		<div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
			<div className="flex-1 flex justify-between sm:hidden">
				<button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50" onClick={handlePrevious}>
					Previous
				</button>
				<button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50" onClick={handleNext}>
					Next
				</button>
			</div>
			<div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
				<div>
					<b className="text-sm text-gray-700">
						Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of <span className="font-medium">97</span> results
					</b>
				</div>
				<div>
					<nav aria-label="Pagination" className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
						<button
							className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
							onClick={handlePrevious}
						>
							<span className="sr-only">Previous</span>
							<ChevronLeftIcon aria-hidden="true" className="h-5 w-5" />
						</button>
						{/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
						<button
							aria-current="page"
							className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
							onClick={() => setOffset(0)}
						>
							1
						</button>
						<button
							className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
							onClick={() => setOffset(10)}
						>
							2
						</button>
						<button
							className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
							onClick={() => setOffset(20)}
						>
							3
						</button>
						<span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">...</span>
						<button
							className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
							onClick={() => setOffset(70)}
						>
							8
						</button>
						<button
							className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
							onClick={() => setOffset(80)}
						>
							9
						</button>
						<button
							className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
							onClick={() => setOffset(90)}
						>
							10
						</button>
						<button
							className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
							onClick={handleNext}
						>
							<span className="sr-only">Next</span>
							<ChevronRightIcon aria-hidden="true" className="h-5 w-5" />
						</button>
					</nav>
				</div>
			</div>
		</div>
	);
}
