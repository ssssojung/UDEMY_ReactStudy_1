import React from 'react';

import './ChartBar.css';



function ChartBar(props) {
    let barFillHeight = '0%'
    if(props.maxValue > 0){
        barFillHeight = Math.round((props.value / props.maxValue)*100) + '%';
        // Math.round함수는 입력값을 반올림한 수와 가장 가까운 정수 값을 반환
    }

    return (
        <div className='chart-bar'>
            <div className='chart-bar__inner'>
                <div className='chart-bar__fill' style={{height : barFillHeight}}></div>
                {/* chart=bar__fill은 차트의 바가 얼마나 많이 채워져야하는지 기억하는 역할 */}
            </div>
            <div className='chart-bar__label'>{props.label}</div>
        </div>
    );
}

export default ChartBar;