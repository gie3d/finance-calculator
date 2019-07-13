import React from 'react';

import InputRow from '../../Components/InputRow';

export default class RetirementInvestmentPlan extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			initialBudget: 0,
			investPerMonth: 0,
			totalYears: 0,
			expectedPercentageProfitPerYear: 0,
		};
	}

	onChange = (key, value) => {
		this.setState({
			[key]: value,
		});
	};

	generate = () => {
		const initialBudget = parseInt(this.state.initialBudget);
		const investPerMonth = parseInt(this.state.investPerMonth);
		const totalYears = parseInt(this.state.totalYears);
		const expectedPercentageProfitPerYear = parseInt(this.state.expectedPercentageProfitPerYear);
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
			<section className="section">
				<div className="container">
					<h1 className="title">Retirement Planning</h1>
					<p className="subtitle">version 0.0.1</p>
					<hr />
					<div className="columns">
						<div className="column is-4">
							<div>
								<InputRow
									title="เงินลงทุนเริ่มต้น"
									labelSize="s"
									placeholder="เงินลงทุนเริ่มต้น"
									keyProps="initialBudget"
									onInputChange={this.onChange}
									value={this.state.initialBudget}
									disabled={false}
									isMandatory={false}
								/>
							</div>
							<div className="field">
								<InputRow
									title="เงินลงทุนต่อเดือน"
									labelSize="s"
									placeholder="เงินลงทุนต่อเดือน"
									keyProps="investPerMonth"
									onInputChange={this.onChange}
									value={this.state.investPerMonth}
									disabled={false}
									isMandatory={false}
								/>
							</div>
							<div className="field">
								<InputRow
									title="จำนวนปี"
									labelSize="s"
									placeholder="จำนวนปี"
									keyProps="totalYears"
									onInputChange={this.onChange}
									value={this.state.totalYears}
									disabled={false}
									isMandatory={false}
								/>
							</div>
							<div className="field">
								<InputRow
									title="อัตราเติบโตของการลงทุนที่คาดหวัง (%)"
									labelSize="s"
									placeholder="อัตราเติบโตของการลงทุนที่คาดหวัง (%)"
									keyProps="expectedPercentageProfitPerYear"
									onInputChange={this.onChange}
									value={this.state.expectedPercentageProfitPerYear}
									disabled={false}
									isMandatory={false}
								/>
							</div>
						</div>
						<div className="column is-8">
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
						</div>
					</div>
				</div>
			</section>
		);
	}
}
