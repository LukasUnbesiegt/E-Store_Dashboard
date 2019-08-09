import React, { Component } from "react";
import Select from "react-select";
class SelectComp extends Component {
	render() {
		const {
			options,
			placeholder,
			multi = false,
			input,
			customStyles
		} = this.props;

		return (
			<div>
				<Select
					options={options}
					isClearable
					onBlur={() => input.onBlur(input.value)}
					isSearchable
					placeholder={placeholder}
					isMulti={multi}
					onChange={value => {
						input.onChange(value);
					}}
					styles={customStyles}
					value={input.value}
				/>
			</div>
		);
	}
}

export default SelectComp;
