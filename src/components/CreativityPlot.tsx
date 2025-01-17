import Plot from 'react-plotly.js';
import { Data, Layout } from 'plotly.js';

const CreativityPlot = () => {
  // Ensure Plotly is loaded in the browser
  if (typeof window === 'undefined') {
    return null;
  }

  // Data from the R analysis
  const intrinsicData = [12, 12, 12.9, 13.6, 16.6, 17.2, 17.5, 18.2, 19.1, 19.3, 19.8, 20.3, 20.5, 20.6, 21.3, 21.6, 22.1, 22.2, 22.6, 23.1, 24, 24.3, 26.7, 29.7];
  const extrinsicData = [5, 5.4, 6.1, 10.9, 11.8, 12, 12.3, 14.8, 15, 16.8, 17.2, 17.2, 17.4, 17.5, 18.5, 18.7, 18.7, 19.2, 19.5, 20.7, 21.2, 22.1, 24];

  const plotData: Data[] = [
    {
      type: 'box' as const,
      y: intrinsicData,
      name: 'Intrinsic',
      boxpoints: 'all' as const,
      jitter: 0.3,
      pointpos: -1.8,
      fillcolor: 'rgba(135,206,235,0.7)',
      marker: {
        color: 'rgba(135,206,235,1)',
        size: 8,
        line: {
          color: 'rgba(255,255,255,1)',
          width: 1
        }
      },
      line: {
        color: 'rgba(51,51,51,1)'
      }
    },
    {
      type: 'box' as const,
      y: extrinsicData,
      name: 'Extrinsic',
      boxpoints: 'all' as const,
      jitter: 0.3,
      pointpos: -1.8,
      fillcolor: 'rgba(240,128,128,0.7)',
      marker: {
        color: 'rgba(240,128,128,1)',
        size: 8,
        line: {
          color: 'rgba(255,255,255,1)',
          width: 1
        }
      },
      line: {
        color: 'rgba(51,51,51,1)'
      }
    }
  ];

  const layout: Partial<Layout> = {
    title: {
      text: 'Distribution of Creativity Scores by Treatment<br><sup>p-value: 0.0056</sup>',
      font: {
        family: 'Roboto',
        size: 22
      }
    },
    yaxis: {
      title: {
        text: 'Creativity Score',
        font: {
          family: 'Roboto',
          size: 18
        }
      },
      gridcolor: 'rgba(102,102,102,1)',
      zerolinecolor: 'rgba(102,102,102,1)'
    },
    xaxis: {
      title: {
        text: 'Treatment Type',
        font: {
          family: 'Roboto',
          size: 18
        }
      },
      gridcolor: 'rgba(102,102,102,1)'
    },
    plot_bgcolor: 'rgba(127,127,127,1)',
    paper_bgcolor: 'rgba(255,255,255,1)',
    font: {
      family: 'Roboto'
    },
    showlegend: true,
    width: 900,
    height: 600,
    margin: {
      l: 50,
      r: 50,
      b: 50,
      t: 80
    }
  };

  return (
    <div className="w-full">
      <Plot
        data={plotData}
        layout={layout}
        config={{
          responsive: true,
          displayModeBar: true,
          modeBarButtonsToAdd: ['hoverclosest', 'hovercompare']
        }}
        className="w-full"
      />
    </div>
  );
};

export default CreativityPlot;