import React, { Component } from 'react';

export default class InputRows extends Component {
	shouldComponentUpdate = nextProps => {
		const result =
			this.props.onInputChange !== nextProps.onInputChange ||
			this.props.isMandatory !== nextProps.isMandatory ||
			this.props.value !== nextProps.value ||
			this.props.error !== nextProps.error ||
			this.props.disabled !== nextProps.disabled ||
			this.props.type !== nextProps.type ||
			this.props.min !== nextProps.min ||
			this.props.max !== nextProps.max ||
			this.props.className !== nextProps.className ||
			this.props.title !== nextProps.title ||
			this.props.placeholder !== nextProps.placeholder ||
			this.props.onKeyPress !== nextProps.onKeyPress;
		// console.log(this.props.title + ': ' + result);

		return result;
	};

	handleInputChange = event => {
		this.props.onInputChange(this.props.keyProps, event.target.value);
	};

	render() {
		var mandatory;
		var inputAlert;
		if (this.props.isMandatory) {
			mandatory = <span style={{ color: 'red' }}> *</span>;
		}

		if ((!this.props.value && this.props.isMandatory) || this.props.error) {
			inputAlert = 'is-danger';
		}

		var disabled;
		if (this.props.disabled) {
			disabled = 'disabled';
		}

		var type = 'text';
		if (this.props.type) {
			type = this.props.type;
		}

		var min;
		if (this.props.min) {
			min = this.props.min;
		}

		var max;
		if (this.props.max) {
			max = this.props.max;
		}

		const moreClasses = this.props.className ? this.props.className : '';

		return (
			<div>
				<label className="label" style={{ color: 'black' }}>
					{this.props.title}
					{mandatory}
				</label>
				<div className="control">
					<input
						className={'input ' + inputAlert + ' ' + moreClasses}
						type={type}
						placeholder={this.props.placeholder}
						value={this.props.value !== null ? this.props.value : ''}
						onChange={this.handleInputChange}
						disabled={disabled}
						minLength={min}
						maxLength={max}
						onKeyPress={this.props.onKeyPress ? this.props.onKeyPress : () => {}}
					/>
				</div>
			</div>
		);
	}
}
