<template>
  <div>
    <v-card flat>
      <v-card-title class="header">
        <v-row justify-lg="left" justify-sm="center">
          <h2>Programing Skill</h2>
        </v-row>
      </v-card-title>
      <div class="hello" ref="chartdiv"></div>
    </v-card>
  </div>
</template>

<script>
import * as am4core from "@amcharts/amcharts4/core";
import * as am4plugins_forceDirected from "@amcharts/amcharts4/plugins/forceDirected";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

export default {
  name: "HelloWorld",
  props: ["skills"],
  mounted() {
    let main_node_size = 100;
    let sub_node_size = 90;
    let last_node_size = 80;

    let basic_backend = [];

    let basic_front = [];
    let int_front = [];
    let exp_front = [];

    let basic_oth = [];
    let int_oth = [];
    let exp_oth = [];

    this.skills.backend.basic.map(mapped_skill => {
      let skill = {
        name: mapped_skill,
        value: sub_node_size
      };
      basic_backend.push(skill);
    });

    this.skills.frontend.basic.map(mapped_skill => {
      let skill = {
        name: mapped_skill,
        value: last_node_size
      };
      basic_front.push(skill);
    });

    this.skills.frontend.intermediate.map(mapped_skill => {
      let skill = {
        name: mapped_skill,
        value: last_node_size
      };
      int_front.push(skill);
    });

    this.skills.frontend.expert.map(mapped_skill => {
      let skill = {
        name: mapped_skill,
        value: last_node_size
      };
      exp_front.push(skill);
    });

    this.skills.other.basic.map(mapped_skill => {
      let skill = {
        name: mapped_skill,
        value: last_node_size
      };
      basic_oth.push(skill);
    });

    this.skills.other.intermediate.map(mapped_skill => {
      let skill = {
        name: mapped_skill,
        value: last_node_size
      };
      int_oth.push(skill);
    });

    this.skills.other.expert.map(mapped_skill => {
      let skill = {
        name: mapped_skill,
        value: last_node_size
      };
      exp_oth.push(skill);
    });

    let chart = am4core.create(
      this.$refs.chartdiv,
      am4plugins_forceDirected.ForceDirectedTree
    );
    let series = chart.series.push(
      new am4plugins_forceDirected.ForceDirectedSeries()
    );

    series.data = [
      {
        name: "Front-End",
        value: main_node_size,
        children: [
          {
            name: "Basic",
            value: sub_node_size,
            children: basic_front
          },
          {
            name: "Intermediate",
            value: sub_node_size,
            children: int_front
          },
          {
            name: "Expert",
            value: sub_node_size,
            children: exp_front
          }
        ]
      },
      {
        name: "Back-End",
        value: main_node_size,
        children: [
          {
            name: "Basic",
            value: sub_node_size,
            children: basic_backend
          }
        ]
      },
      {
        name: "Other",
        value: main_node_size,
        children: [
          {
            name: "Basic",
            value: sub_node_size,
            children: basic_oth
          },
          {
            name: "Intermediate",
            value: sub_node_size,
            children: int_oth
          },
          {
            name: "Expert",
            value: sub_node_size,
            children: exp_oth
          }
        ]
      }
    ];

    series.dataFields.linkWith = "linkWith";
    series.dataFields.name = "name";
    series.dataFields.id = "name";
    series.dataFields.value = "value";
    series.dataFields.children = "children";

    series.nodes.template.tooltipText = "{name}";
    series.nodes.template.fillOpacity = 1;

    series.nodes.template.label.text = "{name}";
    series.fontSize = 16;
    series.maxLevels = 2;
    series.maxRadius = am4core.percent(6);
    series.manyBodyStrength = -16;
    series.nodes.template.label.hideOversized = true;
    series.nodes.template.label.truncate = true;
    this.chart = chart;
  },
  beforeDestroy() {
    if (this.chart) {
      this.chart.dispose();
    }
  }
};
</script>

<style>
.hello {
  width: 100%;
  height: 500px;
  padding: 20px;
  
}
.header {
  padding: 50px;
}

</style>