import fontColorContrast from "font-color-contrast";
import { useRef } from "react";
import { ColorPicker, useColor } from "react-color-palette";
import { useSearchParams } from "react-router";
import { colName, setTheme } from "../../theme_store/themestore";

let MobileUiChanger = ({
	index,
	name,
	color: defalutCol,
	selected,
	setSelected,
	setter,
}: {
	index: number;
	color: string;
	name: string;
	selected: number;
	setSelected: (num: number) => any;
	setter: (hex: string) => any;
}) => {
	let divRef = useRef<HTMLDivElement>(null);

	let contrast = fontColorContrast(defalutCol);
	let [color, setColor] = useColor(defalutCol);
	let [search, setSearch] = useSearchParams();

    let bodyOpener = ()=>{
        if (selected == index) {
            setSelected(null);
            return;
        }
        setSelected(index);
    }

	return (
		<div
			className="w-full   cursor-pointer duration-150  p-2 !py-4 text-center rounded-lg"
			ref={divRef}
			onClick={(e) => {
				e.stopPropagation();
bodyOpener()				
			}}
			style={{
				background: defalutCol,
				color: contrast,
			}}
		>
			{/* {"mobile_Changer_" + index} */}
			{name}

			{selected == index ? (
				<div
					className="flex justify-center"
					onClick={(e) => {
						e.stopPropagation();
                        bodyOpener()				
                            
					}}
				>
					<div className="w-[250px]  bg-neutral-400" onClick={(e)=>{
                        e.stopPropagation()
                    }}>
						<ColorPicker
							color={color}
							onChange={setColor}
							hideAlpha
							height={200}
							onChangeComplete={(e) => {
								setter(e.hex);
								let myString = setTheme(
									e.hex,
									name.toLowerCase() as colName,
									search
								);
								setSearch({ color: myString });
							}}
						/>
					</div>
				</div>
			) : null}
		</div>
	);
};

export default MobileUiChanger