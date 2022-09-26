<template>
  <body>
    <div id="faq"> 
      <div class="outer">
        <section class="top">
          <div data-aos="flip-left" 
                data-aos-offset="200" 
                data-aos-delay="100" 
                data-aos-duration="1000"
                data-aos-easing="ease-in-out">
            <h1>Tokenomics</h1>
          </div>
        </section>
        <section class="middle">
          <div class="charts">
            <div class="chart-container">
              <!--<canvas id="doughChart" aria-label="tokenomics" role="img"></canvas>-->
              <Chart type="doughnut" :data="chartData" :options="lightOptions" />
              <!--<GChart type="PieChart" :data="chartData" :options="chartOptions"/>-->
              <h2 data-aos="fade-up" data-aos-offset="200"  data-aos-duration="1000" data-aos-easing="ease-in-out">Safari World Token <br> Allocation</h2>
              <ul>
                <li data-aos="fade-up" data-aos-offset="200"  data-aos-duration="1000" data-aos-easing="ease-in-out">
                  <h1 style="color:#f0fff6">Presale (10%)</h1>
                  <p>PinkSale.Finance launch</p>
                </li>
                <li data-aos="fade-up" data-aos-offset="200"  data-aos-duration="1000" data-aos-easing="ease-in-out">
                  <h1 style="color:#ccffe2">Community Building (5%)</h1>
                  <p>Unlocked utilized for Community Building Rewards and Airdrops.</p>
                </li>
                <li data-aos="fade-up" data-aos-offset="200"  data-aos-duration="1000" data-aos-easing="ease-in-out">
                  <h1 style="color:#99ffc5">Marketing (10%)</h1>
                  <p>Unlocked after presale, then 10% unlocked per month</p>
                </li>
                <li data-aos="fade-up" data-aos-offset="200"  data-aos-duration="1000" data-aos-easing="ease-in-out">
                  <h1 style="color:#66ffa8">GamePlay Rewards (20%)</h1>
                  <p>Slow release into ecosystem in-game rewards</p>
                </li>
                <li data-aos="fade-up" data-aos-offset="200"  data-aos-duration="1000" data-aos-easing="ease-in-out">
                  <h1 style="color:#33ff8b">Staking Rewards (20%)</h1>
                  <p>Rewards for Yield Farms, SafariWorldVerse, SafariWorldPark.</p>
                </li>
                <li data-aos="fade-up" data-aos-offset="200"  data-aos-duration="1000" data-aos-easing="ease-in-out">
                  <h1 style="color:#00fd6e">Future Liquidity (8%)</h1>
                  <p>Locked till Listings</p>
                </li>
                <li data-aos="fade-up" data-aos-offset="200"  data-aos-duration="1000" data-aos-easing="ease-in-out">
                  <h1 style="color:#00e663">Liquidity (7%)</h1>
                  <p>Permanently Locked/Burned</p>
                </li>
                <li data-aos="fade-up" data-aos-offset="200"  data-aos-duration="1000" data-aos-easing="ease-in-out">
                  <h1 style="color:#00cc58">Conservation Trust (5%)</h1>
                  <p>Unlocked for Conservation Efforts</p>
                </li>
                <li data-aos="fade-up" data-aos-offset="200"  data-aos-duration="1000" data-aos-easing="ease-in-out">
                  <h1 style="color:#00b34d">Team (10%)</h1>
                  <p>Locked for 6 months then unlocked (10%/month)</p>
                </li>
                <li data-aos="fade-up" data-aos-offset="200"  data-aos-duration="1000" data-aos-easing="ease-in-out">
                  <h1 style="color:#009942">Founders (5%)</h1>
                  <p>Locked for 1 year then unlocked (25%/quarter)</p>
                </li>
              </ul>
            </div>
            <div class="fee-container" data-aos="fade-up" data-aos-offset="200"  data-aos-duration="1000" data-aos-easing="ease-in-out">
              <h2>SWT Structure</h2>
              <ul>
                
                <li>
                  <h1>SWT Transactions</h1>
                  <p>1.0% Liquidity</p>
                  <p>1.0% Buyback Rewards</p>
                  <p>1.0% Conservation fund</p>
                  <p>0.5% Reward emissions</p>
                  <p>0.5% Developments</p>
                </li>
                <p style="font-style: italic; color: rgb(0, 253, 110)">*Minimal Loss of 4% at time of trading, exchanging and utilizing*</p>
                <li>
                  <h1>SWT Security</h1>
                  <p>Liquidity Burned</p>
                  <p>Team Doxed</p>
                  <p>Verifiable Partnerships</p>
                  <p>Token Contract Renounced</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      
    </div>
  </body>
</template>

<script>
  /*
//import { GChart } from "vue3-googl-chart";
export default {
  name: 'Tokenomics',

  components: {
    GChart,
  },
  data() {
    return {
      // Array will be automatically processed with visualization.arrayToDataTable function
      chartData: [
        ['Allocation', 'Tokens'],
        ["PreSale", 100000000],
        ["Community Building", 50000000],
        ["Marketing", 100000000],
        ["GamePlay Rewards", 200000000],
        ["Staking Rewards", 200000000],
        ["Future Liquidity", 50000000],
        ["Liquidity", 70000000],
        ["Conservation Trust", 50000000],
        ["Team", 100000000],
        ["Founders", 50000000]
      ],
      chartOptions: {
        chart: {
          title: "Company Performance",
          subtitle: "Sales, Expenses, and Profit: 2014-2017",
        },
        chartArea: {width: '100%', height: '0px'},
        tooltip: {textStyle: {color: 'black'}, showColorCode: true, text: 'value',},
        legend: {textStyle: {color: 'white'}},
        height: 500,
        is3D: true,
        pieSliceText: 'none',
        slices: {  4: {offset: 0.2},
                  12: {offset: 0.3},
                  14: {offset: 0.4},
                  15: {offset: 0.5},
        },
        backgroundColor: { fill:'transparent' },
        colors: [
          '#f0fff6',
          '#ccffe2',
          '#99ffc5',
          '#66ffa8',
          '#33ff8b',
          '#00fd6e',
          '#00e663',
          '#00cc58',
          '#00b34d',
          '#009942'
        ],
      },
    };
  },
  
};
*/

import Chart from 'primevue/chart';
import { ref } from 'vue';

export default {
    name: "Tokenomics",
    components: {
      Chart
    },
    setup() {
      const chartData = ref({
          labels: [
            'PreSale',
            'Community Building',
            'Marketing',
            'GamePlay Rewards',
            'Staking Rewards',
            'Future Liquidity',
            'Liquidity',
            'Conservation Trust',
            'Team',
            'Founders'
          ],
          datasets: [
              {
                data: [
                  100000000, 
                  50000000, 
                  100000000, 
                  200000000, 
                  200000000, 
                  80000000, 
                  70000000, 
                  50000000, 
                  100000000, 
                  50000000
                ],
                backgroundColor: [
                  '#f0fff6',
                  '#ccffe2',
                  '#99ffc5',
                  '#66ffa8',
                  '#33ff8b',
                  '#00fd6e',
                  '#00e663',
                  '#00cc58',
                  '#00b34d',
                  '#009942'
                ],
                borderColor: 
                  'rgb(0,0,0)'
                ,
                borderJoinStyle: 
                  "bevel"
                ,
                
                hoverOffset: 4
              }
          ]
      });

      const lightOptions = ref({
        plugins: {
            legend: {
              display: true,
              position: 'left',
              align: 'start',
              color: 'rgb(255, 255, 255)',
              labels: {
                color: "white"
              }
          },
        }
      });

		return { chartData, lightOptions }
    }
}

/*
import Chart from 'chart.js/auto';

export default {
  name: 'Faq',

  mounted() {
    const ctx = document.getElementById('doughChart');
    const data = {
      labels: [
        'PreSale',
        'Community Building',
        'Marketing',
        'GamePlay Rewards',
        'Staking Rewards',
        'Future Liquidity',
        'Liquidity',
        'Conservation Trust',
        'Team',
        'Founders'
      ],
      datasets: [{
        label: 'My First Dataset',
        data: [
          100000000, 
          50000000, 
          100000000, 
          200000000, 
          200000000, 
          50000000, 
          70000000, 
          50000000, 
          100000000, 
          50000000
        ],
        backgroundColor: [
          '#f0fff6',
          '#ccffe2',
          '#99ffc5',
          '#66ffa8',
          '#33ff8b',
          '#00fd6e',
          '#00e663',
          '#00cc58',
          '#00b34d',
          '#009942'
        ],
        borderColor: [
          'rgb(0,0,0)'
        ],
        borderJoinStyle: [
          "bevel"
        ],
        
        hoverOffset: 4
      }]
    };

    const doughChart = new Chart(ctx, {
      type: 'doughnut',
      data: data,
      options: {
        plugins: {
            title: {
              display: false,
              text: 'Token Allocation',
              color: 'rgb(255, 255, 255)',
              padding: 20,
              font: {
                        size: 30
                    }
            },
            legend: {
              display: true,
              position: 'left',
              align: 'start',
              color: 'rgb(255, 255, 255)',
              labels: {
                color: "white"
              }
              },
        }
    }

    });

  doughChart;
  
  }

}
*/
</script>

<style lang="scss" scoped>

#faq {
  display: inline;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: honeydew;
  
  
}

.charts {
  
  padding: 5% 5%;
  @media (min-width: 400px) {
      padding:  5% 5%;
    }
  @media (min-width: 750px) {
    padding: 5% 20%;
  }
}
.chart-container {
  color:rgb(255, 255, 255);
  background-color: rgba(0, 0, 0, 0.705);
  padding: 5%;
  @media (min-width: 400px) {
      padding: 5%;
    }
  @media (min-width: 750px) {
      padding: 10%;
    }
  li {
    list-style: none;
    text-align: left;
    text-decoration: none;
    padding: 10px 0;
    h1 {

      font-size: 1.7em;
      text-shadow: 1px 1px black;
      @media (min-width: 400px) {
        font-size: 2em;
        }
      @media (min-width: 750px) {
        font-size: 3em;
      }
    }
  }
  ul {
    padding: 0;
  }
}
.fee-container {
  color:rgb(255, 255, 255);
  background-color: rgba(0, 0, 0, 0.705);
  padding: 5%;
  @media (min-width: 400px) {
      padding: 5%;
    }
  @media (min-width: 750px) {
      padding: 10%;
    }
  li {
    list-style: none;
    text-align: center;
    text-decoration: none;
    padding: 10px 0;
    h1 {
      text-decoration: underline;
      font-size: 2em;
      text-shadow: 1px 1px black;
      @media (min-width: 400px) {
        font-size: 2em;
        }
      @media (min-width: 750px) {
        font-size: 3em;
      }
    }
  }
  ul {
    padding: 0;
  }
}
.p-grid {
    
    padding: 10px 20px;
    @media (min-width: 250px) {
        padding: 20px 40px;
      }
    @media (min-width: 750px) {
        padding: 20px 150px;
      }
    @media (min-width: 1200px) {
        padding: 20px 300px;
      }
    
    p {
      font-size: 18px;
    }
  }

.outer {
  padding: 0px 0px 0px;
  background-image: url('./assets/img/DSCN1748.webp');
  background-size: fill; 
  background-repeat: round; 
  background-attachment: fixed;
  color: black;
  //animation: 300s para infinite linear;

}
@keyframes para {
  100% {
    background-position: 
      -5000px 20%,
      -800px 95%,
      500px 50%,
      1000px 100%,
      400px 0;
    }
  }
.top {
  //background-image: linear-gradient(rgba(255, 255, 255, 0.705), rgb(0, 0, 0));
  background-color: rgb(0, 0, 0);
  width: 100%;
  padding: 20px 0px 40px;
  color: rgb(255, 255, 255);
  
  h1 {
    font-family: headerFont;
    font-size: 3em;
    text-shadow: grey;
    text-decoration: underline;
    @media (min-width: 400px) {
        font-size: 4em;
      }
    @media (min-width: 750px) {
      font-size: 6em;
    }
  }
  p {
    font-family: pFont;
    font-size: .7em;
    @media (min-width: 400px) {
        font-size: 1em;
      }
    @media (min-width: 750px) {
      font-size: 1.5em;
    }
  }
}
.middle {
  background-image: linear-gradient(rgba(255, 241, 173, 0.863), rgba(218, 123, 0, 0.582));
  width: 100%;
  padding: 20px 0px 40px;
  h2 {
    font-family: headerFont;
    text-decoration: underline;
    font-size: 1.5em;
    text-shadow: grey;
    padding: 20px;
    text-shadow: 2px 2px black;
    @media (min-width: 400px) {
        font-size: 3em;
      }
    @media (min-width: 750px) {
      font-size: 3.5em;
    }
  }
  p {
    font-family: pFont;
    font-size: 1em;
    @media (min-width: 400px) {
        font-size: 1em;
      }
    @media (min-width: 750px) {
      font-size: 1.5em;
    }
  }
}

</style>