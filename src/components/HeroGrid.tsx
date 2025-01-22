function HeroGrid() {
	return (
		<div className="w-full  relative h-full">
            <ResponsiveGrid/>
		</div>
	);
}

const ResponsiveGrid = () => {
  return (
    <div className="grid grid-cols-[repeat(4,1fr)] gap-2 *:rounded-lg h-full">
      <div className="p-4 text-center text-white bg-blue-500">Item 1</div>
      <div className="p-4 text-center text-white bg-blue-500">Item 2</div>
      <div className="p-4 text-center text-white bg-blue-500">Item 3</div>
      <div className="p-4 text-center text-white bg-blue-500">Item 4</div>
      <div className="p-4 text-center text-white bg-blue-500">Item 5</div>
      <div className="p-4 text-center text-white bg-blue-500">Item 6</div>
      <div className="p-4 text-center text-white bg-blue-500">Item 7</div>
      <div className="p-4 text-center text-white bg-blue-500">Item 8</div>
      <div className="p-4 text-center text-white bg-blue-500">Item 9</div>
      <div className="p-4 text-center text-white bg-blue-500">Item 10</div>
      <div className="p-4 text-center text-white bg-blue-500">Item 11</div>
      <div className="p-4 text-center text-white bg-blue-500">Item 12</div>
      <div className="p-4 text-center text-white bg-blue-500">Item 13</div>
      <div className="p-4 text-center text-white bg-blue-500">Item 14</div>
      <div className="p-4 text-center text-white bg-blue-500">Item 15</div>
      <div className="p-4 text-center text-white bg-blue-500">Item 16</div>
    </div>
  );
};



export default HeroGrid;
