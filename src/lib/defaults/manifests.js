// import capitalize from 'capitalize';

// const colors = [
//   '#6991AC',
//   '#314D5F',
//   '#B1DCF8',
//   '#98D1F8',
//   '#5F4827',
//   '#292C44',
//   '#18CDCA',
//   '#3A86BA',
//   '#4DB3F8',
//   '#4A6679',
// ];

// function getRechart(options = {}) {
//   const { data, charts, minHeight = 300, props, chartType, includeScale, xAxis = true, yAxis = true, legend = true, children = [], tooltipProps = {}, tooltip = true, tooltipEvalProps = {}, containerProps = {}, ignoreReduxProps = true, legendProps = {},  } = options;
//   const chartComponents = (Array.isArray(charts))
//     ? charts.map((chart, i) => ({
//       component: `recharts.${capitalize(chart.type)}`,
//       props: Object.assign({
//         dataKey: chart.dataKey,
//         fill: (chart.fill || chart.fillColor) ? chart.fillColor || colors[ i % colors.length ] : undefined,
//         stroke: (chart.stroke || chart.strokeColor || chart.type==='line') ? chart.strokeColor || colors[ i % colors.length ] : undefined,
//       }, chart.props),
//     }))
//     : [];
//   const rechartType = chartType ||
//     (Array.isArray(charts) && charts.length === 1)
//     ? charts[ 0 ].type
//     : (Array.isArray(charts) && charts.length > 1 && charts.filter(chart=>chart.type!==charts[0].type).length===0)
//       ? charts[0].type
//       : 'composed';
//   // const util = require('util');
//   // console.log(util.inspect(chartComponents, {depth:20}),{  rechartType });

//   return {
//     component: 'recharts.ResponsiveContainer',
//     ignoreReduxProps,
//     props: Object.assign({
//       minHeight,
//     }, containerProps),
//     __dangerouslyInsertComponents: {
//       children: {
//         component: `recharts.${capitalize(rechartType)}Chart`,
//         props: Object.assign({
//           data,
//         }, props),
//         children: chartComponents.concat([
//           (legend)?{
//             component: 'recharts.Legend',
//             props:Object.assign( {
//               align: 'right',
//             }, legendProps),
//           } : null,
//           (xAxis)
//             ?  {
//               component: 'recharts.XAxis',
//               props: Object.assign({
//                 dataKey: 'date',
//               }, xAxis.props),
//               children: [{
//                 component: 'recharts.Label',
//                 props: Object.assign( {
//                   // value: 'Sales $',
//                   position: 'insideBottom',
//                 }, xAxis.labelProps),
//               },],
//             }
//             : null,
//           (yAxis)
//             ?  {
//               component: 'recharts.YAxis',
//               props: Object.assign({
//               }, yAxis.props),
              
//               __dangerouslyEvalProps: Object.assign({
//                 tickFormatter: '(tick)=> window.__rajaxUtils.numeral(tick).format("0.0a")',
//               }, yAxis.evalProps),
//               children: [{
//                 component: 'recharts.Label',
//                 props: Object.assign( {
//                   // value: 'Sales $',
//                   position: 'insideLeft',
//                   angle: -90,
//                 }, yAxis.labelProps),
//               },],
//             }
//             : null,
//           (tooltip)?{
//             component: 'recharts.Tooltip',
//             props: Object.assign({
//               // dataKey:'actual',
//             }, tooltipProps),
//             __dangerouslyEvalProps: Object.assign({
//               formatter: '(tick)=> window.__rajaxUtils.numeral(tick).format("$0,0.00")',
//             }, tooltipEvalProps),
//           }:null,
//           (includeScale)
//             ? {
//               component:'recharts.Brush',
//             }
//             : null,
            
//         ]).concat(children),
//       },
//     },
//   };
// }
// const data  = [
//   {
//     date: 'Jan-17',
//     projected: 11430,
//     actual: 11440,
//     budget:10056,
//   },
//   {
//     date: 'Feb-17',
//     projected: 122403,
//     actual: 111079,
//     budget:130000,
//   },
//   {
//     date: 'Mar-17',
//     projected: 125752,
//     actual: 131561,
//     budget:103980,
//   },
//   {
//     date: 'Apr-17',
//     projected: 114308,
//     actual: 114401,
//     budget:100560,
//   },
//   {
//     date: 'May-17',
//     projected: 122403,
//     actual: 111079,
//     budget:130000,
//   },
//   {
//     date: 'Jun-17',
//     projected: 125752,
//     actual: 131561,
//     budget:103980,
//   },
//   {
//     date: 'Jul-17',
//     projected: 114308,
//     actual: 114401,
//     budget:100560,
//   },
//   {
//     date: 'Aug-17',
//     projected: 122403,
//     actual: 111079,
//     budget:130000,
//   },
//   {
//     date: 'Sept-17',
//     projected: 125752,
//     actual: 131561,
//     budget:103980,
//   },
//   {
//     date: 'Oct-17',
//     projected: 114308,
//     actual: 114401,
//     budget:100560,
//   },
//   {
//     date: 'Nov-17',
//     projected: 122403,
//     actual: 111079,
//     budget:130000,
//   },
//   {
//     date: 'Dec-17',
//     projected: 125752,
//     actual: 131561,
//     budget:103980,
//   },
// ];

// // console.log(getRechart);
// const testChart = getRechart({
//   data: data,
//   minHeight:360,
//   includeScale:true,
//   xAxis: {
//     // props: {
//     //   label: 'Sales',
//     //   name: 'Sales',
//     //   // dataKey
//     // },
//   },
//   yAxis: {
//     // props: {
//     //   label: 'Sales',
//     //   // dataKey
//     // },
//   },
//   charts: [
//     {
//       type: 'bar',
//       dataKey: 'budget',
//       fill:true,
//     },
//     {
//       type: 'bar',
//       dataKey: 'projected',
//       fill:true,
//     },
//     {
//       type: 'line',
//       dataKey: 'actual',
//       stroke:true,
//       strokeColor:'black',
//       props: {
//         activeDot:true,
//       },
//     },
//   ],
// });

// export const manifests = {
//   containers: {
//     '/': {
//       layout: {
//         component: 'Fragment',
//         children: [
//           {
//             component: 'Semantic.Segment',
//             props: {
//               style: { padding: '8em 0em', },
//               vertical: true,
//             },
//             children: [
//               {
//                 component: 'Semantic.Grid',
//                 props: {
//                   container: true,
//                   stackable: true,
//                   verticalAlign:'middle',
//                 },
//                 children: [
//                   {
//                     component: 'Semantic.Grid.Row',
//                     children: [
//                       {
//                         component: 'Semantic.Grid.Column',
//                         props: {
//                           width:8,
//                         },
//                         children: [
//                           {
//                             component: 'Semantic.Header',
//                             props: {
//                               as:'h3',
//                             },
//                             children:'We Help Companies and Companions',
//                           },
//                           {
//                             component: 'p',
//                             children:'We can give your company superpowers to do things that they never thought possible. Let us delight                             your customers and empower your needs... through pure data analytics.'
//                           },
//                           {
//                             component: 'Semantic.Header',
//                             props: {
//                               as:'h3',
//                             },
//                             children:'We Make Bananas That Can Dance',
//                           },
//                           {
//                             component: 'p',
//                             children:'Yes that\'s right, you thought it was the stuff of dreams, but even bananas can be bioengineered.'
//                           },
//                         ],
//                       },
//                       {
//                         component: 'Semantic.Grid.Column',
//                         props: {
//                           floated: 'right',
//                           width: 6,
//                         },
//                         children: [
//                           {
//                             component: 'Semantic.Image',
//                             props: {
//                               bordered: true,
//                               rounded: true,
//                               size: 'large',
//                               src:'/favicon.png',
//                             }
//                           },
//                           testChart,
//                         ]
//                       }
//                     ],
//                   },
//                   {
//                     component: 'Semantic.Grid.Row',
//                     children: [
//                       {
//                         component: 'Semantic.Grid.Column',
//                         props: {
//                           textAlign:'center',
//                         },
//                         children: [
//                           {
//                             component: 'Semantic.Button',
//                             props: {
//                               size:'huge',
//                             },
//                             children:'Check Them Out',
//                           }
//                         ]
//                       }
//                     ]
//                   }
//                 ],
//               },
//             ],
//           },
//         ],
//       },
//       resources: {},
//       pageData: {},
//       callbacks:{},
//     },
//   },
// };

// /*
// <Segment style={{ padding: '0em', }} vertical>
//             <Grid celled="internally" columns="equal" stackable>
//               <Grid.Row textAlign="center">
//                 <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em', }}>
//                   <Header as="h3" style={{ fontSize: '2em', }}>"What a Company"</Header>
//                   <p style={{ fontSize: '1.33em', }}>That is what they all say about us</p>
//                 </Grid.Column>
//                 <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em', }}>
//                   <Header as="h3" style={{ fontSize: '2em', }}>"I shouldn't have gone with their competitor."</Header>
//                   <p style={{ fontSize: '1.33em', }}>
//                     <Image avatar src="/assets/images/avatar/large/nan.jpg" />
//                     <b>Nan</b> Chief Fun Officer Acme Toys
//                   </p>
//                 </Grid.Column>
//               </Grid.Row>
//             </Grid>
//           </Segment>
//           <Segment style={{ padding: '8em 0em', }} vertical>
//             <Container text>
//               <Header as="h3" style={{ fontSize: '2em', }}>Breaking The Grid, Grabs Your Attention</Header>
//               <p style={{ fontSize: '1.33em', }}>
//                 Instead of focusing on content creation and hard work, we have learned how to master the art of doing
//                 nothing by providing massive amounts of whitespace and generic content that can seem massive, monolithic
//                 and worth your attention.
//               </p>
//               <Button as="a" size="large">Read More</Button>

//               <Divider
//                 as="h4"
//                 className="header"
//                 horizontal
//                 style={{ margin: '3em 0em', textTransform: 'uppercase', }}
//               >
//                 <a href="">Case Studies</a>
//               </Divider>

//               <Header as="h3" style={{ fontSize: '2em', }}>Did We Tell You About Our Bananas?</Header>
//               <p style={{ fontSize: '1.33em', }}>
//                 Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but it's really
//                 true.
//                 It took years of gene splicing and combinatory DNA research, but our bananas can really dance.
//               </p>
//               <Button as="a" size="large">I'm Still Quite Interested</Button>
//             </Container>
//           </Segment>
// */