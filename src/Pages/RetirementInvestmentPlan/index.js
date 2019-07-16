import React from 'react';

import InputRow from '../../Components/InputRow';

import ResultTable from './ResultTable';

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
			[key]: value.toLocaleString(),
		});
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
									type="number"
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
									type="number"
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
									type="number"
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
									type="number"
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
							<ResultTable
								initialBudget={this.state.initialBudget}
								investPerMonth={this.state.investPerMonth}
								totalYears={this.state.totalYears}
								expectedPercentageProfitPerYear={this.state.expectedPercentageProfitPerYear}
							/>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
