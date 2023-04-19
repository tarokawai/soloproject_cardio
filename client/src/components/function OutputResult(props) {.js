function OutputResult(props) {
  let sex;
  let egfr;

  if (props.male == 'checked'){
    sex = 1;
  }
  if (props.female == 'checked'){
    sex = 0.739;
  }

  //四捨五入
  egfr = (194 * (props.cr**(-1.094)) * (props.age**(-0.287)) * parseFloat(sex)) * 100;
  egfr = Math.round(egfr) / 100;

  if (isNaN(egfr)){
    return <p>全ての項目を入力・選択して下さい</p>
  } else {
    return <p>eGFR: {egfr} mL/分/1.73m<sup>2</sup></p>;
  }

}

class CalceGFR extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    this.state = {cr: '',
                  age: '',
                  male: '',
                  female: ''
                  };
  }

  handleChange(e, ctl) {
    switch (ctl) {
      case 'cr':
        this.setState({cr: e.target.value});
        break;
      case 'age':
        this.setState({age: e.target.value});
        break;
      case 'male':
        this.setState({male: 'checked', female: ''});
        break;
      case 'female':
        this.setState({female: 'checked', male: ''});
        break;
      default:
    }
  }

  render() {
    const cr = this.state.cr;
    const age = this.state.age;
    const male = this.state.male;
    const female = this.state.female;

    return (
      <fieldset>
        <legend>eGFR 自動計算ツール</legend>
        <table>
          <thead>
          </thead>
          <tbody>
          <tr>
            <td>血清クレアチニン値:</td>
            <td>
              <input size='10' value={cr} onChange={(e) => this.handleChange(e, 'cr')} />
            </td>
            <td>
              mg/dl
            </td>
          </tr>
          <tr>
            <td>年齢:</td>
            <td>
              <input size='10' value={age} onChange={(e) => this.handleChange(e, 'age')} />
            </td>
            <td>
              歳
            </td>
          </tr>
          <tr>
            <td>性別:</td>
            <td>
              <input type="radio" name="sex" checked={male} onChange={(e) => this.handleChange(e, 'male')} />
              <label>男</label>
              <input type="radio" name="sex" checked={female} onChange={(e) => this.handleChange(e, 'female')} />
              <label>女</label>
            </td>
          </tr>
          </tbody>
        </table>

        <OutputResult cr={parseFloat(cr)} age={parseFloat(age)} male={male} female={female} />
      </fieldset>
    );
  }
}

ReactDOM.render(
  <CalceGFR />,
  document.getElementById('root')
);
View Compiled 



Resources