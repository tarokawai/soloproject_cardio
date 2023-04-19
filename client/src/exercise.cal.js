// Metabolic w\equivlent of Task
// 70kg, 40 male
//METs x 3.5 x (your body weight in kilograms) / 200 = calories burned per minute.
//kg = lbs x 0.453
//walk  5.0, Run 9.0, Bike 10.0, other 7.0

//cal = ((METs x 3.5 x (lbs x 0.45) / 200) x min

//For men: BMR = 66.5 + (13.75 × weight in kg) + (5.003 × height in cm) - (6.75 × age)

66.47 +
(6.24 × weight in Ibs)
+ (12.7 × height in inches)
- (6.755 × age)
// cm = inch X 0.254   ft = 30.48 cm
// cm = ft X 30.48 + inch X 0.254)

//For women: BMR = 655.1 + (9.563 × weight in kg) + (1.850 × height in cm) - (4.676 × age)

function yourBmr (ageGroup, height, weight, sex, ){
    let bmr;
    if (sex == "male") {
    bmr = 665.1 + (13.75 * weight * 0.453) + (1.850 * height * 0.254) - (4.676 * ageGroup)
    console.log(bmr):    
}
function yourBmr (ageGroup, height, weight, sex, ){
    let bmr= 0;
    if (sex =='male'){
    bmr = 66.5 + (13.75 * weight * 0.453) + (5.003 * height * 0.254) - (6.75 * ageGroup)
    
    console.log(bmr); 
    } else {
     bmr = 665.1 + (9.563 * weight * 0.453) + (1.850 * height * 0.254) - (4.676 * ageGroup)
    console.log(bmr);     
    }  
}

yourBmr(24, 72, 150, 60);



// function totalPrice(){
//     var sum = 0;
//      $(".totalPrice").each(function(){
//      sum += parseFloat($(this).val());
//     });
//     $("#grandtotal").val(sum);
//     }


// let result = [48, 75, 92, 61, 54, 83, 76];
// let total = result.reduce(function(sum, element){
//   return sum + element;
// }, 0);

// console.log(total);
// >> 489

// let result = [48, 75, 92, 61, 54, 83, 76];
// let total = result.reduce((sum, element) => sum + element, 0);

// console.log(total);
// >> 489


//function OutputResult(props) {
//     let sex;
//     let egfr;
  
//     if (props.male == 'checked'){
//       sex = 1;
//     }
//     if (props.female == 'checked'){
//       sex = 0.739;
//     }
  
//     //四捨五入
//     egfr = (194 * (props.cr**(-1.094)) * (props.age**(-0.287)) * parseFloat(sex)) * 100;
//     egfr = Math.round(egfr) / 100;
  
//     if (isNaN(egfr)){
//       return <p>全ての項目を入力・選択して下さい</p>
//     } else {
//       return <p>eGFR: {egfr} mL/分/1.73m<sup>2</sup></p>;
//     }
  
//   }
  
//   class CalceGFR extends React.Component {
//     constructor(props) {
//       super(props);
//       this.handleChange = this.handleChange.bind(this);
  
//       this.state = {cr: '',
//                     age: '',
//                     male: '',
//                     female: ''
//                     };
//     }
  
//     handleChange(e, ctl) {
//       switch (ctl) {
//         case 'cr':
//           this.setState({cr: e.target.value});
//           break;
//         case 'age':
//           this.setState({age: e.target.value});
//           break;
//         case 'male':
//           this.setState({male: 'checked', female: ''});
//           break;
//         case 'female':
//           this.setState({female: 'checked', male: ''});
//           break;
//         default:
//       }
//     }
  
//     render() {
//       const cr = this.state.cr;
//       const age = this.state.age;
//       const male = this.state.male;
//       const female = this.state.female;
  
//       return (
//         <fieldset>
//           <legend>eGFR 自動計算ツール</legend>
//           <table>
//             <thead>
//             </thead>
//             <tbody>
//             <tr>
//               <td>血清クレアチニン値:</td>
//               <td>
//                 <input size='10' value={cr} onChange={(e) => this.handleChange(e, 'cr')} />
//               </td>
//               <td>
//                 mg/dl
//               </td>
//             </tr>
//             <tr>
//               <td>年齢:</td>
//               <td>
//                 <input size='10' value={age} onChange={(e) => this.handleChange(e, 'age')} />
//               </td>
//               <td>
//                 歳
//               </td>
//             </tr>
//             <tr>
//               <td>性別:</td>
//               <td>
//                 <input type="radio" name="sex" checked={male} onChange={(e) => this.handleChange(e, 'male')} />
//                 <label>男</label>
//                 <input type="radio" name="sex" checked={female} onChange={(e) => this.handleChange(e, 'female')} />
//                 <label>女</label>
//               </td>
//             </tr>
//             </tbody>
//           </table>
  
//           <OutputResult cr={parseFloat(cr)} age={parseFloat(age)} male={male} female={female} />
//         </fieldset>
//       );
//     }
//   }
  
//   ReactDOM.render(
//     <CalceGFR />,
//     document.getElementById('root')
//   );