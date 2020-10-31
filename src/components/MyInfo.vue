<template>
<div>
    <v-card class="mx-auto" max-width="700">
        <v-card-title>All About Me</v-card-title>
        <div class="about">
            <div>{{ title }}</div>
            <div>Date of Birth : </div>
            <div>Main Branch : </div>
            <div>Sub Branch : </div>
            <div>Lifestyle : </div>
            <div>Interesting : </div>
        </div>
    </v-card>

    <div>
        <v-divider inset></v-divider>
        <div>Education</div>
        <v-card class="mx-auto" max-width="600">
            <v-timeline align-top dense class="timeline-font">
                <v-timeline-item small right>
                    <div>
                        <v-row dense>
                            <v-col>2000 - 2000</v-col>
                            <v-col>
                                <v-row><strong>Prince of Songkhla University</strong></v-row>
                                <v-row>Faculty of Engineering (Com Eng.)</v-row>
                            </v-col>
                        </v-row>
                    </div>
                </v-timeline-item>
                <v-timeline-item small right>
                    <div>
                        <v-row dense>
                            <v-col>2000 - 2000</v-col>
                            <v-col>
                                <v-row><strong>Pakphanang School</strong></v-row>
                                <v-row>SMTP Program</v-row>
                            </v-col>
                        </v-row>
                    </div>
                </v-timeline-item>
                <v-timeline-item small right>
                    <div>
                        <v-row dense>
                            <v-col>2000 - 2000</v-col>
                            <v-col>
                                <v-row><strong>Pakphanang School</strong></v-row>
                                <v-row>SMTP Program</v-row>
                            </v-col>
                        </v-row>
                    </div>
                </v-timeline-item>
            </v-timeline>
        </v-card>
    </div>

</div>
</template>

<script>
export default {
    name: "MyInfo",
    props: ['title', 'info'],
    data() {
        return {};
    }
};
</script>

<style>
.timeline-font {
    font-size: 14px;
}

.about {
    padding: 10px;
}
</style>
