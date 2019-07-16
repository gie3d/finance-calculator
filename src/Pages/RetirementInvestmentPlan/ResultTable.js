import React from 'react';

export default class ResultTable extends React.Component {
	generate = () => {
		const initialBudget = parseInt(this.props.initialBudget);
		const investPerMonth = parseInt(this.props.investPerMonth);
		const totalYears = parseInt(this.props.totalYears);
		const expectedPercentageProfitPerYear = parseInt(this.props.expectedPercentageProfitPerYear);
		let result = [];
		let currentValue = initialBudget;
		let valueWithNoInterest = initialBudget;
		const interest = expectedPercentageProfitPerYear / 100;
		const investPerYear = investPerMonth * 12;
		for (let i = 0; i < totalYears; i++) {
			currentValue += parseInt(currentValue * interest + investPerYear + investPerYear * interest);
			valueWithNoInterest += parseInt(investPerYear);
			if (!isNaN(currentValue)) {
				result.push(
					<tr key={'year' + i}>
						<td>{i + 1}</td>
						<td>{valueWithNoInterest.toLocaleString()}</td>
						<td>{currentValue.toLocaleString()}</td>
					</tr>
				);
			}
		}

		return <tbody>{result.reverse()}</tbody>;
	};

	render() {
		return (
			<table className="table is-fullwidth is-hoverable is-striped is-bordered">
				<thead>
					<tr>
						<th width="10%">ปีที่</th>
						<th width="40%">เงินต้น</th>
						<th width="40%">รวมกำไร</th>
					</tr>
				</thead>
				{this.generate()}
			</table>
		);
	}
}
