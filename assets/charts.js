(function () {
  var style = getComputedStyle(document.documentElement);
  var accent = style.getPropertyValue('--accent').trim();
  var accent2 = style.getPropertyValue('--accent2').trim();
  var ink = style.getPropertyValue('--ink').trim();
  var muted = style.getPropertyValue('--muted').trim();
  var rule = style.getPropertyValue('--rule').trim();
  var bg2 = style.getPropertyValue('--bg2').trim();

  var coverageEl = document.getElementById('chart-coverage');
  if (coverageEl) {
    var coverageChart = echarts.init(coverageEl, null, { renderer: 'svg' });
    coverageChart.setOption({
      animation: false,
      color: [accent, accent2],
      grid: { left: 46, right: 20, top: 40, bottom: 50 },
      tooltip: { trigger: 'axis', appendToBody: true },
      legend: {
        top: 0,
        textStyle: { color: muted }
      },
      xAxis: {
        type: 'category',
        data: ['Agent', '合规安全', '微调', '私有化部署', 'AI开发工程', '老项目迁移'],
        axisLine: { lineStyle: { color: rule } },
        axisLabel: { color: muted, interval: 0 }
      },
      yAxis: [
        {
          type: 'value',
          name: '文档数',
          minInterval: 1,
          axisLine: { show: false },
          axisLabel: { color: muted },
          splitLine: { lineStyle: { color: rule } }
        },
        {
          type: 'value',
          name: '关键词总分',
          axisLine: { show: false },
          axisLabel: { color: muted },
          splitLine: { show: false }
        }
      ],
      series: [
        {
          name: '命中文档数',
          type: 'bar',
          data: [30, 25, 10, 12, 30, 21],
          barMaxWidth: 34,
          itemStyle: { color: accent }
        },
        {
          name: '关键词总分',
          type: 'line',
          yAxisIndex: 1,
          data: [555, 344, 41, 38, 447, 97],
          smooth: false,
          symbol: 'circle',
          symbolSize: 8,
          lineStyle: { width: 2, color: accent2 },
          itemStyle: { color: accent2 }
        }
      ]
    });
    window.addEventListener('resize', function () { coverageChart.resize(); });
  }

  var topDocsEl = document.getElementById('chart-top-docs');
  if (topDocsEl) {
    var topDocsChart = echarts.init(topDocsEl, null, { renderer: 'svg' });
    topDocsChart.setOption({
      animation: false,
      color: [accent],
      grid: { left: 180, right: 24, top: 24, bottom: 24 },
      tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' }, appendToBody: true },
      xAxis: {
        type: 'value',
        axisLine: { show: false },
        axisLabel: { color: muted },
        splitLine: { lineStyle: { color: rule } }
      },
      yAxis: {
        type: 'category',
        axisTick: { show: false },
        axisLine: { show: false },
        axisLabel: { color: ink, width: 165, overflow: 'truncate' },
        data: [
          'Self-GC',
          'REAL 风险矩阵',
          'OpenViking',
          'BLM 内容安全',
          '蚂蚁 AI 原生',
          '2026 AI 创业机会',
          '柯南 AI Agent',
          'AI 神盾风控',
          'Qoder CLI',
          '华为云码道'
        ]
      },
      series: [
        {
          type: 'bar',
          data: [87.9, 91.6, 104.5, 114.4, 122.4, 128.8, 134.6, 135.8, 148.8, 180.0],
          barMaxWidth: 22,
          label: {
            show: true,
            position: 'right',
            color: muted,
            formatter: '{c}'
          },
          itemStyle: {
            color: function (params) {
              return params.dataIndex > 6 ? accent : accent2;
            }
          }
        }
      ]
    });
    window.addEventListener('resize', function () { topDocsChart.resize(); });
  }
})();
