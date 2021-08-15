import React from 'react';
import {
  Chart,
  PieSeries,
} from '@devexpress/dx-react-chart-material-ui';

import { Animation } from '@devexpress/dx-react-chart';

const demodata = [
  { country: 'Russia', area: 12 },
  { country: 'Canada', area: 7 },
  { country: 'USA', area: 7 },
  { country: 'China', area: 7 },
  { country: 'Brazil', area: 6 },
  { country: 'Australia', area: 5 },
  { country: 'India', area: 2 },
  { country: 'Others', area: 55 },
];
export default function Demo() {
    return (
        <Chart data={demodata}>
            <PieSeries valueField="area" argumentField="country" />
            <Animation />
        </Chart>
    );
}