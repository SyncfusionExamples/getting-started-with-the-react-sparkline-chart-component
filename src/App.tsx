import { SparklineComponent , Inject, SparklineTooltip} from '@syncfusion/ej2-react-charts';
import './App.css';
function App() {
  return (
    <div className="App">
     <SparklineComponent
    
    dataSource={[
        { month: 'January', value: 34},
        { month: 'February', value: 36 },
        { month: 'March', value: 32},
        { month: 'April', value:35 },
        { month: 'May', value: 40 },
        { month: 'June', value: 38 },
        { month: 'July', value: 33 },
        { month: 'August', value: 37 },
        { month: 'september', value: 34 },
        { month: 'October', value: 31},
        { month: 'November', value: 30 },
        { month: 'December', value: 28 }
    ]}xName='month' yName='value' valueType='Category'
    height='150px' width='80px'
 type='Line'
    markerSettings={{visible: ['All']}}
    dataLabelSettings={{visible: ['Start','End']}}
    padding= { { left: 10, right: 10} }
    tooltipSettings={{visible: true}}
     >
       <Inject services={[SparklineTooltip]}/>
     </SparklineComponent> 
    </div>
  );
}
export default App;
